import React, { useState } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { actionCreators } from "../State";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "../Styles/Sign_in.css";
import "react-phone-input-2/lib/style.css";
import Google_logo from "../Assets/google_logo.png";

const db = getFirestore();

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setValue] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(async (data) => {
        setValue(data.user.email);
        localStorage.setItem("user", data.user.email);
        let document = {
          email: data.user.email,
          name: data.user.displayName,
          submission: 0,
        };
        let newUser = await getDoc(doc(db, "users", data.user.email));

        if (!newUser.exists())
          await setDoc(doc(db, "users", data.user.email), document);

        dispatch(actionCreators.loginUser(true));
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
        },
        auth
      );
    }
  }
  function onSignup() {
    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      toast.error("Please enter a valid phone number");
    } else {
      onCaptchaVerify();
      const appVerifier = window.recaptchaVerifier;
      const formatPh = "+" + phone;
      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          toast.success("OTP sent to your phone number");
          navigate("/otp");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      {loading ? (
        <div>
          <TailSpin
            height="80"
            width="80"
            color="#4B45A3"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
            }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="signin_main_container">
            <p className="signin_heading">CROOKED LINES</p>
            <div className="signin_content">
              <p className="content_heading">Login</p>
              <p className="content_description">
                Continue with Google or Login through OTP
              </p>
            </div>
            <div className="google_main_container">
              <div className="google_container">
                <img
                  className="google_image"
                  src={Google_logo}
                  alt="google_logo"
                />
                <p
                  style={{ cursor: "pointer" }}
                  className="google_text"
                  onClick={handleClick}
                >
                  Sign Up with Google
                </p>
              </div>
            </div>
            <div>
              <div class="separator">or</div>
            </div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            <div className="phone_input">
              <PhoneInput country={"in"} value={phone} onChange={setPhone} />
            </div>
            <div className="continue">
              <button className="continue_button" onClick={onSignup}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
