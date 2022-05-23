import React from "react";


const Navigation = () => {

    return (
    <>
        
        
        <div className="pictures">
        <h1>Welcome Back Dr.Manley</h1>
        <div className="pro-image"></div>
  
       
    </div>

        <div className="nav"></div>
        <div className="side-nav">
                <div className="planner-img"></div>
                <div className="patients-img"></div>
                <div className="docter-img"></div>
        <ul>
            <li><a href="/Appointments">Appointments</a></li>
            <li><a href="/Patients">Patients</a></li>
            <li><a href="/Doctors">Doctors</a></li>
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

export default Navigation;