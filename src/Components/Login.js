import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    
    const [capsError, setCapsError] = useState();


    // var doc = document.getElementById("textbox");

    // doc.addEventListener("keyup", testCapsLock);
    // doc.addEventListener("keydown", testCapsLock);

    // function testCapsLock(event) {
    //     if(event.code === "CapsLock"){
    //         let isCapsLockOn = event.getModifierState("CapsLock");
    //         if(isCapsLockOn) {
    //             console.log("Caps Lock turned on");
    //         } else {
    //             console.log("Caps Lock turned off");
    //         }
    //     }
    // }

    // END OF CAPS LOCK

        // const [emailError, setEmailError] = useState();
        // const [passwordError, setPasswordError] = useState();
        // const [username, setUsername] = useState();
        // const [passwordError, setPasswordError] = useState();



        //IMAGES

        // const [ imageUrl, setImageUrl ] = useState('');

        // const imageVal = (e) => {
        //     var file = e.target.files[0];
        //     var reader = new FileReader();
        //     reader.onload = function() {
        //         console.log(reader.result);
        //         let imgFile = reader.result;
        //         setImageUrl(imgFile);
        // }
        // reader.readAsDataURL(file);
        //}
        
    // const [ username, setUsername ] = useState('');

    
    

       
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

                // CAPS LOCK 
                // var doc = document.getElementById("textbox");
                function testCapsLock(event) {
                    if(event.code === "CapsLock"){
                        let isCapsLockOn = event.getModifierState("CapsLock");
                        if(isCapsLockOn) {
                            console.log("Caps Lock turned on");
                            setCapsError('Caps Lock turned on');
                        } else {
                            console.log("Caps Lock turned off");
                            setCapsError('');

                        }
                    }
                }
                document.addEventListener("keydown", testCapsLock);
                document.addEventListener("keyup", testCapsLock); 
                    

                if(response.data !== false){
                    sessionStorage.setItem('activeUser', name.current.value);
                    sessionStorage.setItem('rank', response.data[0].receptionStatus);
                    //navigate("reception");
                }else {
                    console.log("Not Working!");
                }


                // useEffect(() => {
                //     let loggedUserName = sessionStorage.getItem('userName');
                //     setUsername(loggedUserName);
                // }, [])

                // useEffect(() => {
                //     let loggedUser =  sessionStorage.getItem('loggedOnUser');
                //     if( loggedUser === '' || loggedUser === ' ' || loggedUser === undefined || loggedUser == null ) {
                //         navigate('/')
                //     } 
                // }, [])

            });
    }

    return (
    <>        
            <div className="behind">
            
            <div className="login-heading">

            <h4>Sign In</h4>
                <input ref={name} className="box1" type="username" placeholder="Email"  />
                <input ref={password} className="box2"  type="password" placeholder="Password"  />
                {capsError}
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