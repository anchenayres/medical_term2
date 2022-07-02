import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Appointments from "./Components/Appointments";
import Patients from "./Components/Patients";
import Doctors from "./Components/Doctors";
import Reception from "./Components/Reception";
import Calendar from "./Components/Calendar";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/Appointments" element = {<Appointments />} />
        <Route path="/Patients" element = {<Patients />} />
        <Route path="/Doctors" element = {<Doctors />} />
        <Route path="/Reception" element = {<Reception />} />
        <Route path="/Login" element = {<Navigation />} />
        <Route path="/Register" element = {<Register />} />
        <Route path="/Calendar" element = {<Calendar />} />

      </Routes>
    </div>
    </>
  );
}

export default App;
