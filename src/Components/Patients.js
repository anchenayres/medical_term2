import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";


const Patients = () => {

    const [patientInfo, setPatientInfo] = useState([]);
    const [nameInfo, setNameInfo] = useState([]);
    const [updateInfo, setUpdateInfo] = useState({
       name: "", 
       medAidNumber: "",
       email: "", 
       number:"", 
       password:""
    })

    let name = useRef ();
    let medAidNumber = useRef();
    let email = useRef();
    let number = useRef();
    let password = useRef();

    const updatePatient = () => {
        let nameVal = name.current.value
        console.log(nameVal);
        let medAidNumberVal = medAidNumber.current.target
        let emailVal = email.current.target
        let numberVal = number.current.target
        let passwordVal = password.current.target
        setUpdateInfo({...updateInfo,
        
        name: nameVal,
        medAidNumber: medAidNumberVal,
        email: emailVal,
        number: numberVal,
        password: passwordVal

        });
        axios.post("http://localhost:8888/medical_api/updatePatient.php", updateInfo)
        .then((res) => {

        })
    }



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
        setNameInfo(res.data)
        setPatientInfo(Patients)
        });

    },[]);





    
    return (
    <>
    <div className="pat-appointments">
        <h14>Current Patients</h14>
        {patientInfo}
    </div>

     
    
    <div className="add-users">
    <h25>Add a Patient</h25>

        <input className="user-name-surname" name="user-name-surname" type="text" placeholder="Patient Name and Surname"  />
        <input className="user-age" name="user-age" type="text" placeholder="Patient Age"  />
        <input className="user-gender" name="user-gender"  type="text" placeholder="Patient Gender"  />
        <input className="user-email" name="user-email" type="text" placeholder="Patient Email"  />
        <input className="user-password" name="user-password" type="text" placeholder="Patient Password"  />
        <input className="user-number" name="user-number" type="text" placeholder="Patient Number"  />
        <input className="user-id" name="user-id" type="text" placeholder="Patient Id"  />
        <input className="user-medicalaid" name="user-medicalaid" type="text" placeholder="Patient Medical Aid Number"  />


        <button className="add-user-button" >Add</button>
    </div>

    <div class="delete_user">
            <h6> Delete an Existing Patient</h6>
            <form> 
            <select ref={name} class="delUser2">
                {
                    nameInfo.map(item => <option value={item.name_and_surname} >{item.name_and_surname}</option>)
                }
                </select>
                <button className="button4">Delete</button>
            </form>
        </div>

        <div class="update-user">
            <h7> Update an Existing Patient</h7>
                <select ref={name} class="delUser2">
                {
                    nameInfo.map(item => <option value={item.name_and_surname} >{item.name_and_surname}</option>)
                }
                </select>
                <input ref={medAidNumber} className="pat-medicalaid" name="pat-medicalaid" type="text" placeholder="Medical Aid Number"  />
                <input ref={email} className="pat-email" name="pat-email" type="text" placeholder="Email"  />
                <input ref={number} className="pat-number" name="pat-number" type="text" placeholder="Number"  />
                <input ref={password} className="pat-password" name="pat-password" type="text" placeholder="Password"  />
                <button className="button4" onClick={updatePatient} >Update</button>
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


