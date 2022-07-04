import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";


const Reception = () => {

    const navigate = useNavigate();
    
        //logout
        const logout = () => {
            sessionStorage.clear();
            navigate('/');
        }    

    const [ userRank, setUserRank ] = useState('');
    const [ username, setUsername ] = useState('');
    
    //name of logged in user 
    useEffect(() => {
        let loggedUserName = sessionStorage.getItem('activeUser');
        let rank = sessionStorage.getItem('rank');

        setUsername(loggedUserName);
        setUserRank(rank);
        
        if( loggedUserName == '' || loggedUserName == ' ' || loggedUserName == undefined || loggedUserName == null ) {
            navigate('/')
        } else {
            console.log('test')
        }
    }, []) 



    const [ rerender, setRerender ] = useState(false);
    const [allRecepInfo, setAllRecepInfo] = useState([]);
    const [recepCards, setRecepCards] = useState();
    useEffect(() => {
        setRerender(false);
        axios.post("http://localhost:8888/medicalApi/readReceptionist.php")
            .then((res) => {
                let receps = res.data.map(item =>
                    <div className="patient-table">
                        <div className="patient-image"><img src={'https://localhost:8888/medicalApi/' + item.receptionImage}/></div>
                        <div className="patient-name">
                            <label></label><span className="result2">{item.receptionName}</span><br></br>
                            <label></label><span className="result2">{item.receptionGender}</span><br></br>
                            <label></label><span className="result2">{item.receptionAge}</span><br></br>
                        </div>
                        <div className="contact-info2">
                            <label><div className="no-image">Email:</div></label><span className="result4">{item.receptionEmail}</span><br></br>
                            <label><div className="no-image">Number:</div></label><span className="result4">{item.receptionNumber}</span><br></br>
                            <label><div className="no-image">Status:</div></label><span className="result4">{item.receptionStatus}</span><br></br>
                        </div>
                    </div>
                )
                setRecepCards(receps)
                setAllRecepInfo(res.data);
            })
    }, [rerender])

    // a refers to add
    let aName = useRef();
    let aAge = useRef();
    let aGender = useRef();
    let aEmail = useRef();
    let aPassword = useRef();
    let aNumber = useRef();
    let aAdmin = useRef();

    const addReceptionist = () => {
        let name = aName.current.value;
        let age = aAge.current.value;
        let gender = aGender.current.value;
        let email = aEmail.current.value;
        let password = aPassword.current.value;
        let number = aNumber.current.value;
        let admin = aAdmin.current.value;

        let details = {
            name: name,
            age: age,
            gender: gender,
            email: email,
            password: password,
            number: number,
            admin: admin
        }

        axios.post("http://localhost:8888/medicalApi/addReception.php", details)
        .then((res) => {
        console.log("🚀 ~ file: Reception.js ~ line 66 ~ .then ~ res", res)
        })
        alert(aName.current.value + " has been successfully added")

        setRerender(true);
    }

    // d refers to delete
    let dId = useRef();

    const deleteReceptionist = () => {
        let id = dId.current.value;

        axios.post("http://localhost:8888/medicalApi/deleteReceptionist.php", {id: id})
            .then((res) => {
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
            alert(aName.current.value + " has been successfully deleted")

        setRerender(true);
    }

    // u refers to update
    let uId = useRef();
    const [updateRecepInfo, setUpdateRecepInfo] = useState([]);

    const getUpdateDetails = () => {
        let id = uId.current.value;

        axios.post("http://localhost:8888/medicalApi/getReceptionistDetails.php", {id: id})
            .then((res) => {
                setUpdateRecepInfo(res.data[0]);
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
        setRerender(true);

    }

    let uRank = useRef();
    let uEmail = useRef();
    let uNumber = useRef();
    let uPassword = useRef();

    const updateReceptionist = () => {
        let id = uId.current.value;
        let rank = uRank.current.value;
        let email = uEmail.current.value;
        let number = uNumber.current.value;
        let password = uPassword.current.value;

        let details = {
            rank: rank,
            email: email,
            number: number,
            password: password,
            id: id
        }

        axios.post("http://localhost:8888/medicalApi/updateReceptionist.php", details)
            .then((res) => {
                console.log("🚀 ~ file: Patients.js ~ line 61 ~ .then ~ res", res)
            })
            alert(aName.current.value + " has been successfully updated")

        setRerender(true);
    }

    return (
    <>
   
    
        <div className="pat-appointments">
        <h10>Current Receptionists</h10>
        {recepCards}
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
    <h25>Add a Receptionist</h25>

        <input ref={aName} className="user-name-surname" type="text" placeholder="Name and Surname"  />
        <input ref={aAge} className="user-age" type="text" placeholder="Age"  />

        <select ref={aGender} className="user-gender" name="Gender">
            <option>Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
        </select>

        <input ref={aEmail} className="user-email" type="text" placeholder="Email"  />
        <input ref={aPassword} className="user-password" type="text" placeholder="Password"  />
        <input ref={aNumber} className="user-number" type="text" placeholder="Number"  />
        <select ref={aAdmin} className="user-id" type="text" name="admin">
            <option>Admin</option>
            <option>General</option>

        </select>


        <button type="add-user-button" className="add-user-button3" onClick={addReceptionist}>Add</button>
        
    </div>

    <div class="delete_user">
            <h9> Delete Receptionist</h9>
            <select ref={dId} class="delUser2">
                <option>Please select a receptionist</option>
                {
                    allRecepInfo.map(item => <option value={item.id} >{item.receptionName}</option>)
                }
                </select>
                <button className="button4" onClick={deleteReceptionist}>Delete</button>
        </div>

        <div className="user-profile">
            <div className="user-image"></div>

            <h18>Welcome back {username} | {userRank == 'Head' ? 'Head Receptionist' : 'General Receptionist'}</h18>

            <div className="logout" onClick={logout}><div className="logout-button">Log out</div></div>
        </div>

        <div class="update-user">
            <h9> Update Receptionist</h9>
            <select ref={uId}  onChange={getUpdateDetails} class="delUser2">
            <option>Please select a receptionist</option>
                {
                    allRecepInfo.map(item => <option value={item.id} >{item.receptionName}</option>)
                }
                </select>
                <input ref={uRank} defaultValue={updateRecepInfo.receptionStatus}  className="pat-medicalaid" type="text" placeholder="Rank"  />
                <input ref={uEmail} defaultValue={updateRecepInfo.receptionEmail} className="pat-email" type="text" placeholder="Email"  />
                <input ref={uNumber} defaultValue={updateRecepInfo.receptionNumber} className="pat-number" type="text" placeholder="Number"  />
                <input ref={uPassword} defaultValue={updateRecepInfo.receptionPassword} className="pat-password" type="text" placeholder="Password"  />
                <button className="button6" onClick={updateReceptionist} >Update</button>
        </div>    



    </>
    )

    






};

export default Reception;