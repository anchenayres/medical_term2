import axios from "axios";
import React, {useEffect, useState} from "react";


const Doctors = () => {

    const [doctorInfo, setDoctorInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/readUserPosts.php")
        .then((res) =>{
            console.log(res);
            let doctors = res.data.map(item => <div className="doc-table">
            <div className="left">
                <div className="doc-image"></div>
            </div>


            <div className="doc-name_surname">
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
            </div>
           
        </div>)
        setDoctorInfo(doctors)
        });

    });

    return (
    <>
      <h14>Current Doctors</h14>
    <h22>Name</h22>
    <h16>Age</h16>
    <h23>Gender</h23>
    <h17>Email</h17>
    <h18>Password</h18>
    <h19>Number</h19>
    <h20>Id</h20>
    <h24>Specialisation</h24>
    <h21>Room</h21>

        <div className="pictures">
        <h1>Welcome Back Dr.Manley</h1>
        <div className="pro-image"></div>
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
    

    <div className="footer">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="instagram"></div>
    </div>
    



  
  
    {doctorInfo}
  

         


 
    
    </>
    )

    






};

export default Doctors;