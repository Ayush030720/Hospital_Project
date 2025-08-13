// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const goToAppointment = () => {
    navigate("/signup");
  };

  const gotoLogin = () => {
    navigate("/Login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles["navbar-logo"]}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className={styles["navbar-login"]}>
          <button onClick={gotoLogin}>Login</button>
        </div>
      </nav>

      {/* Hero section with gradient overlay */}
      <div className={styles["hero-section"]}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.heroHeading}>Your Health, Our Priority</h1>
          <p className={styles.heroSubheading}>
            Your health is our priority. With our easy online booking system,
            scheduling an appointment with your doctor has never been simpler.
            Just a few clicks and your spot is reserved — no waiting on hold, no
            paperwork hassles. Let’s get you on the path to better health today
          </p>
          <button className={styles.homeButton} onClick={goToAppointment}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
