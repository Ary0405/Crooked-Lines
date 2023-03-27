import React from 'react'
import PhoneInput from 'react-phone-input-2';
import { useSelector , useDispatch } from 'react-redux';
import { auth, provider } from '../firebase'
import { toast, Toaster } from 'react-hot-toast';
import { actionCreators } from '../State';
import OtpInput from 'otp-input-react';
import { useNavigate } from "react-router-dom";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    doc,
} from "firebase/firestore";
import '../Styles/Otp.css'
const db = getFirestore();

function Otp() {
    const dispatch = useDispatch();
    const [otp, setOtp] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const phoneNumber = useSelector(state => state.phone);
    const navigate = useNavigate();
    function onOTPVerify() {
        window.confirmationResult.confirm(otp).then(async (res) => {
            console.log(res.user['phoneNumber']);
            toast.success('OTP verified');
            let document = {
                "phone": res.user['phoneNumber'],
                "submission": false,
            }
            await setDoc(doc(db, "users", res.user['phoneNumber']), document);
            dispatch(actionCreators.setPhoneNumbers(res.user['phoneNumber']));
            console.log("User registered")
            navigate('/');
            // localStorage.setItem('user', 'hello&gmail.com');
        })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='ot_main_container'>
            <div className='signin_main_container'>
                <p className='signin_heading otp-section'>CROOKED LINES</p>
                <div className='signin_content'>
                    <p className='content_heading'>OTP Verification</p>
                    <p className='content_description'>Verify your phone number by entering your <br />OTP code here</p>
                </div>
                <div className='phone_input'>
                    <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autofocus></OtpInput>
                </div>
                <div className='continue'>
                    <button className='continue_button' onClick={onOTPVerify}>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default Otp