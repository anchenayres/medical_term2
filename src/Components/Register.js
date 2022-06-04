import React from "react";


const Register = () => {

    return (
    <>
    <div className="behind">
        <ul>
            <li><a href="/Appointments">Appointments</a></li>
            <li><a href="/Patients">Patients</a></li>
            <li><a href="/Doctors">Doctors</a></li>
            <li><a href="/Reception">Reception</a></li>
        </ul>
        
   
    </div>
    <div className="reg-box">
    <p1>Register Now</p1>
        <div className="box4"><div className="name-reg">Name</div></div>
        <div className="box5"><div className="surname-reg">Surname</div></div>
        <div className="box6"><div className="age-reg">Age</div></div>
        <div className="box7"><div className="gender-reg">Gender</div></div>
        <div className="box8"><div className="number-reg">Phone Number</div></div>
        <div className="box9"><div className="email-reg">Email</div></div>
        <div className="box10"><div className="pass-reg">Password</div></div>
        <div className="box11"><div className="conpass-reg">Confirm Password</div></div>
        <div className="box12"><div className="reg-button">Sign Up</div></div>
        <div className="login-link">Already have an account?<a href="/Login">Login</a></div>

    </div>
    </>
    )


    






};

export default Register;