import React, { useEffect, useState } from "react";
import "../Styles/Submission.css";
import Sub from "../Assets/sub.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Exclaimation from "../Assets/exclaimation.png";

function Submission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [percent, setPercent] = useState(0);
  const [submission, setSubmission] = React.useState("");
  const navigate = useNavigate();
  const { user } = UserAuth();
  useEffect(() => {
    if (user.email == null) {
      setNumber(user.phoneNumber);
    } else if (user.phoneNumber == null) {
      setEmail(user.email);
    } else {
      setEmail(user.email);
      setNumber(user.phoneNumber);
    }
    document.getElementById("file_input").addEventListener("change", (e) => {
      const fileName = e.target.files[0].name;
      document.querySelector(".file_name").innerHTML = fileName;
    });
  });
  const handleSubmit = () => {
    if (
      name === "" ||
      email === "" ||
      dob === "" ||
      number === "" ||
      school === "" ||
      address === ""
    ) {
      alert("Please fill all the fields");
    } else {
      console.log(dob);
      if (!aadhar) {
        alert("Please upload files");
      } else {
        // const aadharRef = ref(storage, `/aadhar/${aadhar.name}`);
        // const submissionRef = ref(storage, `/submission/${submission.name}`);
        // const uploadAadharTask = uploadBytesResumable(aadharRef, aadhar);
        // const uploadSubmissionTask = uploadBytesResumable(
        //   submissionRef,
        //   submission
        // );
        // uploadAadharTask.on(
        //   "state_changed",
        //   (snapshot) => {
        //     const percent = Math.round(
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //     );
        //     setPercent(percent);
        //   },
        //   (err) => console.log(err),
        //   () => {
        //     getDownloadURL(uploadAadharTask.snapshot.ref).then((url) => {
        //       console.log(url);
        //     });
        //   }
        // );
      }
      alert("Form submitted successfully");
      navigate("/submission-complete");
    }
  };
  return (
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
          {(email === "" )? (
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
              style={{"color" : "grey"}}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
          )}
        </div>
        <div className="submission_form_group">
          <label className="submission_label">School</label>
          <input
            className="submission_input"
            type={"text"}
            onChange={(e) => setSchool(e.target.value)}
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
          <label className="submission_label">Aadhar Card</label>
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
            <img className="exclaimation" src={Exclaimation} />
            <p className="warning_text">
              Upload Aadhar card in png or pdf format less than 5MB
            </p>
          </div>
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
          {(number === "" )? (
            <input
              className="submission_input"
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input
              value={parseInt(number)}
              className="submission_input"
              type={"text"}
              style={{"color" : "grey"}}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
          )}
        </div>
        <div className="submission_form_group">
          <label className="submission_label">Upload Submission</label>
          <div className="input_group">
            <input
              id="file_input"
              className="custom-file-input"
              type={"file"}
              accept="/image/*"
              onChange={(e) => setSubmission(e.target.files[0])}
            />
            <p className="file_name">Choose File</p>
          </div>
          <div className="warning_box">
            <img className="exclaimation" src={Exclaimation} />
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
        <img className="sub_img" src={Sub} />
      </div>
    </div>
  );
}

export default Submission;
