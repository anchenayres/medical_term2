import axios from "axios";
import React, {useEffect, useState} from "react";


const Doctors = () => {

    const [doctorInfo, setDoctorInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/readUserPosts.php")
        .then((res) =>{
            console.log(res);
            let doctors = res.data.map(item => 
            
          <div className="docnew-table">
              <div className="doc-text">
            <div className="user-image"></div>
            <div className="doc-name-sur">{item.name_and_surname}</div>
            <div className="doc-age">{item.age}</div>
            <div className="doc-gender">{item.gender}</div>
            <div className="doc-email">{item.email}</div>
            <div className="doc-id">{item.doctor_id}</div>
            <div className="doc-spesial">{item.specialisation}</div>
            <div className="doc-room">{item.room}</div>
            </div>
            </div>
           
        )
        setDoctorInfo(doctors)
        });

    });

    return (
    <>

<div className="create-appointments">{doctorInfo}</div>

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
        <ul className="login">
            <li><a href="/Login">Sign In</a></li>
        </ul>
        <ul className="register">
            <li><a href="/Register">Sign Up</a></li>
        </ul>

        <div className="nav"></div>
        <div className="side-nav">
        <div className="logo"></div>

        <h14>Current Doctors</h14>
    <h22>Name</h22>
    <h16>Age</h16>
    <h17>Email</h17>
    <h20>Id</h20>
    <h19>Specialisation</h19>
    <h21>Room</h21>
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
    



   
  
    
    <div className="cal">calendar</div>
    <div className="my-profile">My Profile</div>
    <div className="profile-table">profile</div>

         


 
    
    </>
    )

    






};

export default Doctors;
{/* <div className="left">
                <div className="doc-image"></div>
            </div>
            <div className="doc-age">
            <p1>{item.name_and_surname}</p1>
            </div>
            <div className="doc-age">
            <p1>{item.age}</p1>
            </div>
            <div className="doc-gender">
            <p1>{item.gender}</p1>
            </div>
            <div className="doc-email">
            <p1>{item.email}</p1>
            </div>
            <div className="doc-password">
            <p1>{item.password}</p1>
            </div>
            <div className="doc-num">
            <p1>{item.phone_number}</p1>
            </div>
            <div className="doc-id">
            <p1>{item.doctor_id}</p1>
            </div>
            <div className="doc-specialisation">
            <p1>{item.specialisation}</p1>
            </div>
            <div className="doc-room">
            <p1>{item.room}</p1>
            </div> */}