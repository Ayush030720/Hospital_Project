import axios from "axios";
import styles from "./Doctors.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import Navbar from "../Navbar/Navbar";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate(); // ✅ for navigation

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios
      .get("http://localhost:8090/api/doctors")
      .then((response) => {
        setDoctors(response.data);
        setFilteredDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/doctors/${id}`)
      .then(() => fetchDoctors())
      .catch((error) => console.error("Delete error:", error));
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setShowPopup(true);
  };

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setFilteredDoctors(doctors);
    } else {
      const result = doctors.filter((d) => d.id.toString() === searchId);
      setFilteredDoctors(result);
    }
  };

  const handleChange = (e) => {
    setEditingDoctor({ ...editingDoctor, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8090/api/doctors/${editingDoctor.id}`, editingDoctor)
      .then(() => {
        fetchDoctors();
        setShowPopup(false);
        setEditingDoctor(null);
      })
      .catch((error) => console.error("Update error:", error));
  };

  return (
    <div>
      
      <div className={styles.doctors}>
        <h2>Doctors List</h2>

        {/* ✅ New Doctor Entry Button */}
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
          <div>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              style={{ padding: "8px", marginRight: "8px" }}
            />
            <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
              Search
            </button>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => navigate("/doctorform")} // ✅ navigate to doctor entry form
          >
            + Add New Doctor
          </button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Specialization</th>
              <th>Joining Date</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.joining_date}</td>
                <td>{doctor.experience}</td>
                <td>
                  <button
                    style={{ marginRight: "5px", background: "#ffc107" }}
                    onClick={() => handleEdit(doctor)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ background: "#dc3545", color: "white" }}
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showPopup && editingDoctor && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupBox}>
              <h3>Update Doctor</h3>
              <input
                name="name"
                placeholder="Name"
                value={editingDoctor.name}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="qualification"
                placeholder="Qualification"
                value={editingDoctor.qualification}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="specialization"
                placeholder="Specialization"
                value={editingDoctor.specialization}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="joining_date"
                type="date"
                value={editingDoctor.joining_date}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                name="experience"
                type="number"
                placeholder="Experience"
                value={editingDoctor.experience}
                onChange={handleChange}
                className={styles.input}
              />

              <div style={{ marginTop: "10px" }}>
                <button onClick={handleUpdate} className={styles.button}>
                  Update
                </button>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setEditingDoctor(null);
                  }}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
