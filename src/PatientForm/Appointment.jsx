import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function AppointmentForm() {

  const [showPopup, setShowPopup] = useState(false);
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
    reason: '',
    notes: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.phone) errors.phone = 'Phone is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.date) errors.date = 'Appointment date is required';
    if (!values.time) errors.time = 'Preferred time is required';
    if (!values.doctor) errors.doctor = 'Please select a doctor/specialty';
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Appointment Data:', values);
    setShowPopup(true); // Show popup
    resetForm();
  };

  return (
    <div style={styles.container}>
      <h2>Book an Appointment</h2>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        <Form style={styles.form}>
          <Field name="name" type="text" placeholder="Full Name" style={styles.input} />
          <ErrorMessage name="name" component="div" style={styles.error} />

          <Field name="phone" type="text" placeholder="Contact Number" style={styles.input} />
          <ErrorMessage name="phone" component="div" style={styles.error} />

          <Field name="email" type="email" placeholder="Email" style={styles.input} />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <Field name="date" type="date" style={styles.input} />
          <ErrorMessage name="date" component="div" style={styles.error} />

          <Field name="time" type="time" style={styles.input} />
          <ErrorMessage name="time" component="div" style={styles.error} />

          <Field as="select" name="doctor" style={styles.input}>
            <option value="">Select Doctor / Department</option>
            <option value="General Physician">General Physician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Gynecologist">Gynecologist</option>
          </Field>
          <ErrorMessage name="doctor" component="div" style={styles.error} />

          <Field
            as="textarea"
            name="reason"
            placeholder="Reason for visit"
            style={styles.textarea}
          />

          <Field
            as="textarea"
            name="notes"
            placeholder="Additional notes (optional)"
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>Book Appointment</button>
        </Form>
      </Formik>

      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupBox}>
            <div style={styles.tick}>✓</div>
            <h3>Appointment Booked</h3>
            <p>Please check your email for confirmation.</p>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '500px',
    margin: '40px auto',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '60px',
  },
  button: {
    marginTop: '15px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '13px',
  },
  popupBox: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
  },
  tick: {
    fontSize: '50px',
    color: 'green',
    marginBottom: '10px',
  },
  closeBtn: {
    marginTop: '15px',
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
