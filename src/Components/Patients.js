import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";


const Patients = () => {

    const [patientInfo, setPatientInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/patients.php")
        .then((res) =>{
            console.log(res);
            let Patients = res.data.map(item => 
            
          <div className="docnew-table">
            
           {item.name_and_surname}
            {item.age}
        {item.gender}
           {item.email}
            {item.patient_id}
         {item.medical_aid_number}
           {item.past_appointments}
          
            </div>
           
        )
        setPatientInfo(Patients)
        });

    });





    
    return (
    <>

    {patientInfo}
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

            
        

        <div className="create-appointments"></div>
        
        <div className="search-bar">
            <h15>Search</h15>
        </div>
        <ul className="login">
            <li><a href="/Login">Sign In</a></li>
        </ul>
        <ul className="register">
            <li><a href="/Register">Sign Up</a></li>
        </ul>

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

        
        
        
    

    <div className="footer">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="instagram"></div>
    </div>
    




    </>
    )

    






};

export default Patients;