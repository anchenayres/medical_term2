import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";


const Register = () => {

    const navigate = useNavigate();

        const [fullNameError, setFullNameError] = useState();
        const [genderError, setGenderError] = useState();
        const [emailError, setEmailError] = useState();
        const [contactError, setContactError] = useState();
        const [passwordError, setPasswordError] = useState();
        const [passwordConError, setPasswordConError] = useState();

        const [emailAvail, setEmailAvail] = useState();
        const [userAvail, setUserAvail] = useState();

        //IMAGES
        const [ imageUrl, setImageUrl ] = useState('');
        const imageVal = (e) => {
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.onload = function() {
                    console.log(reader.result);
                    let imgFile = reader.result;
                    setImageUrl(imgFile);

                    var image = new Image();
                    image.src = reader.result;
                    document.getElementById('profileimg').appendChild(image);
            }
            reader.readAsDataURL(file);
        }

            let rName = useRef();
            let rGender = useRef();
            let rEmail = useRef();
            let rContact = useRef();
            let rPassword = useRef();
            let rConfirmPassword = useRef();
            const handleSubmit = (e) => {
                e.preventDefault();

                let name = rName.current.value;
                if(name === ''){
                    setFullNameError('Please enter your full name and surname');
                } else {
                    setFullNameError("");
                } 
        
                let gender = rGender.current.value;
                if(gender === ''){
                    setGenderError('Please add your gender');
                } else {
                    setGenderError("");
                }
        
                let email = rEmail.current.value;
                const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(email === ''){
                    setEmailError('Please enter your email address')
                } else if( !email.match(mailcodex) ) {
                    setEmailError('Email is not a valid format');
                } else {
                    setEmailError("");
                }
                
                let contact = rContact.current.value;
                const contCodex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if(contact === '') {
                    setContactError('Please enter your number');
                } else if(!contact.match(contCodex)) {
                    setContactError('Not a Valid Phone Number');
                } else {
                    setContactError("");
                }
        
                let password = rPassword.current.value;
                const passCodex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
                if(password === ''){
                    setPasswordError('Please enter your password');
                } else if(!password.match(passCodex)) {
                    setPasswordError('nommer, n spesiale karakter, uppercase, lowercase. > 5-6Password must include capital letters and symbols')
                } else {
                    setPasswordError("");
                }
        
                let confirmPassword = rConfirmPassword.current.value;
                if( confirmPassword !== password){
                    setPasswordConError('Password does not match');
                } else {
                    setPasswordConError("");
                }

                let inputs = {
                    name: name,
                    gender: gender,
                    email: email,
                    contact: contact,
                    password: password,
                    img: imageUrl
                }
        
                let result = Object.values(inputs).some(o => o === '');

                if(result){
                    console.log('Not working');
                } else {
                    axios.post('http://localhost:8888/medicalApi/addUser.php', inputs)
                    .then((res) => {
                     console.log(res);
        
                    if(res.status === 200){
                        //navigate("/login");
                        console.log("Working Fine");
                    }
                });
        } 
    }    

    return (
        <div>
                        <div className="behind2">
                        <div className="reg-box">
                        <form id='ImgOne' encType="multipart/form-data">    
                    <div className='imageArea'>
                        <input name="imageUrl" className='imgInput' type="file" onChange={imageVal} />
                        <div id="profileimg" className='profile_img'></div>  
                    </div>
                        <form>   
                            <h5>Register</h5>
                       
                            <div className='names'>
                            <input ref={rName} className="first_last" name="first_last" type="text" placeholder="Name and Surname"  />
                            {fullNameError}
                            </div>
                          
                            <div className='genders'>
                            <input ref={rGender} className="gender" name="gender" type="text" placeholder="Gender"  />
                            {genderError}
                            </div>

                            <div className='emails'>
                            <input ref={rEmail} className="email" name="email"  type="text" placeholder="Email"   />
                            {emailError}
                            {emailAvail}    
                            </div>

                            <div className='contacts'>
                            <input ref={rContact} className="contact" name="contact" type="text" placeholder="Contact" />
                            {contactError}
                            </div>

                            <div className='passwords'>
                            <input ref={rPassword} className="password" name="password" type="text" placeholder="Password"  />
                            {passwordError}
                            </div>

                            <div className='samepasswords'>
                            <input ref={rConfirmPassword} className="conPass" name="conPass" type="password" placeholder="Confirm Password" />
                            {passwordConError}
                            </div>

                            <button className="button2" name="button2" onClick={handleSubmit} >Register</button>
                        </form>
                            <div className="login-link1">Already have an account?<a href="/">Login</a></div>
                            </form>
                        </div>
                        </div>

                            <div className="extra-text2">
                            <p6>This is the first step to a heathier <b>YOU</b> and the beginning of your health journey with us!
                            </p6>
                            
                            </div>
                
        </div>
    )
}

export default Register