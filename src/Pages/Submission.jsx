import React, { useEffect, useState } from "react";
import "../Styles/Submission.css";
import Sub from "../Assets/sub.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { UserAuth } from "../Context/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import Exclaimation from "../Assets/exclaimation.png";
const db = getFirestore();

function Submission() {
  const userRef = collection(db, "users");
  const [name, setName] = useState("");
  const [phoneField, setPhoneField] = useState(false);
  const [emailField, setEmailField] = useState(false);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [percent, setPercent] = useState(0);
  const [school_state, setSchoolState] = useState("");
  const [school_city, setSchoolCity] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [submission, setSubmission] = React.useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = UserAuth();
  useEffect(() => {
    if (user.email) {
      setEmail(user.email);
      setEmailField(true);
    }
    if (user.phoneNumber) {
      setNumber(user.phoneNumber);
      setPhoneField(true);
    }
    document.getElementById("file_input").addEventListener("change", (e) => {
      const fileName = e.target.files[0].name;
      document.querySelector(".file_name").innerHTML = fileName;
    });
    document
      .getElementById("submission_file_input")
      .addEventListener("change", (e) => {
        const fileName = e.target.files[0].name;
        document.querySelector(".submission_file_name").innerHTML = fileName;
      });
    getDocs(userRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === email || doc.id === number) {
          const data = doc.data();
          if (data.submission > 0) {
            navigate("/submission-complete");
          }
        }
      });
    });
  });
  const handleSubmit = async () => {
    let urls = [];
    if (
      name === "" ||
      email === "" ||
      dob === "" ||
      number === "" ||
      school === "" ||
      address === "" ||
      state === "" ||
      city === "" ||
      school_state === "" ||
      school_city === ""
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(dob);
      if (!aadhar || !submission) {
        alert("Please upload files");
      } else {
        setLoading(true);
        const aadharRef = ref(storage, `/aadhar/${aadhar.name}`);
        const submissionRef = ref(storage, `/submission/${submission.name}`);
        const uploadAadharTask = uploadBytesResumable(aadharRef, aadhar);
        const uploadSubmissionTask = uploadBytesResumable(
          submissionRef,
          submission
        );
        let aadharUrl;
        let userRef;
        if (emailField) {
          userRef = doc(db, "users", user.email);
        } else if (phoneField) {
          userRef = doc(db, "users", user.phoneNumber);
        }
        uploadAadharTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
          },
          (err) => console.log(err),
          async () => {
            await getDownloadURL(uploadAadharTask.snapshot.ref).then(
              async (url) => {
                aadharUrl = url;
                let document = {
                  email: email,
                  name: name,
                  dob: dob,
                  number: number,
                  school: school,
                  address: address,
                  aadhar_url: url,
                  submission: 1,
                  state: state,
                  city: city,
                  school_state: school_state,
                  school_city: school_city,
                };
                await updateDoc(userRef, document);
                urls.push(url);
                console.log(url);
              }
            );
          }
        );
        let submissionUrl;
        uploadSubmissionTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
          },
          (err) => console.log(err),
          async () => {
            await getDownloadURL(uploadSubmissionTask.snapshot.ref).then(
              async (url) => {
                let document = {
                  submission_url: url,
                };
                await updateDoc(userRef, document);
                console.log(url);
                alert("Form submitted successfully");
                setLoading(false);
                window.location.reload();
              }
            );
          }
        );
        Promise.all(urls).then((downloadUrls) => {
          console.log(downloadUrls);
        });
        console.log(name);
      }
      // navigate("/submission-complete");
    }
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TailSpin
            height="80"
            width="80"
            color="#4B45A3"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              display: "grid",
              placeItems: "center",
            //   height: "100vh",
            }}
            wrapperClass=""
            visible={true}
          />
          <div className="loading_text">Your Form is being submitted..</div>
          <div
            style={{ display: "none" }}
            className="submission_main_container"
          >
            <div className="submission_form_container">
              <div className="submission_form_group">
                <label className="submission_label">Name</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">Email</label>
                {!emailField ? (
                  <input
                    value={email}
                    className="submission_input"
                    type={"text"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <input
                    value={email}
                    className="submission_input"
                    type={"text"}
                    style={{ color: "grey" }}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={true}
                  />
                )}
              </div>
              <div className="submission_form_group">
                <label className="submission_label">School Name</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">School State</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setSchoolState(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">School City</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setSchoolCity(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">DOB</label>
                <input
                  className="submission_input"
                  type={"date"}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">Government ID</label>
                <div className="input_group">
                  <input
                    id="file_input"
                    className="custom-file-input"
                    type={"file"}
                    accept="/image/*"
                    onChange={(e) => setAadhar(e.target.files[0])}
                  />
                  <p className="file_name">Choose File</p>
                </div>
                <div className="warning_box">
                  <img className="exclaimation" src={Exclaimation} alt="" />
                  <p className="warning_text">
                    Upload Government ID in png or pdf format less than 5MB
                  </p>
                </div>
              </div>
              <div className="submission_form_group">
                <label className="submission_label">State</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">City</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">Address</label>
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="submission_form_group">
                <label className="submission_label">Phone Number</label>
                {!phoneField ? (
                  <input
                    className="submission_input"
                    type={"text"}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                ) : (
                  <input
                    value={parseInt(number)}
                    className="submission_input"
                    type={"text"}
                    style={{ color: "grey" }}
                    onChange={(e) => setNumber(e.target.value)}
                    disabled={true}
                  />
                )}
              </div>
              <div className="submission_form_group">
                <label className="submission_label">Upload Submission</label>
                <div className="input_group">
                  <input
                    id="submission_file_input"
                    className="custom-file-input"
                    type={"file"}
                    accept="/image/*"
                    onChange={(e) => setSubmission(e.target.files[0])}
                  />
                  <p className="submission_file_name">Choose File</p>
                </div>
                <div className="warning_box">
                  <img className="exclaimation" src={Exclaimation} alt="" />
                  <p className="warning_text">
                    Submission upto 5mb (docx, pdf)
                  </p>
                </div>
              </div>
              <div className="submit_button">
                <button className="sub_button" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </div>
            </div>
            <div className="submission_image">
              <img className="sub_img" src={Sub} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="submission_main_container">
          <div className="submission_form_container">
            <div className="submission_form_group">
              <label className="submission_label">Name</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">Email</label>
              {!emailField ? (
                <input
                  value={email}
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <input
                  value={email}
                  className="submission_input"
                  type={"text"}
                  style={{ color: "grey" }}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={true}
                />
              )}
            </div>
            <div className="submission_form_group">
              <label className="submission_label">School Name</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">School State</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setSchoolState(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">School City</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setSchoolCity(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">DOB</label>
              <input
                className="submission_input"
                type={"date"}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">Government ID</label>
              <div className="input_group">
                <input
                  id="file_input"
                  className="custom-file-input"
                  type={"file"}
                  accept="/image/*"
                  onChange={(e) => setAadhar(e.target.files[0])}
                />
                <p className="file_name">Choose File</p>
              </div>
              <div className="warning_box">
                <img className="exclaimation" src={Exclaimation} alt="" />
                <p className="warning_text">
                  Upload Government ID in png or pdf format less than 5MB
                </p>
              </div>
            </div>
            <div className="submission_form_group">
              <label className="submission_label">State</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">City</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">Address</label>
              <input
                className="submission_input"
                type={"text"}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="submission_form_group">
              <label className="submission_label">Phone Number</label>
              {!phoneField ? (
                <input
                  className="submission_input"
                  type={"text"}
                  onChange={(e) => setNumber(e.target.value)}
                />
              ) : (
                <input
                  value={parseInt(number)}
                  className="submission_input"
                  type={"text"}
                  style={{ color: "grey" }}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled={true}
                />
              )}
            </div>
            <div className="submission_form_group">
              <label className="submission_label">Upload Submission</label>
              <div className="input_group">
                <input
                  id="submission_file_input"
                  className="custom-file-input"
                  type={"file"}
                  accept="/image/*"
                  onChange={(e) => setSubmission(e.target.files[0])}
                />
                <p className="submission_file_name">Choose File</p>
              </div>
              <div className="warning_box">
                <img className="exclaimation" src={Exclaimation} alt="" />
                <p className="warning_text">Submission upto 5mb (docx, pdf)</p>
              </div>
            </div>
            <div className="submit_button">
              <button className="sub_button" onClick={() => handleSubmit()}>
                Submit
              </button>
            </div>
          </div>
          <div className="submission_image">
            <img className="sub_img" src={Sub} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Submission;
