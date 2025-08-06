import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ContactDetailsForm() {
  const initialValues = {
    phone: '',
    altPhone: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
  };

  const navigate=useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.phone) {
      errors.phone = 'Primary phone number is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = 'Must be 10 digits';
    }

    if (values.altPhone && !/^\d{10}$/.test(values.altPhone)) {
      errors.altPhone = 'Alternate number must be 10 digits';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.emergencyContactName) {
      errors.emergencyContactName = 'Emergency contact name is required';
    }

    if (!values.emergencyContactNumber) {
      errors.emergencyContactNumber = 'Emergency number is required';
    } else if (!/^\d{10}$/.test(values.emergencyContactNumber)) {
      errors.emergencyContactNumber = 'Must be 10 digits';
    }

    return errors;
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitted values:", values);
    try{
        const response= await axios.post("http://localhost:8090/api/contacts",values);
         navigate('/Medicalinfo')
         resetForm();
         console.log("Response:", response.data);
    }
    
    catch(err){
        console.log("contact error");
    }
  
  };

  return (
    <div style={styles.container}>
      <h2>Contact Details</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form}>
          <Field
            type="text"
            name="phone"
            placeholder="Phone Number"
            style={styles.input}
          />
          <ErrorMessage name="phone" component="div" style={styles.error} />

          <Field
            type="text"
            name="altPhone"
            placeholder="Alternate Phone Number (optional)"
            style={styles.input}
          />
          <ErrorMessage name="altPhone" component="div" style={styles.error} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
          />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <Field
            type="text"
            name="emergencyContactName"
            placeholder="Emergency Contact Name"
            style={styles.input}
          />
          <ErrorMessage name="emergencyContactName" component="div" style={styles.error} />

          <Field
            type="text"
            name="emergencyContactNumber"
            placeholder="Emergency Contact Number"
            style={styles.input}
          />
          <ErrorMessage name="emergencyContactNumber" component="div" style={styles.error} />

          <button type="submit" style={styles.button}>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

const styles = {
  container: {
    width: '400px',
    margin: '40px auto',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginBottom: '8px',
  },
};
