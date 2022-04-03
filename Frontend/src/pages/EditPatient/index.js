import { useLocation,useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'

const EditPatient=()=>
{ 
    const { state } = useLocation()
    console.log(state)
    const [patId]=useState('')
    const [name,setName] = useState('')
    const [billAmount,setBillAmount] = useState('')
    const [email,setEmail] = useState('')
    const [bloodGr,setBloodGr] = useState('')
    const [dateOfAdmission,setDateOfAdmission] = useState('')
    const [dob,setDob] = useState('')
    const [dateOfRelease,setDateOfRelease] = useState('')
    const [doctorId,setDoctorId] = useState('')
    const [patientProblem,setPatientProblem] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [presId,setPresId] = useState('')
    const [wardBedId,setWardBedId] = useState('')
    const [paymentStatus,setPaymentStatus] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {
        const {patient}=state
        setName(patient.name)
        setEmail(patient.email)
        setDob(patient.dob)
        setBillAmount(patient.billAmount)
        setBloodGr(patient.bloodGr)
        setDateOfAdmission(patient.dateOfAdmission)
        setDateOfRelease(patient.dateOfRelease)
        setDoctorId(patient.doctorId)
        setPatientProblem(patient.patientProblem)
        setPhoneNo(patient.phoneNo)
        setPresId(patient.presId)
        setWardBedId(patient.wardBedId)
        setPaymentStatus(patient.paymentStatus)

    }, [])


    const save = () => {
        if (billAmount.length == 0) {
          toast.warning('please enter role')
        } else if (email.length == 0) {
          toast.warning('please enter email')
        } else if (bloodGr.length == 0) {
            toast.warning('please enter question')
        } else if (dateOfAdmission.length == 0) {
            toast.warning('please enter security answer')
        } else if (name.length == 0) {
            toast.warning('please enter name')
        } else if (dob.length == 0) {
            toast.warning('please enter dob')
        } else if (dateOfRelease.length == 0) {
            toast.warning('please enter hire-date')
        } else if (phoneNo.length == 0) {
            toast.warning('please enter phone number')
        } else if (doctorId.length == 0) {
            toast.warning('please enter salary')
        } else if (patientProblem.length == 0) {
            toast.warning('please enter salary')
        } else if (presId.length == 0) {
            toast.warning('please enter salary')
        } else if (wardBedId.length == 0) {
            toast.warning('please enter salary')
        } else if (paymentStatus.length == 0) {
            toast.warning('please enter salary')
        }
         else {

            const body = {
                name,
                email,
                dob,
                bloodGr,
                dateOfAdmission,
                dateOfRelease,
                phoneNo,
                doctorId,
                patientProblem,
                presId,
                wardBedId,
                paymentStatus,
                billAmount,
            }

            
         
          const url = `${URL}/patient/edit/${state.patient.patId}`
          console.log(`current patId = ` + state.patient.patId)
          axios.put(url, body).then((response) => {
            var result = response.data
            if (result['status'] == 'success') {
              toast.success('added new patient..')
              navigate('/receptionist/patientdetail', {state: {id : state.patient.patId}})
            } else {
              toast.error(result['error'])
            }
          })
        }
      }

    //debugger;

    return(
    <div>
    <div>
        <br/><br/>
        <button className="btn btn-primary" onClick={()=>
        {
            navigate("/receptionist/patientdetail", {state: {id : state.patient.patId}})
        }}>
        Back  
        </button>
        <br/><br/>
        <table className="table table-bordered" style={{fontFamily:"serif",fontSize:30}}>
        <thead>
            <tr className="table-info" >
            <th style={{textAlign:'center'}} colspan="2" scope="colgroup">
            Edit patient Details
            </th>
            </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
            <tr>
            <td>patient Id</td>
            <td>{state.patient.patId}</td>
            </tr>
            <tr>
            <td>Name</td>
            <td><input id="Name" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Email Id</td>
            <td><input id="email" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Patient's Blood Group</td>
            <td><input id="blood group" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={bloodGr}
                onChange={(e) => {
                    setBloodGr(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Date Of Birth</td>
            <td><input id="dob" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={dob}
                onChange={(e) => {
                    setDob(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Date Of Admission</td>
            <td><input id="date of admission" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={dateOfAdmission}
                onChange={(e) => {
                    setDateOfAdmission(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Date Of Release</td>
            <td><input id="date of release" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={dateOfRelease}
                onChange={(e) => {
                    setDateOfRelease(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Phone Number</td>
            <td><input id="phone no" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={phoneNo}
                onChange={(e) => {
                    setPhoneNo(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Doctor Id</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={doctorId}
                onChange={(e) => {
                    setDoctorId(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Patient's Problem</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={patientProblem}
                onChange={(e) => {
                    setPatientProblem(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Prescription Id</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={presId}
                onChange={(e) => {
                    setPresId(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Ward Bed Id</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={wardBedId}
                onChange={(e) => {
                    setWardBedId(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Payment Status</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={paymentStatus}
                onChange={(e) => {
                    setPaymentStatus(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Bill Amount</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={billAmount}
                onChange={(e) => {
                    setBillAmount(e.target.value)
                  }}></input>
            </td>
            </tr>
        </tbody>
        </table>
        <br/>
        <div align="center" class="d-grid gap-2">
        <button className="btn btn-success"
        onClick={save}>
        Save
        </button>
        </div>
        </div>
        </div>
    )
}

export default EditPatient;