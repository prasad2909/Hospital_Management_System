import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../config";
import { toast } from "react-toastify";

const AddPatient = () => {
  const [billAmount, setbillAmount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGr, setbloodGr] = useState("");
  const [dateOfAdmission, setdateOfAdmission] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [dateOfRelease, setdateOfRelease] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [doctorId, setdoctorId] = useState("");
  const [patientProblem, setPatientProblem] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [presId, setPresId] = useState("");
  const [wardBedId, setWardBedId] = useState("");
  const [prescription, setPrescription] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const role = "doctor";

  console.log(selectedDoctor);
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  // const AllDoctors = () => {
  //   debugger;
  //   const body = {
  //     role,
  //   };
  //   console.log(body.role);
  //   const url = `${URL}/user/getalldoctors`;

  //   axios.get(url, body).then((response) => {
  //     const result = response.data;
  //     console.log(result["data"]);
  //     if (result["status"] == "success") {
  //       toast.success("added new Employee..");
  //       setDoctor(result["data"]);
  //       console.log(doctor);
  //     } else {
  //       toast.error(result["error"]);
  //     }
  //   });
  // };

  // const DoctorId = () => {
  //   const url = `${URL}/user/getdoctorid`;
  //   const body = {
  //     selectedDoctor,
  //   };
  //   axios.get(url, body).then((response) => {
  //     const result = response.data;
  //     console.log(result["data"]);
  //     if (result["status"] == "success") {
  //       toast.success("added new Employee..");
  //       setSelectedDoctor(result["data"]);
  //       console.log(selectedDoctor);
  //     } else {
  //       toast.error(result["error"]);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   AllDoctors();
  //   console.log("getting called");
  // }, []);

  const save = () => {
    if (billAmount.length == 0) {
      toast.warning("please enter billAmount");
    } else if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else if (bloodGr.length == 0) {
      toast.warning("please enter question");
    } else if (dateOfAdmission.length == 0) {
      toast.warning("please enter security answer");
    } else if (name.length == 0) {
      toast.warning("please enter name");
    } else if (dob.length == 0) {
      toast.warning("please enter dob");
    } 
    else if (phoneNo.length == 0) {
      toast.warning("please enter phone number");
    } else if (doctorId.length == 0) {
      toast.warning("please enter doctorId");
    } else if (patientProblem.length == 0) {
      toast.warning("please enter patientProblem");
    } else if (paymentStatus.length == 0) {
      toast.warning("please enter paymentStatus");
    } else if (presId.length == 0) {
      toast.warning("please enter prescriptionId");
    } else if (wardBedId.length == 0) {
      toast.warning("please enter wardBedId");
    } else {
      const body = {
        billAmount,
        email,
        password,
        bloodGr,
        dateOfAdmission,
        name,
        dob,
        dateOfRelease,
        phoneNo,
        doctorId,
        patientProblem,
        paymentStatus,
        presId,
        wardBedId,
      };

      const url = `${URL}/patient/postpatient`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result["data"]);
        if (result["status"] == "success") {
          toast.success("added new Employee..");
          navigate("/receptionist");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />

      <h2 style={{ textAlign: "center", fontFamily: "serif" }}>
        Fill Up Patient Details
      </h2>

      <div className="form">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div
              className="col-lg-12"
              style={{ width: 600, fontSize: 25, fontFamily: "serif" }}
            >
              <br />
              <table>
                <tbody>
                  <tr>
                    <td className="col-md-6">
                      <label htmlFor="" className="label-control">
                        Name
                      </label>
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Email
                      </label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="abc@gmail.com"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Password
                      </label>
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        bloodGr
                      </label>
                      <input
                        onChange={(e) => {
                          setbloodGr(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Date Of Birth
                      </label>
                      <input
                        onChange={(e) => {
                          setDob(e.target.value);
                        }}
                        type="date"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Date Of Addmission
                      </label>
                      <input
                        onChange={(e) => {
                          setdateOfAdmission(e.target.value);
                        }}
                        type="date"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Date Of Release
                      </label>
                      <input
                        onChange={(e) => {
                          setdateOfRelease(e.target.value);
                        }}
                        type="date"
                        className="form-control"
                      />
                    </td>
                    <td>
                      <pre> </pre>
                    </td>
                    <td className="col-md-6">
                      <label htmlFor="" className="label-control">
                        Phone Number
                      </label>
                      <input
                        onChange={(e) => {
                          setphoneNo(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        doctorId
                      </label>
                      <input
                        onChange={(e) => {
                          setdoctorId(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      {/* <select className="form-control" defaultValue={doctor}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setSelectedDoctor(e.target.value)
                            }}>
                            {doctor.map((e) => {
                                console.log(e)
                                return <option value={e}>{e}</option>;
                            })}
                        </select> */}
                      <label htmlFor="" className="label-control">
                        Patient's Problem
                      </label>
                      <input
                        onChange={(e) => {
                          setPatientProblem(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Payment Status
                      </label>
                      <input
                        onChange={(e) => {
                          setPaymentStatus(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Prescription Id
                      </label>
                      <input
                        onChange={(e) => {
                          setPresId(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        Ward Id
                      </label>
                      <input
                        onChange={(e) => {
                          setWardBedId(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />

                      <label htmlFor="" className="label-control">
                        billAmount
                      </label>
                      <input
                        onChange={(e) => {
                          setbillAmount(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr></hr>
              <button
                onClick={save}
                className="btn btn-success btn-lg btn-block"
              >
                Save
              </button>
              <Link to="/receptionist" className="btn btn-danger float-end">
                Cancel
              </Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
