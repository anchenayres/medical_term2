import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        first: '',
        last: '', 
        email: '',
        username: '', 
        contact: '',
        password: '',
        passwordCon: '',
    });

    const [nameError, setNameError] = useState();
    const [lastError, setLastError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();



    const firstVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, first: value});
        if(inputs.first !== ''){setNameError();} 
    }

    const lastVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, last: value});
        if(inputs.last !== ''){setLastError();} 
    }

    const emailVal = (e) => {
        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){
            setEmailError();
        } 
        if(!value.match(mailcodex)){
            setEmailError("Email is not a valid format");
        }    
    }

    const validateEmail = () => {
        axios.post('http://localhost:8888/api/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setEmailAvail();
         } else if(response.data === "Not Available") {
            setEmailAvail("Email Is Not Available");
         } else if(response.data === "") {
            setEmailAvail();
            setEmailError();
         }
        });
    }

    const usernameVal = (e) => {
        const value = e.target.value.trim();
        setInputs({...inputs, username: value});
        if(inputs.username != ''){setUsernameError();} 
    }

    const validateUser = () => {
        axios.post('http://localhost:8888/api/authenticateUser.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setUserAvail();
         } else {
            setUserAvail("Username Is Not Available");
         }
        });
    }

    const contactVal = (e) => {
        const contCodex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const value = e.target.value;
        setInputs({...inputs, contact: value});
        if(inputs.contact != ''){setContactError();} 

        if(!value.match(contCodex)){
            setContactError("Not a Valid Phone Number");
        } 
    }

    const passwordVal = (e) => {
        const passCodex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, password: value});
        if(inputs.password != ''){setPasswordError();} 

        if(!value.match(passCodex)){
            setPasswordError("Password must include stuff");
        } 
    }

    const passwordConVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        if(inputs.password === value){setPasswordConError()}else{
            setPasswordConError("Your Passwords Dont Match");
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.first === ''){
            setNameError("Everyone has one...");
        } else {
            setNameError();
        }

        if(inputs.last === ''){
            setLastError("You aren't Seal... ");
        } else {
            setLastError();
        }

        if(inputs.email === ''){
            setEmailError("You must have an email");
        } else {
            setEmailError();
        }

        if(inputs.username === ''){
            setUsernameError("You will login with this");
        } else {
            setUsernameError();
        }

        if(inputs.contact === ''){
            setContactError("We will call you all the time");
        } else {
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError("Keep it simple and easy...");
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError("They Kinda need to match...");
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log('Not working');
        } else {
            axios.post('http://localhost:8888/api/addUser.php', inputs)
            .then(function(response){
             console.log(response);

             if(response.status === 200){
                 navigate("/login");
             }

            });
        }

    }

    return (
    <>
    <div className="behind"></div>
    <div className="reg-box">
    <p4>Register Now</p4>
    
    <div className='names'>
        {nameError}
        <input name="first" className="name-reg" type="text" placeholder="Name" onchange={firstVal} />
        {lastError}
        <input name="last" className="surname-reg" type="text" placeholder="Surname" onchange={lastVal} />
        </div>
        {emailError}  
        {emailAvail}  
        <input name="email" className="email-reg" type="email" placeholder="Email" onBlur={validateEmail} onchange={emailVal} />
        {usernameError}
        {userAvail}
        <input name="username" className="age-reg" type="username" placeholder="Username" onBlur={validateUser} onchange={usernameVal} />
        {contactError}
        <input name="contact" className="number-reg"type="contact" placeholder="Contact" onchange={contactVal} />
        {passwordError}
        <input name="password" className="pass-reg" type="password" placeholder="Password" onchange={passwordVal} />
        {passwordConError}
        <input name="conPass" className="conpass-reg" type="password" placeholder="Confirm Password" onchange={passwordConVal} />
        <button type="button1" onClick={handleSubmit} >Sign Up</button>
        <div className="login-link">Already have an account?<a href="/Login">Login</a></div>

    </div>
    </>
    )


    






}

export default Register;