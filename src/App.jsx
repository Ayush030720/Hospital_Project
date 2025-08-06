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
import Dashboard from "./Admin/Dashboard/Dashboard";
import Doctors from "./Admin/DoctorList/Doctors";
import Medical from "./Admin/MedicalList/Medical";
import Patients from "./Admin/PatientList/Patients";
import Appointments from "./Admin/AppointmentList/AppointmentsList";
import Navbar from "./Admin/Navbar/Navbar";
import DoctorDashboard from "./DoctorPortol/DoctorPortol";
import Logout from "./Admin/Logout/Logout";

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
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/doctors" element={<Doctors/>}></Route>
          <Route path="/medicals" element={<Medical/>}></Route>
          <Route path="/patients" element={<Patients/>}></Route>
          <Route path="/appointments" element={<Appointments/>}></Route> {/*//List */}
          <Route path="/navbar" element={<Navbar/>}></Route> 

           <Route path="/doctorDashboard" element={<DoctorDashboard />} /> 

        </Routes>
      </BrowserRouter>

      {/* <LoginComponent></LoginComponent>
 
   <PersonalInfoComponent></PersonalInfoComponent> */}
    </>
  );
}

export default App;
