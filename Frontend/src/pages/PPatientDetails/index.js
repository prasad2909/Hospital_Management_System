import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { FaHospital,FaPaste,FaNotesMedical,FaMedkit,FaLock,FaLocationArrow,FaLayerGroup,FaLaptopMedical,
FaHospitalUser,FaFileAlt,FaBackspace,FaArrowLeft,FaRegUserCircle,FaUser,FaUserCircle,FaUserAlt,FaSignOutAlt,FaClipboard,F } from "react-icons/fa"
import {FcFeedback} from 'react-icons/fc'


const PatientDetails = () => {
  const [patient, setPatient] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const navigate = useNavigate()
  //const { state } = useLocation()
  const { name } = sessionStorage

  const loadPatientDetails = () => {

    const { patId } = sessionStorage
    const { doctorId } = sessionStorage

    const url = `${URL}/patient/${patId}`        //to get the patient details 
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        console.log(result['data']);
        setPatient(result['data'])

        const url = `${URL}/patient/doctorName/${doctorId}`  //to get the doctor name 
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            console.log(result['data']);
            setDoctorName(result['data'])
          }
        })
      }
    })
  }
  const logoutUser = () => {
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('patId')
    sessionStorage.removeItem('doctorId')
    sessionStorage.removeItem('wardBedId')
    sessionStorage.removeItem('presId')
    navigate('/signin')
  }

  useEffect(() => {
    loadPatientDetails()
  }, [])


  return (
    <div>
      <div>
        <div className="row">
          <div className="col">
            <h1>Patients</h1>
          </div>
          <div className="col">
            <div className="float-end">
              <div className="btn-group " role="group">

                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-success dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{borderRadius:'7px'}}
                >
             <FaUserCircle/> Welcome {name} 
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li>
                    <button onClick={logoutUser} className="dropdown-item">
                      Logout <FaSignOutAlt/>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 25 }}>
          <thead>
            <tr className="table-info" >
              <th style={{ textAlign: 'center' }} colspan="2" scope="colgroup">
                Patient Details <FaClipboard/>
              </th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>Patient id</td>
              <td>{patient.patId}</td>
            </tr>
            <tr>
              <td>Patient's Name</td>
              <td>{patient.name}</td>
            </tr>
            <tr>
              <td>Date of Admission</td>
              <td>{patient.dateOfAdmission}</td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td>{patient.bloodGr}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{patient.dob}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{patient.phoneNo}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{patient.email}</td>
            </tr>
            <tr>
              <td>Patient's Problem</td>
              <td>{patient.patientProblem}</td>
            </tr>
            <tr>
              <td>Doctor Allotted</td>
              <td>{doctorName}</td>
            </tr>
            <tr>
              <td>Ward-Bed Allocated</td>
              <td>{patient.wardBedId}</td>
            </tr>
            <tr>
              <td>Payment Status</td>
              <td>{patient.paymentStatus}</td>
            </tr>
            {patient.paymentStatus == "paid" &&
              <tr>
                <td>Bill Amount</td>
                <td>{patient.billAmount}</td>
              </tr>}
          </tbody>
        </table>

        <button className="btn btn-success float-end"
          onClick={() => {
            navigate("bill-details") //{state: {id : state.patient.presId}}
          }}>
          Bill Details
        </button>
      </div>
    </div>
  )
}
export default PatientDetails;

