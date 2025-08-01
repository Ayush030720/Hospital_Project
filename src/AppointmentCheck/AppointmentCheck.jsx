// src/components/Appointment/Appointment.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Appointment.module.css';

const AppointmentCheck = () => {
  const navigate = useNavigate();

  const handleNew = () => navigate('/signup');
  const handleOld = () => navigate('/Login');

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Are you a new or existing patient?</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleNew}>New Patient</button>
        <button className={styles.button} onClick={handleOld}>Old Patient</button>
      </div>
    </div>
  );
};

export default AppointmentCheck;
