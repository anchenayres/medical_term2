import axios from "axios";
import React, {useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";



const Appointments = () => {

    const [appointmentInfo, setAppointmentInfo] = useState();
    const [rerender, setRerender] = useState(false);

    const [ allPatients, setAllPatients ] = useState([]);
    const [ allDoctors, setAllDoctors ] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:8888/medicalApi/readPatient.php')
        .then((res) => {
            setAllPatients(res.data);
            console.log(res)
        })

        axios.post('http://localhost:8888/medicalApi/readUserPosts.php')
        .then((res) => {
            setAllDoctors(res.data);
            console.log(res)
        })
    }, [])



    useEffect (() => {
        setRerender(false);
        axios.post("http://localhost:8888/medicalApi/appointments.php")
            .then((res) =>{
                console.log(res);
                let appointments = res.data.map(item => 

                <div className="patient-table">

                <div className="patient-image"></div>
                <div className="patient-name">
                <label></label><span className="result2">{item.doctor}</span><br></br>
                </div>

                <div className="contact-info2">
                    <label><div className="email-image"></div></label><span className="result3">{item.patient}</span><br></br>
                    <label><div className="room-image"></div></label><span className="result3">{item.room}</span><br></br>
                    <label><div className="room-image"></div></label><span className="result3">{item.date}</span><br></br>
                    <label><div className="room-image"></div></label><span className="result3">{item.time}</span><br></br>        
                </div>
                </div>
                )
                setAppointmentInfo(appointments) 
            });
    }, [rerender]);
    
    //adding a patient
    let aPatient = useRef();
    let aId = useRef();
    let aDoctor = useRef();
    let aRoom = useRef();
    let aDate = useRef();
    let aTime = useRef();

    const addAppointment = () => {
        let patient = aPatient.current.value;
        let doctor = aDoctor.current.value;
        let room = aRoom.current.value;
        let date = aDate.current.value;
        let time = aTime.current.value;
    
        let details = {
            room: room,
            doctor: doctor,
            patient: patient,
            date: date,
            time: time,
        }
       
        axios.post('http://localhost:8888/medicalApi/addAppointment.php', details)
        .then((res) => {
            console.log(res)
        });
        setRerender(true);
    }


    return (
        <>
        <div className="app-appointments">
            <h3>Current Appointments</h3>
            {appointmentInfo}
        </div>

            <div className="nav"></div>
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


            <div className="add-users">
        <h25>Add an Appointment</h25>

            <select ref={aPatient} className='user-name-surname'>
                <option>Please select a patient</option>
                {
                    allPatients.map((item) => 
                        <option value={item.patientName}>{item.patientName}</option>
                    )
                }
            </select>

            <select ref={aDoctor} className='user-gender'>
                <option>Please select a doctor</option>
                {
                    allDoctors.map(item =>
                        <option value={item.name}>{item.name}</option>    
                    )
                }
            </select>
            <input ref={aRoom} className="user-age" name="user-age" type="text" placeholder="Doctor Room"  />
            <input ref={aDate} className="user-email" name="user-email" type="date" placeholder="Date"  />
            <input ref={aTime} className="user-password" name="user-password" type="time" placeholder="Time"  />
            <button className="add-user-button" onClick={addAppointment}>Add</button>
        </div>

        <div className="user-profile">
                <div className="user-image"></div>
                <h18>Riley Walker | Head Recpetionist </h18>
                <div className="logout">
                <li><a href="/">Log Out</a></li>
                </div>
            </div>
        
            {/* <div className="delete_user">
                <h6> Delete an Existing App</h6>
                <select ref={dId} className="delUser2">
                    <option>Please Select a Patient</option>
                    {
                        appointmentInfo.map((item) => <option value={item.id}>{item.patient}</option>)
                    }
                </select>
                <button className="button4" onClick={deleteAppointment}>Delete</button>
            </div> */}
        
        </>
    )
};

export default Appointments;



        





