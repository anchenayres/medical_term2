import axios from "axios";
import React, {useEffect, useState} from "react";


const Appointments = () => {

    const [appointmentInfo, setAppointmentInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost/medical_api/appointments.php")
        .then((res) =>{
            console.log(res);
            let appointments = res.data.map(item => 

        <table id="patient-table">
        <tr>
            <th>Room</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Patient Id</th>
            <th>Time</th>
        </tr>
        <tr>
            <td>{item.room}</td>
            <td>{item.doctor}</td>
            <td>{item.patient}</td>
            <td>{item.patient_id}</td>
            <td>{item.time}</td>
        </tr>
        </table>
           
        )
        setAppointmentInfo(appointments)
        });

    });
    return (
    <>
<div className="create-appointments">
        <h14>Current Doctors</h14>
        {appointmentInfo}
    </div>

        <div className="nav"></div>
        <div className="side-nav">
        <div className="logo"></div>


                <div className="planner-img"></div>
                <div className="patients-img"></div>
                <div className="docter-img"></div>
                <div className="reception-img"></div>
        <ul>
            <li><a href="/Appointments">Appointments</a></li>
            <li><a href="/Patients">Patients</a></li>
            <li><a href="/Doctors">Doctors</a></li>
            <li><a href="/Reception">Reception</a></li>
        </ul>
        </div>

        <div className="create-appointments"></div>

         <div className="add-users">
    <h25>Add a Patient</h25>

        <input className="user-name-surname" type="text" placeholder="Patient Name and Surname"  />
        <input className="user-age" type="text" placeholder="Patient Age"  />
        <input className="user-gender" type="text" placeholder="Patient Gender"  />
        <input className="user-email" type="text" placeholder="Patient Email"  />
        <input className="user-password" type="text" placeholder="Patient Password"  />
        <input className="user-number" type="text" placeholder="Patient Number"  />
        <input className="user-id" type="text" placeholder="Patient Id"  />
        <input className="user-medicalaid" type="text" placeholder="Patient Medical Aid Number"  />


        <button type="add-user-button" >Add</button>
    </div>
    

    <div className="footer">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="instagram"></div>
    </div>
    
 


    <div className="headings">
    <h3>Upcoming Appointments</h3>

    <h4>Patient Name</h4>
    <h5>Age</h5>
    <h6>Email</h6>
    <h7>Number</h7>
    <h8>Docter</h8>
    <h9>Room</h9>
    <h10>Date and Time</h10>
    </div>

      
    </>
    )

    






};

export default Appointments;

//doctors who are on leave
//total patients
//staff members
//upcoming and past treatments
