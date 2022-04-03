import { useLocation,useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'

const PatientDetails=()=>
{
    const { state } = useLocation()
    console.log(state);
    const [patient,setpatient]=useState('')
    const navigate = useNavigate()
    const {name} = sessionStorage
    
    const loadPatientDetails = () => {
        const { id } = state
        const url = `${URL}/patient/getpatientid/${id}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
              console.log(result['data']);
            setpatient(result['data'])
          }
        })
      }
    
      useEffect(() => {
        loadPatientDetails()
      }, [])
    
      sessionStorage['name'] = name
//debugger;

    return(
      <div>
      <div>
        <br/><br/>
        <button className="btn btn-primary" onClick={()=>
          {
            navigate("/receptionist")
          }}>
          Back  
        </button>
        <br/><br/>
        <table className="table table-bordered" style={{fontFamily:"serif",fontSize:20}}>
          <thead>
            <tr className="table-info" >
            <th style={{textAlign:'center'}} colspan="2" scope="colgroup">
              Patient Details
            </th>
            </tr>
          </thead>
          <tbody style={{textAlign:"center"}}>
            <tr>
              <td>patient id</td>
              <td>{patient.patId}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{patient.name}</td>
            </tr>
            <tr>
              <td>Patient Blood Group</td>
              <td>{patient.bloodGr}</td>
            </tr>
            <tr>
              <td>Email id</td>
              <td>{patient.email}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{patient.phoneNo}</td>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <td>{patient.dob}</td>
            </tr>
            <tr>
              <td>Date Of Admission</td>
              <td>{patient.dateOfAdmission}</td>
            </tr>
            <tr>
              <td>Date Of Release</td>
              <td>{patient.dateOfRelease}</td>
            </tr>
            <tr>
              <td>Doctor Id</td>
              <td>{patient.doctorId}</td>
            </tr>
            
            <tr>
              <td>Patient Problem</td>
              <td>{patient.patientProblem}</td>
            </tr>
            <tr>
              <td>Patient Prescription Id</td>
              <td>{patient.presId}</td>
            </tr>
            <tr>
              <td>Patient Ward Bed Id</td>
              <td>{patient.wardBedId}</td>
            </tr>
            <tr>
              <td>Bill Amount</td>
              <td>{patient.billAmount}</td>
            </tr>
            <tr>
              <td>Payment Status</td>
              <td>{patient.paymentStatus}</td>
            </tr>
            

          </tbody>
        </table>
        <br/>
        <button className="btn btn-danger"
        onClick={()=>
          {
            
            const { id } = state
            const url = `${URL}/patient/deletepatient/${id}`
            axios.delete(url).then((response) => 
            {
              const result = response.data
              if (result['status'] == 'success') 
              {
                  console.log(result['data']);
                  navigate("/receptionist")
              }
            })
          }}>
          Delete patient
        </button>
        <button className="btn btn-success float-end"
        onClick={()=>
          {
            navigate("edit-patient", {state: {patient : patient}})
          }}>
          Edit patient Details
        </button>
        </div>
        <br /><br /><br /><br /><br /> <br /><br /><br />
        </div>
    )
}



export default PatientDetails;