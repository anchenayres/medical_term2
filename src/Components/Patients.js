import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";


const Patients = () => {

    const [patientInfo, setPatientInfo] = useState();
    const [nameInfo, setNameInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/patients.php")
        .then((res) =>{
            console.log(res);
            let Patients = res.data.map(item => 
            
       
            <table id="patient-table">
            <tr>
                <th>Images</th>
                <th>Name and Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>ID</th>
                <th>Medical Aid Number</th>
                <th>Past Appointments</th>
          </tr>
          <tr>
                <td>Insert Image</td>
                <td>{item.name_and_surname}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.patient_id}</td>
                <td>{item.medical_aid_number}</td>
                <td>{item.past_appointments}</td>
          </tr>
            </table>
            
        
           
        )
        setNameInfo(Patients)
        setPatientInfo(Patients)
        });

    });





    
    return (
    <>
    <div className="pat-appointments">
        <h14>Current Patients</h14>
        {patientInfo}
    </div>

     
    
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

    <div class="delete_user">
            <h6> Delete an Existing Patient</h6>
            <form> 
                <select className="delUser">
                </select>
                <button className="button3">Delete</button>
            </form>
        </div>

        <div class="update-user">
            <h7> Update an Existing Patient</h7>
            <form action="medical_api/patients.php" method="post"> 
                <select class="delUser2">
                {nameInfo}
                </select>
                <input className="pat-email" type="text" placeholder="Email"  />
                <input className="pat-password" type="text" placeholder="Password"  />
                <input className="pat-number" type="text" placeholder="Number"  />
                <input className="pat-medicalaid" type="text" placeholder="Medical Aid Number"  />
                <button className="button4">Delete</button>
            </form>
        </div>

            
        

        
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

        
        
        
    





    </>
    )

    






};

export default Patients;


