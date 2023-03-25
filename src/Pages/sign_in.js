import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import OtpInput from 'otp-input-react';
import Home from './Home';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from 'react-hot-toast';

function Sign_in() {
    const [value, setValue] = useState('');
    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('user', data.user.email);
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
        onCaptchaVerify();
        const appVerifier = window.recaptchaVerifier;
        const formatPh = '+' + phone;
        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success('OTP sent to your phone number');
            }).catch((error) => {
                console.log(error);
            });
    }

    function onOTPVerify() {
        window.confirmationResult.confirm(otp).then(async(res) => {
            console.log(res);
            toast.success('OTP verified');
            localStorage.setItem('user', 'hello&gmail.com');
        })
    }
    return (
        <div>
            {value ? <Home /> :
                <button onClick={handleClick}>Sign in with Google</button>}
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id='recaptcha-container'></div>
            <PhoneInput country={"in"} value={phone} onChange={setPhone} />
            <button onClick={onSignup}>Send Code Via SMS</button>
            <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autofocus></OtpInput>
            <button onClick={onOTPVerify}>Verify</button>
        </div>
    )
}

export default Sign_in