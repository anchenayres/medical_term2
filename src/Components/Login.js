import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import showPwdImg from '../Images/showpwd.svg';
import hidePwdImg from '../Images/hidepwd.svg';




const Login = () => {

    const navigate = useNavigate();    
    //name of logged in user 
    useEffect(() => {
        let loggedUserName = sessionStorage.getItem('activeUser');
        
        if( loggedUserName == '' || loggedUserName == ' ' || loggedUserName == undefined || loggedUserName == null ) {
            //nothing
        } else {
            navigate('/reception')

        }
    },[])
    
    const [capsError, setCapsError] = useState();

        // CAPS LOCK 
        function testCapsLock(event) {
            if(event.code === "CapsLock"){
                let isCapsLockOn = event.getModifierState("CapsLock");
                if(isCapsLockOn) {
                    console.log("Caps Lock turned on");
                    setCapsError('* Caps Lock turned on');
                } else {
                    console.log("Caps Lock turned off");
                    setCapsError('');

                }
            }
        }
        document.addEventListener("keydown", testCapsLock);
        document.addEventListener("keyup", testCapsLock); 
    

       
        let name = useRef();
        let password = useRef();

        const handleSubmit = (e) => {

            let inputs = {
                name: name.current.value,
                password: password.current.value,
            }
            e.preventDefault();
            console.log(inputs);                        //DELETE THIS IN FINAL PROJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!

            axios.post('http://localhost:8888/medicalApi/userLogin.php', inputs)
            .then(function(response) {
                console.log(response.data[0].receptionStatus);
                if(response.data !== false){
                    sessionStorage.setItem('activeUser', name.current.value);
                    sessionStorage.setItem('rank', response.data[0].receptionStatus);
                    navigate("reception");
                }else {
                    console.log("Not Working!");
                }
            });
    }

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
    <>        
            <div className="behind">
            
            <div className="login-heading">

            <h4>Sign In</h4>
                <input ref={name} className="box1" type="username" placeholder="Name and Surname"  />
                <div className='password-container'>
                    <input ref={password} className="box2"  type={isRevealPwd ? 'text' : 'password'} placeholder="Password"  />

                    <img
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        alt='Icon'
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                </div>
                <label className="caps-error">{capsError}</label>
                <button className="button1" onClick={handleSubmit} >Sign In</button>
                <div className="login-link">Register for an account<a href="/Register">Register</a></div>
            </div>
            </div>

                <div className="extra-text">
                <p5>Welcome to the <b>Breast Cancer Clinic</b> where all your possible needs
                    are cared for. Sign in to continue your journey with us!</p5>
                </div>
        </>
    )

    





};

export default Login;