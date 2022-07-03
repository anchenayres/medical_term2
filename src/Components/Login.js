import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    

    const navigate = useNavigate();



        const [emailError, setEmailError] = useState();
        const [passwordError, setPasswordError] = useState();



        //IMAGES

        const [ imageUrl, setImageUrl ] = useState('');
        const imageVal = (e) => {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                console.log(reader.result);
                let imgFile = reader.result;
                setImageUrl(imgFile);
        }
        reader.readAsDataURL(file);
    }
        
        
       
        let email = useRef();
        let password = useRef();
        const handleSubmit = (e) => {
            let inputs = {
                email: email.current.value,
                password: password.current.value,
                image: imageUrl 
            }
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
                <input ref={email} className="box1" type="username" placeholder="Email"  />
                <input ref={password} className="box2"  type="password" placeholder="Password"  />
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