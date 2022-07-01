import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    

    const navigate = useNavigate();

        const [inputs, setInputs] = useState({
            email: '',
            password: '',
            image: '',
        });

        const [emailError, setEmailError] = useState();
        const [passwordError, setPasswordError] = useState();

        const usernameVal = (e) => {
            const value = e.target.value;
            setInputs({...inputs, email: value});
            //here you will validate not empty
        }

        const passwordVal = (e) => {
            const value = e.target.value;
            setInputs({...inputs, password: value});
            //here you will validate not empty
            //CHECK CAPS LOCK IS ON! extra marks




            
        }
        
        
       

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(inputs);                        //DELETE THIS IN FINAL PROJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!

            axios.post('http://localhost:8888/medicalApi/userLogin.php', inputs)
            .then(function(response) {
                console.log(response);

                if(response.data === true){
                    sessionStorage.setItem('activeUser', inputs.email);
                    navigate("reception");
                }else {
                    console.log("Not Working!");
                }

            });




    }

    return (
    <>        
    
   
            <div className="behind">
            <div className="login-heading">
            <h4>Sign In</h4>
                <input className="box1" type="username" placeholder="Email" onChange={usernameVal} />
                <input className="box2"  type="password" placeholder="Password" onChange={passwordVal} />
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