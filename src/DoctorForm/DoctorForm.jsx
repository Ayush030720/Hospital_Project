import React, { useState } from "react";
import axios from "axios";

export default function DoctorEntryForm() {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    specialization: "",
    joining_date: "",
    experience: ""
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8090/api/doctors", formData);
      setMessage("Doctor added successfully!");
      console.log(response.data);
      setFormData({
        name: "",
        qualification: "",
        specialization: "",
        joining_date: "",
        experience: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("Error adding doctor!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Doctor Entry Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="date"
          name="joining_date"
          value={formData.joining_date}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={formData.experience}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Doctor</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "8px 0",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};
