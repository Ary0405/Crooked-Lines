import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Google_logo from '../Assets/google_logo.png'
import {
    getFirestore,
    setDoc,
    doc,
} from "firebase/firestore";
import '../Styles/Sign_in.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../State';
import { useNavigate } from "react-router-dom";
const db = getFirestore();

function Sign_in() {
    const user = useSelector(state => state.user);
    const phoneNumber = useSelector(state => state.phone);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const handleClick = async () => {
        signInWithPopup(auth, provider).then(async (data) => {
            setValue(data.user.email);
            localStorage.setItem('user', data.user.email);
            let document = {
                "email": data.user.email,
                "name": data.user.displayName,
                "submission": 0,
            }
            await setDoc(doc(db, "users", data.user.email), document);
            dispatch(actionCreators.loginUser(true))
            console.log("User registered")
            navigate('/');
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem('user'));
    })
    function onCaptchaVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignup();
                }
            }, auth);
        }
    }
    function onSignup() {
        if (phone.length < 10) {
            alert('Please enter a valid phone number');
            console.log(phone.length)
            toast.error('Please enter a valid phone number');
        } else {
            onCaptchaVerify();
            const appVerifier = window.recaptchaVerifier;
            const formatPh = '+' + phone;
            signInWithPhoneNumber(auth, formatPh, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    toast.success('OTP sent to your phone number');
                    navigate('/otp');
                }).catch((error) => {
                    console.log(error);
                });
            console.log(phone)
            
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='signin_main_container'>
                <p className='signin_heading'>CROOKED LINES</p>
                <div className='signin_content'>
                    <p className='content_heading'>Login</p>
                    <p className='content_description'>Continue with Google or Login through OTP</p>
                </div>
                <div className='google_main_container'>
                    <div className='google_container'>
                        <img className='google_image' src={Google_logo} alt='google_logo' />
                        <p style={{ "cursor": "pointer" }} className='google_text' onClick={handleClick}>Sign Up with Google</p>
                    </div>
                </div>
                <div>
                    <div class="separator">or</div>
                </div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id='recaptcha-container'></div>
                <div className='phone_input'>
                    <PhoneInput country={"in"} value={phone} onChange={setPhone} />
                </div>
                <div className='continue'>
                    <button className='continue_button' onClick={onSignup}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Sign_in

// containerStyle={{ "alignItems": "flex-start", "alignSelf": "flex-start", "justifyContent": "center", "display": "flex" }} buttonStyle={{ "alignSelf": "center", "justifyContent": "center", "alignItems": "center" }}