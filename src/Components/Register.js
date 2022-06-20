import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Register = () => {

    const navigate = useNavigate();

        const [inputs, setInputs] = useState({
            fullName: '',
            gender: '', 
            email: '',
            contact: '',
            password: '',
            passwordCon: '',
            image: '',
        });

        const [fullNameError, setFullNameError] = useState();
        const [genderError, setGenderError] = useState();
        const [emailError, setEmailError] = useState();
        const [contactError, setContactError] = useState();
        const [passwordError, setPasswordError] = useState();
        const [passwordConError, setPasswordConError] = useState();

        const [emailAvail, setEmailAvail] = useState();

        const fullNameVal = (e) => {
            const value = e.target.value;
            setInputs({...inputs, fullName: value});
            if(inputs.first !== ''){setFullNameError();} 
        }

        //IMAGES
        const imageVal = (e) => {
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.onload = function() {
                    console.log(reader.result);
                    let imgFile = reader.result;

                    setInputs({...inputs, image: imgFile});

                    var image = new Image();
                    image.src = reader.result;
                    document.getElementById('profileimg').appendChild(image);
            }
            reader.readAsDataURL(file);
        }
            const genderVal = (e) => {
                const value = e.target.value;
                setInputs({...inputs, gender: value});
                if(inputs.last !== ''){setGenderError();} 
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
        
                if(inputs.fullName === ''){
                } else {
                    setFullNameError("Please Enter your full name");
                }
        
                if(inputs.gender === ''){
                } else {
                    setGenderError("You aren't Seal... ");
                }
        
                if(inputs.email === ''){
                } else {
                    setEmailError();
                }
                
                if(inputs.contact === ''){
                } else {
                    setContactError();
                }
        
                if(inputs.password === ''){
                } else {
                    setPasswordError();
                }
        
                if(inputs.passwordCon === ''){
                } else {
                    setPasswordConError();
                }
        
                let result = Object.values(inputs).some(o => o === '');

                if(result){
                    console.log('Not working');
                } else {
                    axios.post('http://localhost:8888/medical_api/addUser.php', inputs)
                    .then(function(response){
                     console.log(response);
        
                     if(response.status === 200){
                         //navigate("/login");
                         console.log("Working Fine");
                     }
        
                    });
        } 
    }    

    return (
        <div>
            <form id='ImgOne' encType="multipart/form-data">    
                <div className='imageArea'>
                <input name="imageUrl" className='imgInput' type="file" onChange={imageVal} />
                <div id="profileimg" className='profile_img'></div>  
                </div>

                <div className="behind2">
                
                <div className="reg-box">
                <form>   
                <h5>Register</h5>
                    <input className="first_last"  type="text" placeholder="Name and Surname" onChange={fullNameVal} />
                    <input className="gender"  type="text" placeholder="Gender" onChange={genderVal} />
                    <input className="email"  type="text" placeholder="Email"  onChange={emailVal} />
                    <input className="contact" type="text" placeholder="Contact" onChange={contactVal} />
                    <input className="password"  type="text" placeholder="Password" onChange={passwordVal} />
                    <input className="conPass"  type="password" placeholder="Confirm Password" onChange={passwordConVal} />
                    <button className="button2" onClick={handleSubmit} >Register</button>
                    </form>
                    <div className="login-link1">Already have an account?<a href="/">Login</a></div>
                    </div>
                </div>

                <div className="extra-text2">
                    <p6>This is the first step to a heathier <b>YOU</b> and the beginning of your
                        health journey with us!
                    </p6>
                    </div>
            </form>
        </div>
    )
}

export default Register