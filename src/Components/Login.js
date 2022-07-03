import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    

    const navigate = useNavigate();



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
                console.log(response.data);
                

                if(response.data === true){
                    sessionStorage.setItem('activeUser', name.current.value);
                    navigate("reception");
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