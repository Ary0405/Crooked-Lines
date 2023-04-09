import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { actionCreators } from '../State';
import OtpInput from 'otp-input-react';
import { useNavigate } from "react-router-dom";
import {
    getFirestore,
    setDoc,
    doc,
    getDoc,
} from "firebase/firestore";
import '../Styles/Otp.css'
const db = getFirestore();

function Otp() {
    const dispatch = useDispatch();
    const [otp, setOtp] = React.useState('');
    const phoneNumber = useSelector(state => state.phone);
    const navigate = useNavigate();
    function onOTPVerify() {
        window.confirmationResult.confirm(otp).then(async (res) => {
            toast.success('OTP verified');
            localStorage.setItem('user', res.user['phoneNumber']);
            let document = {
                "phone": res.user['phoneNumber'],
                "submission": 0,
            }
            let newUser = await getDoc(doc(db, "users", res.user['phoneNumber']));
            if (!newUser.exists()) {
                await setDoc(doc(db, "users", res.user['phoneNumber']), document);
            }    
            dispatch(actionCreators.setPhoneNumbers(res.user['phoneNumber']));
            navigate('/');
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