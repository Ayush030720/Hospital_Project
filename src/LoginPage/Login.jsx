import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';
export default function LoginComponent() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Admin login
    if (
      loginData.email === "Admin@test.com" &&
      loginData.password === "Admin@123"
    ) {
      alert("Admin login successful!");
      navigate("/navbar");
      return;
    }

    // Doctor login
    if (
      loginData.email === "Doctor1@text.com" &&
      loginData.password === "doc@123"
    ) {
      alert("Doctor login successful!");
      navigate("/doctorDashboard");
      return;
    }

    // User login
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // User login via backend
    try {
      const response = await axios.post(
        "http://localhost:8090/api/signup/validate",
        loginData
      );
      alert(response.data); // shows "Login successful!"

      // set localStorage and navigate
      localStorage.setItem("isLoggedIn", "true");

      const hasFilledInfo = localStorage.getItem("hasFilledInfo");
      if (hasFilledInfo === "true") {
        navigate("/appointment");
      } else {
        localStorage.setItem("hasFilledInfo", "true");
        navigate("/personalInfo");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data); // backend error like "Incorrect password" or "User not found"
      } else {
        setError("Server not reachable. Try again later.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

// \const styles = {
//   // container: {
//   //   width: "300px",
//   //   margin: "100px auto",
//   //   padding: "30px",
//   //   border: "1px solid #ccc",
//   //   borderRadius: "10px",
//   //   textAlign: "center",
//   //   backgroundColor:black,
//   //   // boxShadow: "0 0 10px rgba(14, 3, 3, 0.1)",
//   // },
  
//   container: {
//   width: "300px",
//   margin: "100px auto",
//   padding: "30px",
//   border: "1px solid #ccc",
//   borderRadius: "10px",
//   textAlign: "center",
//   backgroundColor: "rgba(21, 16, 16, 0.6)", // Black with 60% opacity
//   color: "#fff", // Make text white for visibility
//   backdropFilter: "blur(5px)", // optional for blur-glass effect
//   WebkitBackdropFilter: "blur(5px)",
//    backgroundColor: "transparent",
// },

//   form: {
//     display: "flex",
//     flexDirection: "column",
    
  
//   },
//   input: {
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc",

//      backgroundColor: "rgba(255, 255, 255, 0.9)",
//   color: "#000",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#f31414ff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize:"1rem",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//   },
  
// };
// button:hover{
//   fontSize:0.1rem;
// }
