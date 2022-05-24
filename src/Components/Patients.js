import React from "react";


const Patients = () => {

    return (
    <>

    <div className="calendar">
        <div className="cal-heading">
            <h11>April 2022</h11>
        </div>
    </div>

    <div className="headings">
    <h3>Current Patients</h3>

    <h4>Name</h4>
    <h5>Age</h5>
    <h6>Email</h6>
    <h7>Password</h7>
    <h8>Number</h8>
    <h9>Id</h9>
    <h10>Room</h10>
    </div>
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
        <div className="doc-id">
        <p1>0509720045263</p1>
        </div>
        <div className="doc-room">
        <p1>Floor 3A7</p1>
        </div>
        </div>
    </>
    )

    






};

export default Patients;