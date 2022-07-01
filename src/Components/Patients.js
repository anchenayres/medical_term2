import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";


const Patients = () => {

    const [ rerender, setRerender ] = useState(false);
    const [allPatientsInfo, setAllPatientsInfo] = useState([]);
    const [patientCards, setPatientCards] = useState();
    useEffect(() => {
        setRerender(false);
        axios.post("http://localhost:8888/medicalApi/readPatient.php")
            .then((res) => {
                let patients = res.data.map(item =>
                    <div className="patient-table">
                        <div className="patient-image"></div>
                        <div className="patient-name">
                            <label></label><span className="result2">{item.patientName}</span><br></br>
                            <label></label><span className="result2">{item.gender}</span><br></br>
                            <label></label><span className="result2">{item.age}</span><br></br>
                        </div>
                        <div className="contact-info2">
                            <label><div className="email-image"></div></label><span className="result3">{item.email}</span><br></br>
                            <label><div className="number-image"></div></label><span className="result3">{item.patientNumber}</span><br></br>
                            <label><div className="room-image"></div></label><span className="result3">{item.patientID}</span><br></br>
                            <label><div className="occ-image"></div></label><span className="result3">{item.patientAppointments}</span><br></br>
                        </div>
                    </div>
                )
                setPatientCards(patients)
                setAllPatientsInfo(res.data);
            })
    }, [rerender])

    // a refers to ADD
    let aName = useRef();
    let aAge = useRef();
    let aGender = useRef();
    let aEmail = useRef();
    let aPassword = useRef();
    let aNumber = useRef();
    let aId = useRef();
    let aAidNumber = useRef();

    const addPatient = () => {
        let name = aName.current.value;
        let age = aAge.current.value;
        let gender = aGender.current.value;
        let email = aEmail.current.value;
        let password = aPassword.current.value;
        let number = aNumber.current.value;
        let id = aId.current.value;
        let aidNumber = aAidNumber.current.value;

        let details = {
            name: name,
            age: age,
            gender: gender,
            email: email,
            password: password,
            number: number,
            id: id,
            aidNumber: aidNumber
        }

        axios.post("http://localhost:8888/medicalApi/addPatient.php", details)
            .then((res) => {

            })
        setRerender(true);
    }

    // d refers to delete
    let dId = useRef();

    const deletePatient = () => {
        let id = dId.current.value;

        axios.post("http://localhost:8888/medicalApi/deletePatient.php", id)
            .then((res) => {
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
        setRerender(true);

    }

    // u refers to update
    let uId = useRef();
    const [updatePatientInfo, setUpdatePatientInfo] = useState([]);

    const getUpdateDetails = () => {
        let id = uId.current.value;

        axios.post("http://localhost:8888/medicalApi/getPatientDetails.php", id)
            .then((res) => {
                setUpdatePatientInfo(res.data[0]);
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
        setRerender(true);

    }

    let uAidNumber = useRef();
    let uEmail = useRef();
    let uNumber = useRef();
    let uPassword = useRef();

    const updatePatient = () => {
        let id = uId.current.value;
        let aidNumber = uAidNumber.current.value;
        let email = uEmail.current.value;
        let number = uNumber.current.value;
        let password = uPassword.current.value;

        let details = {
            aidNumber: aidNumber,
            email: email,
            number: number,
            password: password,
            id: id
        }

        axios.post("http://localhost:8888/medicalApi/updatePatient.php", details)
            .then((res) => {
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
        setRerender(true);
    }

    return (
        <>
            <div className="pat-appointments">
                <h14>Current Patients</h14>
                {patientCards}
            </div>

            <div className="add-users">
                <h25>Add a Patient</h25>
                <input ref={aName} className="user-name-surname" name="user-name-surname" type="text" placeholder="Patient Name and Surname" />
                <input ref={aGender} className="user-gender" name="user-gender" type="text" placeholder="Patient Gender" />
                <input ref={aEmail} className="user-email" name="user-email" type="text" placeholder="Patient Email" />
                <input ref={aPassword} className="user-password" name="user-password" type="text" placeholder="Patient Password" />
                <input ref={aAge} className="user-age" name="user-age" type="text" placeholder="Patient Age" />
                <input ref={aNumber} className="user-number" name="user-number" type="text" placeholder="Patient Number" />
                <input ref={aId} className="user-id" name="user-id" type="text" placeholder="Patient Id" />
                <input ref={aAidNumber} className="user-medicalaid" name="user-medicalaid" type="text" placeholder="Patient Medical Aid Number" />
                <button className="add-user-button" onClick={addPatient}>Add</button>
            </div>

            <div className="delete_user">
                <h6> Delete an Existing Patient</h6>
                <select ref={dId} className="delUser2">
                    <option>Please Select a Patient</option>
                    {
                        allPatientsInfo.map(item => <option value={item.id} >{item.patientName}</option>)
                    }
                </select>
                <button className="button4" onClick={deletePatient}>Delete</button>
            </div>

            <div className="update-user">
                <h7> Update an Existing Patient</h7>
                <select ref={uId} onChange={getUpdateDetails} className="delUser2">
                    <option>Please Select a Patient</option>
                    {
                        allPatientsInfo.map(item => <option value={item.id} >{item.patientName}</option>)
                    }
                </select>
                <input ref={uAidNumber} defaultValue={updatePatientInfo.patientMedical} className="pat-medicalaid" name="pat-medicalaid" type="text" placeholder="Medical Aid Number" />
                <input ref={uEmail} defaultValue={updatePatientInfo.email} className="pat-email" name="pat-email" type="text" placeholder="Email" />
                <input ref={uNumber} defaultValue={updatePatientInfo.patientNumber} className="pat-number" name="pat-number" type="text" placeholder="Number" />
                <input ref={uPassword} defaultValue={updatePatientInfo.password} className="pat-password" name="pat-password" type="text" placeholder="Password" />
                <button className="button4" onClick={updatePatient}>Update</button>
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


