import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function PersonalInfoComponent() {
  const initialValues = {
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  };

  const navigate = useNavigate();

  // Custom validation function
  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!values.gender) {
      errors.gender = "Gender is required";
    }

    if (!values.dob) {
      errors.dob = "Date of Birth is required";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitted values:", values);
    try {
      const response = await axios.post(
        "http://localhost:8090/savePatientInfo",
        values
      );
      console.log("Response:", response);
      navigate("/contact");
      resetForm();
    } catch (err) {
      console.log("personal info error");
    }
  };
  return (
    <div style={styles.container}>
      <h2>Personal Info Form</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}>
        <Form style={styles.form}>
          <Field
            type="text"
            name="fullName"
            placeholder="Full Name"
            style={styles.input}
          />
          <ErrorMessage name="fullName" component="div" style={styles.error} />

          <Field name="gender" as="select" style={styles.input}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Field>
          <ErrorMessage name="gender" component="div" style={styles.error} />

          <Field type="date" name="dob" style={styles.input} />
          <ErrorMessage name="dob" component="div" style={styles.error} />

          <Field
            type="text"
            name="phone"
            placeholder="Phone Number"
            style={styles.input}
          />
          <ErrorMessage name="phone" component="div" style={styles.error} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
          />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <Field
            as="textarea"
            name="address"
            placeholder="Address"
            style={{ ...styles.input, height: "60px" }}
          />
          <ErrorMessage name="address" component="div" style={styles.error} />

          <button type="submit" style={styles.button}>
            Next ➡️
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  },
};
