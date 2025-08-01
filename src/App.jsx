import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginComponent from "./LoginPage/Login";
import PersonalInfoComponent from "./PatientForm/PersonalInfoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactDetailsForm from "./PatientForm/Contact";
import MedicalInfoForm from "./PatientForm/MedicalInfo";
import LifestyleForm from "./PatientForm/LifeStyleForm";
import AppointmentForm from "./PatientForm/Appointment";
import Signup from "./SignupPage/Signup";
import Home from "./Home/Home";
import AppointmentCheck from "./AppointmentCheck/AppointmentCheck";

AppointmentForm;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appointmentcheck" element={<AppointmentCheck/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Login" element={<LoginComponent />}></Route>
          <Route
            path="/personalInfo"
            element={<PersonalInfoComponent />}></Route>
          <Route path="/Contact" element={<ContactDetailsForm />}></Route>
          <Route path="/Medicalinfo" element={<MedicalInfoForm />}></Route>
          <Route path="/LifeStyle" element={<LifestyleForm />}></Route>
          <Route path="/Appointment" element={<AppointmentForm />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <LoginComponent></LoginComponent>
 
   <PersonalInfoComponent></PersonalInfoComponent> */}
    </>
  );
}

export default App;
