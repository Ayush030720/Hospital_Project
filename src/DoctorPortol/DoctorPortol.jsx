import React from "react";

const DoctorDashboard = () => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍⚕️ Doctor Dashboard</h1>

      <div style={styles.card}>
        <h2 style={styles.subTitle}>Appointments</h2>
        {appointments.length === 0 ? (
          <p style={styles.empty}>No appointments scheduled.</p>
        ) : (
          <ul style={styles.list}>
            {appointments.map((appt, index) => (
              <li key={index} style={styles.listItem}>
                <strong>🧑‍🤝‍🧑 {appt.patientName}</strong>
                <p>📅 {appt.date} | ⏰ {appt.time}</p>
                <p>📍 Reason: {appt.reason}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "30px",
    fontSize: "2.5rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  subTitle: {
    fontSize: "1.5rem",
    color: "#34495e",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#fefefe",
  },
  empty: {
    color: "#888",
    fontStyle: "italic",
  },
};
