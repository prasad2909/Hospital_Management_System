import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import {
    FaHospital, FaPaste, FaNotesMedical, FaMedkit, FaLock, FaLocationArrow, FaLayerGroup, FaLaptopMedical,
    FaHospitalUser, FaFileAlt, FaBackspace, FaArrowLeft, FaArrowCircleLeft,FaClipboard, FaRegEdit, FaRupeeSign
} from "react-icons/fa"



const PatientsDetails = () => {
  const { state } = useLocation()
  const { pid,presid,name} = state
  const navigate = useNavigate()
  console.log("+++++++++++")
  console.log(presid)
   console.log("+++++++++++")
  const [patient, setPatient] = useState([])
  const [prescription, setPrescription] = useState([])
  const [prescriptionId,setPrescriptionId]=useState('')
  const loadPatientsDetails = () => {
    const url = `${URL}/doctor/get/${pid}`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setPatient(result['data'])
        console.log(result.data)
        // if(prescriptionId != "0")
        // setPrescriptionId(result.data.presId)
      }
    })
  }
  //const [prescriptionId,setPrescriptionId]=useState('')

  const loadPrescriptionDetails = () => {
    const url = `${URL}/doctor/getPrescription/${presid}`
    axios.get(url).then((response) => {
      const result = response.data
      console.log(result)
      if (result['status'] == 'success') {
        setPrescription(result['data'])
      }
    })
  }


  useEffect(() => 
  {
    loadPatientsDetails()
    loadPrescriptionDetails()
  }, [])

  return (
    <div className='container'>
      <button className="btn btn-primary" onClick={() => {
        navigate("/doctor-home")
      }}>
         <FaArrowCircleLeft /> Back
      </button>
      <br />
      <div className="row">
        <div className="col">
        </div>
      </div>
      <hr />
      <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 30 }}>
        <thead>
          <tr className="table-info" >
            <th style={{ textAlign: 'center' }} colspan="2" scope="colgroup">
              Patient's Details <FaClipboard/>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <td>Patients id</td>
            <td>{patient.patId}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{patient.name}</td>
          </tr>
          <tr>
            <td>Email id</td>
            <td>{patient.email}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td>{patient.dob}</td>
          </tr>
          <tr>
            <td>Ward Bed Id</td>
            <td>{patient.wardBedId}</td>
          </tr>
          <tr>
            <td>Prescription Id</td>
            <td>{patient.presId}</td>
          </tr>
          <tr>
            <td>Date Of Admission</td>
            <td>{patient.dateOfAdmission}</td>
          </tr>
          <tr>
            <td>Phone no</td>
            <td>{patient.phoneNo}</td>
          </tr>
          <tr>
            <td>Patient Problem</td>
            <td>{patient.patientProblem}</td>
          </tr>
          {patient.presId != "0" && (
            <>
              <tr>
                <td>Prescribed Medicine</td>
                <td>{prescription.medicineName}</td>
              </tr>
              <tr>
                <td>Medicine For Days</td>
                <td>{prescription.noOfDays}</td>
              </tr>
            </>
          )}

        </tbody>
      </table>
      <hr />
      <div className="btn btn-success float-end">
        <button className='btn btn-success' onClick={() => {
          navigate("edit-prescription", 
          { state: { pId: pid, presId:presid, presMed:prescription.medicineName, presNo:prescription.noOfDays} })
        }}>Add/Edit Prescription</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    
  );
}


export default PatientsDetails;