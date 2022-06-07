import axios from "axios";
import React, {useEffect, useState} from "react";


const Doctors = () => {

    const [doctorInfo, setDoctorInfo] = useState();

    useEffect (() => {

        axios.post("http://localhost:8888/medical_api/readUserPosts.php")
        .then((res) =>{
            console.log(res);
            let doctors = res.data.map(item => 

        <table id="patient-table">
        <tr>
            <th>Images</th>
            <th>Name and Surname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Doctor Id</th>
            <th>Specialisation</th>
            <th>Room Number</th>
        </tr>
        <tr>
            <td>Insert Image</td>
            <td>{item.name_and_surname}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.doctor_id}</td>
            <td>{item.specialisation}</td>
            <td>{item.room}</td>
        </tr>
        </table>
           
        )
        setDoctorInfo(doctors)
        });

    });

    return (
    <>

<div className="doc-appointments">
        <h14>Current Doctors</h14>
        {doctorInfo}
    </div>

         <div className="add-users">
    <h25>Add a Doctor</h25>
        <input className="user-name-surname" type="text" placeholder="Name and Surname"  />
        <input className="user-age" type="text" placeholder="Age"  />
        <input className="user-gender" type="text" placeholder="Gender"  />
        <input className="user-email" type="text" placeholder="Email"  />
        <input className="user-password" type="text" placeholder="Password"  />
        <input className="user-number" type="text" placeholder="Number"  />
        <input className="user-id" type="text" placeholder="Id"  />
        <input className="user-medicalaid" type="text" placeholder="Specialisation"  />
        <input className="user-room" type="text" placeholder="Room Number "  />
        <button className="add-user-button2" >Add</button>
    </div>
        <ul className="login">
            <li><a href="/Login">Sign In</a></li>
        </ul>
        <ul className="register">
            <li><a href="/Register">Sign Up</a></li>
        </ul>

        <div className="side-nav">
            <h8>The Breast Cancer Clinic</h8>
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
                </select>
                <input className="pat-email" type="text" placeholder="Email"  />
                <input className="pat-password" type="text" placeholder="Password"  />
                <input className="pat-number" type="text" placeholder="Number"  />
                <input className="pat-medicalaid" type="text" placeholder="Medical Aid Number"  />
                <button className="button4">Update</button>
            </form>
        </div>

    



   
  


         


 
    
    </>
    )

    






};

export default Doctors;
