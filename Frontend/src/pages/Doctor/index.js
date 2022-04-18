import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../../../../Updated_code/Frontend/src/config'
import Navbar from '../../../../../Updated_code/Frontend/src/components/Navbar/Navbar'
import { FaHospital,FaPaste,FaNotesMedical,FaMedkit,FaLock,FaLocationArrow,FaLayerGroup,FaLaptopMedical,
FaHospitalUser,FaFileAlt,FaBackspace,FaArrowLeft,FaRegUserCircle,FaUser,FaUserCircle,FaUserAlt,FaSignOutAlt,FaClipboard,F } from "react-icons/fa"
import {FcFeedback} from 'react-icons/fc'
import { toast } from 'react-toastify'

const PatientsDetails = () => {
  const { empId, name } = sessionStorage
  const navigate = useNavigate()
  const [patient, setPatient] = useState([])
  const [searchName, setSearchName] = useState("");
  
  const loadAllPatientsDetails = () => {
    const url = `${URL}/doctor/getDoctorId/${empId}`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        console.log("We have got the result:" + result['data']);
        sessionStorage['doctor_Id'] = result['data']
        const { doctor_Id } = sessionStorage
        const url = `${URL}/doctor/getAll/${doctor_Id}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            console.log(result['data']);
            setPatient(result['data'])
          }

        })
      }
    })
  }
  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('loginStatus')
    // navigate to sign in component
    navigate('/signin')
  }

  const renderPatients = (patient, index) => {
    return (
      <tr key={index}>
        <td>{patient.patId}</td>
        <td>{patient.name}</td>
        <td>{patient.patientProblem}</td>
      </tr>
    )
  }
  //search functionality
  const searchEmployeeByName = () =>
  {
    //debugger;
    const url = `${URL}/patient/getbyname/${searchName}`
    console.log(url);
    axios.get(url).then((response)=>
    {
      const result = response.data;
      console.log("-----------------")
      console.log(result)
      console.log("-----------------")
      if (result["status"] == "success") {
        console.log(result["data"]);
        navigate("patients-details", { state: { pid: result["data"].patId ,presid:result["data"].presId} })

      } else {
        toast.error(result["error"]);
      }
    })
  }

  useEffect(() => {
    loadAllPatientsDetails()
    
  }, [])

  return (
    <>
      <br />
      <div className="row">
        <div className="col">
          <h1>All Patients List</h1>

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

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col">
          --------------------------
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => {
                setSearchName(e.target.value);
                console.log(searchName)

              }}
              className="form-control rounded"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            
            { 
              patient.filter((e)=>
              {
                console.log(e)
                if (searchName == "")
                {
                  return e
                }else if (e.name.toLowerCase().includes(searchName.toLowerCase())) 
                {
                  console.log(e)
                  return e
                }
              })
              .map((e,key)=>
              {
                        <div key={key}>
                        console.log(e.name)
                        </div>
              })
            }
            
            <button
              type="button"
              onClick={searchEmployeeByName}
              className="btn btn-outline-primary"
            >
              search
            </button>
          </div>
          --------------------------
        </div>
      </div>
      <br /><br />
      <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 30 }}>
        <thead class="table table-bordered">
          <tr className="table-info">
            <th style={{ textAlign: 'center' }}>Patient Id</th>
            <th style={{ textAlign: 'center' }}>Patient Name</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((e, i) => {
            return (<tr key={i}>
              <td align="center">{e.patId}</td>
              <td align="center">{e.name}</td>
              <td><button class="btn btn-info" style={{display:'block',margin:'auto'}}
                onClick={() => {
                  navigate("patients-details", { state: { pid: e.patId ,presid:e.presId} })
                }}>View Details</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  )
}


export default PatientsDetails;