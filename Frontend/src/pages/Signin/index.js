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

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          const { empId, name, role } = result["data"];

          // persist the logged in user's information for future use

          sessionStorage["role"] = role;
          sessionStorage["empId"] = empId;
          sessionStorage["name"] = name;
          sessionStorage["loginStatus"] = 1;

          if (role == "admin") {
            navigate("/admin");
          } else if (role == "accountant") { navigate("/accountant") }
          else if (role == "doctor") {
            navigate("/doctor-home");
          } else if (role == "receptionist") navigate("/receptionist");
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
        Employee's Signin <FaExpeditedssl />
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
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email address
                  <FcFeedback />
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
                  <FcLock />
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div>
                  No account yet? <Link to="/signup">Signup here</Link>
                </div>
                <button onClick={signinUser} className="btn btn-primary">
                  Signin <FaSignInAlt />
                </button>
                <div>
                  <Link to="/forgotPassword">forgot password</Link>
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

export default Signin;
