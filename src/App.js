import Navigation from "./Components/Navigation";
import Appointments from "./Components/Appointments";
import Patients from "./Components/Patients";
import Doctors from "./Components/Doctors";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element = {<Appointments />} />
        <Route path="/Patients" element = {<Patients />} />
        <Route path="/Doctors" element = {<Doctors />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
