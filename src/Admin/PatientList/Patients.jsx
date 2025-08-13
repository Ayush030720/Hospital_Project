import axios from 'axios';
import styles from './Patients.module.css';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);

  const initialValues = {
    id: '',
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios
      .get('http://localhost:8090/allPatient')
      .then((response) => {
        setPatients(response.data);
        setFilteredPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/deletePatient/${id}`)
      .then(() => fetchPatients())
      .catch((error) => console.error('Delete error:', error));
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setShowPopup(true);
  };

  const handleSearch = () => {
    if (searchId.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const result = patients.filter((p) => p.id.toString() === searchId);
      setFilteredPatients(result);
    }
  };

  const handleChange = (e) => {
    setEditingPatient({ ...editingPatient, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8090/updatePatient/${editingPatient.id}`, editingPatient)
      .then(() => {
        fetchPatients();
        setShowPopup(false);
        setEditingPatient(null);
      })
      .catch((error) => console.error('Update error:', error));
  };

  return (
    <div> 
    <div className={styles.patients}>
      <h2>Patients List</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px' }}>
          Search
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.fullName}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.email}</td>
              <td>{patient.address}</td>
              <td>
                <button
                  style={{ marginRight: '5px', background: '#ffc107' }}
                  onClick={() => handleEdit(patient)}>
                  Edit
                </button>
                <button
                  style={{ background: '#dc3545', color: 'white' }}
                  onClick={() => handleDelete(patient.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && editingPatient && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h3>Update Patient</h3>
            <input
              name="fullName"
              placeholder="Full Name"
              value={editingPatient.fullName}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              name="dateOfBirth"
              type="date"
              value={editingPatient.dateOfBirth}
              onChange={handleChange}
              className={styles.input}
            />
            <select
              name="gender"
              value={editingPatient.gender}
              onChange={handleChange}
              className={styles.input}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              name="phone"
              placeholder="Phone"
              value={editingPatient.phone}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              name="email"
              placeholder="Email"
              value={editingPatient.email}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              name="address"
              placeholder="Address"
              value={editingPatient.address}
              onChange={handleChange}
              className={styles.input}
            />
            <div style={{ marginTop: '10px' }}>
              <button onClick={handleUpdate} className={styles.button}>
                Update
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setEditingPatient(null);
                }}
                className={styles.cancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div></div>
  );
}
