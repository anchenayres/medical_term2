import axios from "axios";
import React, {useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";



const Appointments = () => {

    const navigate = useNavigate();

    const [ userRank, setUserRank ] = useState('');
    const [ username, setUsername ] = useState('');

    //logout
    const logout = () => {
        sessionStorage.clear();
        navigate('/');
    }
    
    //name of logged in user 
    useEffect(() => {
        let loggedUserName = sessionStorage.getItem('activeUser');
        let rank = sessionStorage.getItem('rank');
        setUsername(loggedUserName);
        setUserRank(rank);
        
        if( loggedUserName == '' || loggedUserName == ' ' || loggedUserName == undefined || loggedUserName == null ) {
            navigate('/')
        } else {

        }
    }, [])


    const [appointmentInfo, setAppointmentInfo] = useState();
    const [rerender, setRerender] = useState(false);

    const [ allPatients, setAllPatients ] = useState([]);
    const [ allDoctors, setAllDoctors ] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:8888/medicalApi/readPatient.php')
        .then((res) => {
            setAllPatients(res.data);

        })

        axios.post('http://localhost:8888/medicalApi/readUserPosts.php')
        .then((res) => {
            setAllDoctors(res.data);

        })
    }, [rerender])


    const [ allAppointments, setAllApppointments ] = useState([]);
    useEffect (() => {
        setRerender(false);
        axios.post("http://localhost:8888/medicalApi/appointments.php")
            .then((res) =>{
                setAllApppointments( res.data );

                let appointments = res.data.map(item => 

                <div className="patient-table">

                <div className="patient-image"></div>
                <div className="patient-name">
                <label></label><span className="result2">Dr. {item.doctor}</span><br></br>
                </div>

                <div className="contact-info2">
                    <label><div className="no-image">Patient:</div></label><span className="result3">{item.patient}</span><br></br>
                    <label><div className="no-image">Room:</div></label><span className="result3">{item.room}</span><br></br>
                    <label><div className="no-image">Date:</div></label><span className="result3">{item.appDate}</span><br></br>
                    <label><div className="no-image">Time:</div></label><span className="result3">{item.time}</span><br></br>        
                </div>
                </div>
                )
                setAppointmentInfo(appointments) 
            });
    }, [rerender]);

    // delete appointment
     let dId = useRef();

     const deleteAppointment = () => {
         let id = dId.current.value;
 
         axios.post("http://localhost:8888/medicalApi/deleteAppointment.php", id)
             .then((res) => {
             })
             alert(aPatient.current.value + " has been successfully deleted")

         setRerender(true);
 
     }

    // u refers to update
    let uId = useRef();
    const [updateAppInfo, setUpdateAppInfo] = useState([]);

    const getUpdateDetails = () => {
        let id = uId.current.value;
        console.log(id)

        axios.post("http://localhost:8888/medicalApi/getAppointmentDetails.php", {id: id})
            .then((res) => {

                setUpdateAppInfo(res.data[0]);

            })
        setRerender(true);

    }

    //update an appointment
    let uDate = useRef();
    let uTime = useRef();
    let uDoctor = useRef();
    let uRoom = useRef();

    const updateAppointment = () => {
        let id = uId.current.value;
        let date = uDate.current.value;
        let time = uTime.current.value;
        let doctor = uDoctor.current.value;
        let room = uRoom.current.value;


        let details = {
            id: id,
            date: date,
            time: time,
            doctor: doctor,
            room: room
        }



        axios.post("http://localhost:8888/medicalApi/updateAppointment.php", details)
            .then((res) => {
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
            alert(aPatient.current.value + " has been successfully updated")

        setRerender(true);
    }
    
    //adding a patient
    let aPatient = useRef();
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
        alert(aPatient.current.value + " has been successfully added")

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
            <button className="add-user-button3" onClick={addAppointment}>Add</button>
        </div>

        <div className="user-profile">
                <div className="user-image"></div>
                <h18>Welcome back {username} | {userRank == 'Head' ? 'Head Receptionist' : 'General Receptionist'}</h18>

                <div className="logout" onClick={logout}><div className="logout-button">Log out</div></div>
            </div>
        
            <div className="delete_user">
                <h30>Delete an Existing Appointment</h30>
                <select ref={dId} className="delUser3">
                    <option>Please Select a Patient</option>
                    {
                        allAppointments.map((item) => <option value={item.id}>{item.patient}</option>)
                    }
                </select>
                <button className="button4" onClick={deleteAppointment}>Delete</button>
            </div>

            <div className="update-user">
                <h7> Update an Existing Patient</h7>
                <select ref={uId} onChange={getUpdateDetails} className="delUser2">
                     <option>Please Select a Patient</option>
                    {
                        allAppointments.map(item => <option value={item.id} >{item.patient}</option>)
                    } 
                </select>
                <input ref={uDate} defaultValue={updateAppInfo.appDate} className="pat-medicalaid" name="pat-medicalaid" type="date" placeholder="Date" />
                <input ref={uTime} defaultValue={updateAppInfo.time} className="pat-email" name="pat-email" type="time" placeholder="Time" />
                <input ref={uDoctor} defaultValue={updateAppInfo.doctor} className="pat-number" name="pat-number" type="text" placeholder="Doctor" />
                <input ref={uRoom} defaultValue={updateAppInfo.room} className="pat-password" name="pat-password" type="text" placeholder="Room" />

                <button className="button6" onClick={updateAppointment}>Update</button>
            </div> 
        
        </>
    )
};

export default Appointments;



        





