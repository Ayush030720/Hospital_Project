import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MedicalInfoForm() {
  const initialValues = {
    bloodGroup: "",
    allergies: "",
    conditions: "",
    surgeries: "",
    medications: "",
    familyHistory: "",
    immunizations: "",
  };

  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.bloodGroup) {
      errors.bloodGroup = "Blood Group is required";
    }

    if (!values.conditions) {
      errors.conditions = 'Please list existing conditions or write "None"';
    }

    return errors;
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitted values" + values);
    try {
      const response = await axios.post(
        "http://localhost:8090/api/medical",
        values
      );
      navigate("/LifeStyle");
      resetForm();
      console.log(response.data);
    } catch (err) {
      console.log("Medical info error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Medical Information</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}>
        <Form style={styles.form}>
          <Field as="select" name="bloodGroup" style={styles.input}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A−">A−</option>
            <option value="B+">B+</option>
            <option value="B−">B−</option>
            <option value="AB+">AB+</option>
            <option value="AB−">AB−</option>
            <option value="O+">O+</option>
            <option value="O−">O−</option>
          </Field>
          <ErrorMessage
            name="bloodGroup"
            component="div"
            style={styles.error}
          />

          <Field
            as="textarea"
            name="allergies"
            placeholder="Known Allergies (if any)"
            style={styles.textarea}
          />

          <Field
            as="textarea"
            name="conditions"
            placeholder="Existing Conditions (e.g., Diabetes, Hypertension)"
            style={styles.textarea}
          />
          <ErrorMessage
            name="conditions"
            component="div"
            style={styles.error}
          />

          <Field
            as="textarea"
            name="surgeries"
            placeholder="Past Surgeries"
            style={styles.textarea}
          />

          <Field
            as="textarea"
            name="medications"
            placeholder="Current Medications"
            style={styles.textarea}
          />

          <Field
            as="textarea"
            name="familyHistory"
            placeholder="Family Medical History"
            style={styles.textarea}
          />

          <Field
            as="textarea"
            name="immunizations"
            placeholder="Immunization History"
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const styles = {
  container: {
    width: "500px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f7f7f7",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "12px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    marginBottom: "12px",
    padding: "10px",
    height: "60px",
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
