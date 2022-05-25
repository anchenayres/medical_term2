import React from "react";


const Reception = () => {

    return (
    <>

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
    
    <h3>All Receptionists</h3>
    <h4>Name</h4>
    <h5>Age</h5>
    <h6>Email</h6>
    <h7>Password</h7>
    <h8>Number</h8>
    <h9>Rank</h9>
    <h10>Edit</h10>



    <div className="doc-table">
        <div className="left">
            <div className="pat-image"></div>
            <p2>Jason Manley<br />Male</p2>
        </div>
        <div className="doc-age">
        <p1>48</p1>
        </div>
        <div className="doc-email">
        <p1>drmanley@gmail.com</p1>
        </div>
        <div className="doc-password">
        <p1>manelymann</p1>
        </div>
        <div className="doc-num">
        <p1>0827855558</p1>
        </div>
        <div className="pat-rank">
        <p1>Head Receptionist</p1>
        </div>
        <div className="pat-head">
            <div className="pat-add"></div>
            <div className="pat-remove"></div>
        </div>
        
        </div>
    </>
    )

    






};

export default Reception;