import Navigation from "./Components/Navigation";
import Appointments from "./Components/Appointments";
import Patients from "./Components/Patients";
import Doctors from "./Components/Doctors";
import Reception from "./Components/Reception";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Navigation />} />
        <Route path="/Appointments" element = {<Appointments />} />
        <Route path="/Patients" element = {<Patients />} />
        <Route path="/Doctors" element = {<Doctors />} />
        <Route path="/Reception" element = {<Reception />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
