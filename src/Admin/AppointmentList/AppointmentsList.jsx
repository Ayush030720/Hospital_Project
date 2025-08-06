import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

export default function AppointmentForm() {
  const [appointments, setAppointments] = useState([]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false); // NEW

  const initialValues = {
    appointDate: "",
    appointTime: "",
    doctor: "",
    reason: "",
    extraInfo: ""
  };

  const validate = (values) => {
    const errors = {};
    if (!values.appointDate) errors.appointDate = "Date required";
    if (!values.appointTime) errors.appointTime = "Time required";
    if (!values.doctor) errors.doctor = "Select a doctor";
    return errors;
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:8090/AppointmentList");
      setAppointments(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const payload = {
      ...values,
      appointDate: new Date(values.appointDate).toISOString().split("T")[0],
      appointTime:
        values.appointTime.length === 5
          ? values.appointTime + ":00"
          : values.appointTime,
    };

    try {
      if (editingAppointment && editingAppointment.id) {
        await axios.put(
          `http://localhost:8090/updateAppointment/${editingAppointment.id}`,
          payload
        );
      } else {
        await axios.post("http://localhost:8090/AppointmentBook", values);
      }
      resetForm();
      setShowPopup(true);
      fetchAppointments();
      setShowFormPopup(false);
      setEditingAppointment(null);
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setShowFormPopup(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/DeleteAppointment/${id}`);
      fetchAppointments();
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Appointment Management</h2>

      {/* <button
        onClick={() => {
          setEditingAppointment(null);
          setShowFormPopup(true);
        }}
        style={styles.button}>
        Book New Appointment
      </button> */}

      {showFormPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupBox}>
            <h2>{editingAppointment ? "Update" : "Book"} Appointment</h2>
            <Formik
              initialValues={editingAppointment || initialValues}
              enableReinitialize
              validate={validate}
              onSubmit={handleSubmit}>
              <Form style={styles.form}>
                <Field name="appointDate" type="date" style={styles.input} />
                <ErrorMessage
                  name="appointDate"
                  component="div"
                  style={styles.error}
                />

                <Field
                  name="appointTime"
                  type="time"
                  step="1"
                  style={styles.input}
                />
                <ErrorMessage
                  name="appointTime"
                  component="div"
                  style={styles.error}
                />

                <Field as="select" name="doctor" style={styles.input}>
                  <option value="">Select Doctor / Department</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Dentist">Dentist</option>
                  <option value="Gynecologist">Gynecologist</option>
                </Field>
                <ErrorMessage
                  name="doctor"
                  component="div"
                  style={styles.error}
                />

                <Field
                  as="textarea"
                  name="reason"
                  placeholder="Reason"
                  style={styles.textarea}
                />
                <Field
                  as="textarea"
                  name="extraInfo"
                  placeholder="Extra info"
                  style={styles.textarea}
                />

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <button type="submit" style={styles.button}>
                    {editingAppointment ? "Update" : "Book"} Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowFormPopup(false);
                      setEditingAppointment(null);
                    }}
                    style={styles.closeBtn}>
                    Cancel
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}

      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupBox}>
            <div style={styles.tick}>✓</div>
            <h3>
              Appointment {editingAppointment ? "Updated" : "Booked"}{" "}
              Successfully
            </h3>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <h3 style={{ marginTop: "40px" }}>All Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.appointDate}</td>
                <td>{a.appointTime}</td>
                <td>{a.doctor}</td>
                <td>{a.reason}</td>
                <td>
                  <button onClick={() => handleEdit(a)} style={styles.editBtn}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    style={styles.deleteBtn}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f7f7f7",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "60px",
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
  },
  editBtn: {
    padding: "5px 10px",
    marginRight: "5px",
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
  },
  popupBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    minWidth: "400px",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  tick: {
    fontSize: "50px",
    color: "green",
    marginBottom: "10px",
  },
  closeBtn: {
    marginTop: "15px",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
