import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";


const Doctors = () => {

    const [doctorInfo, setDoctorInfo] = useState();
    const [nameInfo, setNameInfo] = useState([]);
    const [rerender, setRerender] = useState(false);
    useEffect(() => {
        setRerender(false);
        axios.post("http://localhost:8888/medicalApi/readUserPosts.php")
            .then((res) => {
                let doctors = res.data.map(item =>

                    <div className="patient-table">
                        <div className="patient-image"></div>
                        <div className="patient-name">
                            <label></label><span className="result2">{item.name}</span><br></br>
                            <label></label><span className="result2">{item.gender}</span><br></br>
                            <label></label><span className="result2">{item.age}</span><br></br>
                        </div>

                        <div className="contact-info2">
                            <label><div className="email-image"></div></label><span className="result3">{item.email}</span><br></br>
                            <label><div className="number-image"></div></label><span className="result3">{item.number}</span><br></br>
                            <label><div className="room-image"></div></label><span className="result3">{item.docRoom}</span><br></br>
                            <label><div className="occ-image"></div></label><span className="result3">{item.docSpecial}</span><br></br>
                        </div>
                    </div>
                )
                setNameInfo(res.data)
                setDoctorInfo(doctors)
            });

    }, [rerender]);

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

        axios.post('http://localhost:8888/medicalApi/addDoctor.php', inputs)
            .then((res) => {
                // console.log(res)
            });
        setRerender(true);
    }

    let deleteId = useRef();
    const deleteDoctor = (e) => {
        e.preventDefault();
        let id = deleteId.current.value;

        axios.post('http://localhost:8888/medicalApi/deleteDoctor.php', { id: id })
            .then((res) => {
            })
        setRerender(true);
    }


    let updateId = useRef();
    const [doctorDetails, setDoctorsDetails] = useState([]);
    const [updateID, setUpdateID] = useState();
    const updateDoctor = () => {
        let id = updateId.current.value;
        setUpdateID(id);
        axios.post('http://localhost:8888/medicalApi/getDoctorDetails.php', { id: id })
            .then((res) => {
                setDoctorsDetails([res.data[0].docRoom, res.data[0].email, res.data[0].number, res.data[0].pass])
            })
    }

    let roomNum = useRef();
    let email = useRef();
    let number = useRef();
    let password = useRef();
    const updateDetails = (e) => {
        e.preventDefault();
        let room = roomNum.current.value;
        let docEmail = email.current.value;
        let num = number.current.value;
        let pass = password.current.value
        let id = updateID

        let details = {
            room: room,
            email: docEmail,
            num: num,
            pass: pass,
            id: id
        }

        axios.post('http://localhost:8888/medicalApi/updateDoctor.php', details)
            .then((res) => {
                setDoctorsDetails([res.data[0].docRoom, res.data[0].email, res.data[0].number, res.data[0].pass])
            })
        setRerender(true);
    }


    return (
        <>

            <div className="doc-appointments">
                <h14>Current Doctors</h14>
                {doctorInfo}
            </div>

            <div className="add-users">
                <h25>Add a Doctor</h25>
                <input ref={docName} className="user-name-surname" name="name" type="text" placeholder="Name and Surname" />
                <input ref={docAge} className="user-age" name="age" type="text" placeholder="Age" />

                <select ref={docGender} className="gender-button" name="gender">
                    <option>Select Gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                </select>

                <input ref={docEmail} className="user-email" name="email" type="text" placeholder="Email" />
                <input ref={docPassword} className="user-password" name="password" type="text" placeholder="Password" />
                <input ref={docNumber} className="user-number" name="number" type="text" placeholder="Number" />
                <input ref={docId} className="user-id" name="id" type="text" placeholder="Id" />
                <input ref={docSpecial} className="user-special" name="special" type="text" placeholder="Specialisation" />
                <input ref={docRoom} className="user-room" name="room" type="text" placeholder="Room Number " />
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
                    <select ref={deleteId} class="delUser2" >
                        <option>Please select a doctor</option>
                        {
                            nameInfo.map(item => <option value={item.id} >{item.name}</option>)
                        }
                    </select>
                    <button className="button4" onClick={(e) => deleteDoctor(e)} >Delete</button>
                </form>
            </div>


            <div class="update-user">
                <h7>Update an Existing Doctor</h7>
                <form >
                    <select ref={updateId} class="delUser2" onChange={updateDoctor}>
                        <option>Please select a doctor</option>
                        {
                            nameInfo.map(item => <option value={item.id}>{item.name}</option>)
                        }
                    </select>
                    <input
                        ref={roomNum}
                        className="pat-medicalaid"
                        type="text"
                        placeholder="Room Number"
                        defaultValue={doctorDetails[0]}
                    />
                    <input
                        ref={email}
                        className="pat-email"
                        name="pat-email"
                        type="text"
                        placeholder="Email"
                        defaultValue={doctorDetails[1]}
                    />
                    <input
                        ref={number}
                        className="pat-number"
                        name="pat-number"
                        type="text"
                        placeholder="Number"
                        defaultValue={doctorDetails[2]}
                    />
                    <input
                        ref={password}
                        className="pat-password"
                        name="pat-password"
                        type="text"
                        placeholder="Password"
                        defaultValue={doctorDetails[3]}
                    />
                    <button className="button4" onClick={(e) => updateDetails(e)}  >Update</button>
                </form>
            </div>
        </>
    )

};

export default Doctors;
