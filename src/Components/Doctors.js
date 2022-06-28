import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";



const Doctors = () => {

    const [doctorInfo, setDoctorInfo] = useState();
    const [nameInfo, setNameInfo] = useState([]);
    const [updateInfo, setUpdateInfo] = useState({
       name: "", medAidNumber: "", email: "", number:"", password:""
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
        axios.post("http://localhost:8888/medicalApi/updatePatient.php", updateInfo)
        .then((res) => {

        })
    }

    useEffect (() => {

        axios.post("http://localhost:8888/medicalApi/readUserPosts.php")
        .then((res) =>{
            console.log(res);
            let doctors = res.data.map(item => 

        <div className="patient-table">

        <div className="patient-name">
        <label>Insert Image:</label><span className="result"></span><br></br><br></br>
        <label>Name:</label><span className="result">{item.name}</span><br></br>
        </div>

        <div className="patient-info">
            <label>Gender:</label><span className="result">{item.gender}</span><br></br>
            <label>Age:</label><span className="result">{item.age}</span><br></br>
            <label>Room Number:</label><span className="result">{item.docRoom}</span><br></br>        
        </div>

        <div className="contact-info">
            <label><div className="email-image"></div></label><span className="result">{item.email}</span><br></br>
            <label>Doctor Id:</label><span className="result">{item.docNumber}</span><br></br>
            <label>Specialisation:</label><span className="result">{item.docSpecial}</span><br></br>
        </div>
        </div>
        )
        setNameInfo(res.data)
        setDoctorInfo(doctors)
        });

    });

    let docName = useRef();
    let docAge = useRef();
    let docGender = useRef();
    let docEmail = useRef();
    let docPassword = useRef();
    let docNumber = useRef();
    let docId = useRef();
    let docSpecial = useRef();
    let docRoom = useRef();

    const getDoctorsInfo = () => {
        let name = docName.current.value;
        let age = docAge.current.value;
        let gender = docGender.current.value;
        let email = docEmail.current.value;
        let pass = docPassword.current.value;
        let num = docNumber.current.value;
        let id = docId.current.value;
        let special = docSpecial.current.value;
        let room = docRoom.current.value;

        let inputs = {
            name: name,
            age: +age,
            gender: gender,
            email: email,
            pass: pass,
            num: num,
            doc_id: id,
            special: special,
            room: room
        }

        console.log(inputs);

        axios.post('http://localhost/medicalApi/addUser.php', inputs)
        .then( ( res ) => {         
            console.log(res)       
        });
    }

    return (
    <>

<div className="doc-appointments">
        <h14>Current Doctors</h14>
        {doctorInfo}
    </div>

         <div className="add-users">
         <h25>Add a Doctor</h25>
   
        <input ref={docName} className="user-name-surname" name="name" type="text" placeholder="Name and Surname"  />
        <input ref={docAge} className="user-age" name="age" type="text" placeholder="Age"  />
        <input ref={docGender} className="user-gender" name="gender" type="text" placeholder="Gender"  />
        <input ref={docEmail} className="user-email" name="email" type="text" placeholder="Email"  />
        <input ref={docPassword} className="user-password" name="password" type="text" placeholder="Password"  />
        <input ref={docNumber} className="user-number" name="number" type="text" placeholder="Number"  />
        <input ref={docId} className="user-id" name="id" type="text" placeholder="Id"  />
        <input ref={docSpecial} className="user-special" name="special" type="text" placeholder="Specialisation"  />
        <input ref={docRoom} className="user-room" name="room" type="text" placeholder="Room Number "  />
        <button onClick={getDoctorsInfo} className="add-user-button2" type="submit">Add</button>
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
            <h6> Delete an Existing Doctor</h6>
            
            <form> 
            <select ref={name} class="delUser2">
                {
                    nameInfo.map(item => <option value={item.name} >{item.name}</option>)
                }
                </select>
                <button className="button4">Delete</button>
            </form>
        </div>


        <div class="update-user">
            <h7>Update an Existing Doctor</h7>
            <form action="medical_api/updatePatient.php" method="post"> 
            <select ref={name} class="delUser2">
                {
                    nameInfo.map(item => <option value={item.name} >{item.name}</option>)
                }
                </select>
                <input ref={medAidNumber} className="pat-medicalaid" type="text" placeholder="Room Number"  />
                <input ref={email} className="pat-email" name="pat-email" type="text" placeholder="Email"  />
                <input ref={number} className="pat-number" name="pat-number" type="text" placeholder="Number"  />
                <input ref={password} className="pat-password" name="pat-password" type="text" placeholder="Password"  />
                <button className="button4" onClick={updatePatient} >Update</button>
            </form>
        </div>

    



   
  


         


 
    
    </>
    )

    






};

export default Doctors;
