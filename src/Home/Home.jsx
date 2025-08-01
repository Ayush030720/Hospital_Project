// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const goToAppointment = () => {
    navigate('/appointmentcheck');
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>Welcome to Hospital Portal</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.homeButton} onClick={goToAppointment}>Book Appointment</button>
      </div>
    </div>
  );
};

export default Home;




