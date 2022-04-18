import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../config";
import img1 from "../../assets/minimalist-white-mug-2a8cxwwyi2mojija.jpg";
import SlidingImage from "../../components/SlidingImage/slidingImage";
import {
  FaHeart,
  FaAmazon,
  FaPaste,
  FaNotesMedical,
  FaMedkit,
  FaLock,
  FaLocationArrow,
  FaLayerGroup,
  FaLaptopMedical,
  FaHospitalUser,
  FaFileAlt,
  FaBackspace,
  FaArrowLeft,
  FaVoicemail,
  FaExpeditedssl,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { FcFeedback, FcLock } from "react-icons/fc";
import { useEffect } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  //to show security question input
  const [securityQuestionFlag, setSecurityQuestionFlag] = useState(false);
  const [securityAnswerFlag, setSecurityAnswerFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);
  //to show wrong  email
  const [invalidEmail, setInvalidEmail] = useState(false);
  //function to get check email is vailid
  const IsEmailValid = () => {
    const url = `${URL}/user/emailCheck`;
    const body = {
      email,
    };
    axios.post(url, body).then((r) => {
      const result = r.data;
      console.log(result);
      if (result.status == "success") {
        if (result.data == true) {
          setSecurityQuestionFlag(true);
          toast.success("email matched with data");
          
        } else {
          setInvalidEmail(true);
          toast.warning("invalid email")
        }
      }
    });
  };
  //to validate security question
  const IsQuestionValid = () => {
    const url = `${URL}/user/questionCheck`;
    const body = {
      email,
      securityQuestion,
    };
    axios.post(url, body).then((r) => {
      const result = r.data;
      console.log(result);
      if (result.status == "success") {
        if (result.data == true) {
          setSecurityAnswerFlag(true);
          toast.success("email matched with data");
          //to delete
          console.log("security questin flag " + securityQuestionFlag);
        } else {
          setSecurityQuestionFlag(false);
          toast.warning("invalid question")
        }
      }
    });
  };
  //to validate answer
  const IsAnswerValid = () => {
    const url = `${URL}/user/answerCheck`;
    const body = {
      email,
      securityQuestion,
      securityAnswer,
    };
    axios.post(url, body).then((r) => {
      const result = r.data;
      console.log(result);
      if (result.status == "success") {
        if (result.data == true) {
          setPasswordFlag(true);
          toast.success("email matched with data");
          //to delete
          console.log("security questin flag " + securityQuestionFlag);
        } else {
          console.log(`in the else part...`)
          setSecurityQuestionFlag(false);
          setSecurityAnswerFlag(false);
          toast.warning("invalid security answer");
        }
      }
    });
  };
  //to update password
  const UpdatePassword = () => {
    const url = `${URL}/user/updatePassword`;
    const body = {
      email,
      securityQuestion,
      securityAnswer,
      password,
    };
    axios.post(url, body).then((r) => {
      const result = r.data;
      console.log(result);
      if (result.status == "success") {
        if (result.data == "UPDATED") {
          toast.success("password changed success");
          navigate("/signin");
          
        } else {
          if (result.data == "FAILED") setSecurityQuestionFlag(false);
          securityAnswerFlag(false);
          setPasswordFlag(false);
          toast.warning("password not updated");
        }
      }
    });
  };

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Welcome to the application");

          // get the data sent by server
          const { role } = result["data"];

          // persist the logged in user's information for future use

          sessionStorage["role"] = role;

          if (role == "admin") {
            const { emp_id, name } = result["data"];
            // persist the logged in user's information for future use
            sessionStorage["id"] = emp_id;
            sessionStorage["name"] = name;
            sessionStorage["loginStatus"] = 1;

            navigate("/admin");
          }

          if (role == "Doctor") {
            const { emp_id, name } = result["data"];
            // persist the logged in user's information for future use
            sessionStorage["emp_id"] = emp_id;
            sessionStorage["name"] = name;
            sessionStorage["loginStatus"] = 1;

            navigate("/doctor-home");
          }
          // navigate to home component
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  return (
    <div>
      <SlidingImage />
      <h1 className="title">
        Reset Employee's Password
        <FaExpeditedssl />
      </h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div
            className="card"
            style={{
           
              paddingLeft: "10px",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            <div className="form">
              {invalidEmail ? (
                <div style={{ color: "red" }}>invalid email</div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email address{" "}
                  <div style={{ color: "green" }} onClick={IsEmailValid}>
                    click to validate
                  </div>
                  <FcFeedback />
                </label>
                <input
                  onFocus={() => {
                    setInvalidEmail(false);
                  }}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              {/* on validation this section will be shown */}
              {securityQuestionFlag && (
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Security Question
                    <div style={{ color: "green" }} onClick={IsQuestionValid}>
                      click to validate
                    </div>
                  </label>
                  <input
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSecurityQuestion(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
              )}
              {securityAnswerFlag && (
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Security Answer{" "}
                    <div style={{ color: "green" }} onClick={IsAnswerValid}>
                      is answer valid
                    </div>
                  </label>
                  <input
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSecurityAnswer(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
              )}
              {passwordFlag && (
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Password
                    <FcLock />{" "}
                    
                  </label>
                  <div style={{ color: "green" }}>
                      <Link onClick={UpdatePassword} to='/signin'>update</Link>
                    </div>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                  />
                   
                </div>
              )}

              <div className="mb-3">
                {/* <div>
                  No account yet? <Link to="/signup">Signup here</Link>
                </div> */}

                <div className="d-flex justify-content-between">
               

                  <div>
                    <Link style={{ color: "blue" }} to="/signin">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div></div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ForgetPassword;
