import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";


const Reception = () => {

    const [receptionInfo, setReceptionInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/reception.php")
        .then((res) =>{
            console.log(res);
            let Receptionists = res.data.map(item => 
            
       
            <table id="patient-table">
            <tr>
                <th>Images</th>
                <th>Name and Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Rank</th>
          </tr>
          <tr>
                <td>Insert Image</td>
                <td>{item.name_and_surname}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone_number}</td>
                <td>{item.email}</td>
                <td>{item.admin}</td>
          </tr>
            </table>
        
           
        )
        setReceptionInfo(Receptionists)
        });

    });

    return (
    <>
        <div className="pat-appointments">
        <h14>Current Receptionists</h14>
        {receptionInfo}
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
    

   


    </>
    )

    






};

export default Reception;