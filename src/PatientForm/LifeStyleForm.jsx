import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
export default function LifestyleForm() {
  const initialValues = {
    smoking: "",
    alcohol: "",
    exercise: "",
    diet: "",
    sleep: "",
    stress: "",
    notes: "",
  };

  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.smoking) errors.smoking = "Select smoking status";
    if (!values.alcohol) errors.alcohol = "Select alcohol consumption";
    if (!values.sleep) errors.sleep = "Enter average sleep hours";
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    navigate("/Appointment");
    resetForm();
  };

  return (
    <div style={styles.container}>
      <h2>Lifestyle and Habits</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}>
        <Form style={styles.form}>
          <label>Smoking:</label>
          <Field as="select" name="smoking" style={styles.input}>
            <option value="">-- Select --</option>
            <option value="No">No</option>
            <option value="Yes, occasionally">Yes, occasionally</option>
            <option value="Yes, regularly">Yes, regularly</option>
          </Field>
          <ErrorMessage name="smoking" component="div" style={styles.error} />

          <label>Alcohol:</label>
          <Field as="select" name="alcohol" style={styles.input}>
            <option value="">-- Select --</option>
            <option value="No">No</option>
            <option value="Yes, occasionally">Yes, occasionally</option>
            <option value="Yes, regularly">Yes, regularly</option>
          </Field>
          <ErrorMessage name="alcohol" component="div" style={styles.error} />

          <label>Exercise Routine:</label>
          <Field
            as="textarea"
            name="exercise"
            placeholder="E.g. walk 30 mins daily, gym 3x/week"
            style={styles.textarea}
          />

          <label>Dietary Habits:</label>
          <Field
            as="textarea"
            name="diet"
            placeholder="E.g. vegetarian, non-vegetarian, high protein"
            style={styles.textarea}
          />

          <label>Sleep (hours per night):</label>
          <Field
            type="number"
            name="sleep"
            placeholder="e.g. 7"
            style={styles.input}
          />
          <ErrorMessage name="sleep" component="div" style={styles.error} />

          <label>Stress Level:</label>
          <Field as="select" name="stress" style={styles.input}>
            <option value="">-- Select --</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </Field>

          <label>Additional Notes:</label>
          <Field
            as="textarea"
            name="notes"
            placeholder="Any additional lifestyle notes..."
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
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f7f7f7",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "60px",
  },
  button: {
    marginTop: "15px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
};
