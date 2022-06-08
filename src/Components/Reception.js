import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";


const Reception = () => {

    const [receptionInfo, setReceptionInfo] = useState();
    const [patientInfo, setPatientInfo] = useState([]);
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
        axios.post("http://localhost:8888/medical_api/updatePatient.php", updateInfo)
        .then((res) => {

        })
    }

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
        setNameInfo(res.data)
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

        <div className="add-users">
    <h25>Add a Receptionist</h25>

        <input className="user-name-surname" type="text" placeholder="Name and Surname"  />
        <input className="user-age" type="text" placeholder="Age"  />
        <input className="user-gender" type="text" placeholder="Gender"  />
        <input className="user-email" type="text" placeholder="Email"  />
        <input className="user-password" type="text" placeholder="Password"  />
        <input className="user-number" type="text" placeholder="Number"  />
        <input className="user-id" type="text" placeholder="Admin"  />


        <button type="add-user-button" >Add</button>
    </div>

    <div class="delete_user">
            <h6> Delete Receptionist</h6>
            <form> 
                <select className="delUser">
                </select>
                <button className="button3">Delete</button>
            </form>
        </div>

        <div class="update-user">
            <h7> Update Receptionist</h7>
            <form action="medical_api/patients.php" method="post"> 
            <select ref={name} class="delUser2">
                {
                    nameInfo.map(item => <option value={item.name_and_surname} >{item.name_and_surname}</option>)
                }
                </select>
                <input ref={medAidNumber} className="pat-medicalaid" type="text" placeholder="Rank"  />
                <input ref={email} className="pat-email" type="text" placeholder="Email"  />
                <input ref={number} className="pat-number" type="text" placeholder="Number"  />
                <input ref={password} className="pat-password" type="text" placeholder="Password"  />
                <button className="button4" onClick={updatePatient} >Delete</button>
            </form>
        </div>    

   


    </>
    )

    






};

export default Reception;