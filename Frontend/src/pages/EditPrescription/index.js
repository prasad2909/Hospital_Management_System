import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import {
    FaHospital, FaPaste, FaNotesMedical, FaMedkit, FaLock, FaLocationArrow, FaLayerGroup, FaLaptopMedical,
    FaHospitalUser, FaFileAlt, FaBackspace, FaArrowLeft, FaArrowCircleLeft,FaClipboard, FaRegEdit, FaRupeeSign
} from "react-icons/fa"


const EditPatientsPrescription = () => {
    const { state } = useLocation()
    const { pId, presId, presMed, presNo } = state
    console.log(state)
    const [prescription, setPrescription] = useState([])
    const [patient, setPatient] = useState([])
    const [noOfDays, setNoOfDays] = useState('')
    const [medicineName, setMedicineName] = useState('')
    const navigate = useNavigate()


    const noOfDaysChange = (e) => {
        setNoOfDays(e.target.value)
    }

    const fetchData = async () => {
        const url = `${URL}/doctor/getAllMedicine`
        await axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log("------")
                console.log(result['data'])
                console.log("------")
                setPrescription(result['data'])
            }
        })
    }

    const addPrescription = () => {
        const body = {
            presId,
            medicineName: medicineName,
            noOfDays,
        }

        const url = `${URL}/doctor/addNewPrescription/${pId}`
        console.log(pId)
        axios.post(url, body).then((response) => {
            console.log(body)

            const result = response.data
            if (result['status'] == 'success') {
                console.log("------")
                console.log(result['data'])
                console.log("------")
                toast.success('added new Prescription..')
                loadPatientsDetails()

                console.log(presId)
                load()
            } else {
                toast.success('Not added new Prescription..')
            }

        })
    }
    const loadPatientsDetails = () => {
        const url = `${URL}/doctor/get/${pId}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setPatient(result['data'])
                console.log(result)

            }
        })
    }
    const load = () => {
        console.log(patient.presId)
        //navigate("/doctor-home/patients-details", { state: { pid: pId, presid: patient.presId} })
        navigate("/doctor-home")

    }

    useEffect(() => {
        fetchData()
        setMedicineName(presMed)
        setNoOfDays(presNo)
    }, [])
    return (
        <>
            <br /><br />
            <button className="btn btn-primary" onClick={() => {
                navigate("/doctor-home/patients-details", { state: { pid: pId, presid: presId } })
            }}>
                <FaArrowCircleLeft /> Back
            </button>
            <br />
            <hr />
            <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 30 }}>
                <thead>
                    <tr className="table-info" >
                        <th style={{ textAlign: 'center' }} colspan="2" scope="colgroup">
                            Patient's Prescription <FaRegEdit />
                        </th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    <tr>
                        <td>Medicine Name</td>
                        <td><select className="form-control" value={medicineName}
                            onChange={(e) => {
                                setMedicineName(e.target.value)
                            }}>
                            {prescription.map((e, key) => {
                                return <option key={key} value={e.medicineName}>{e.medicineName}</option>;
                            })}
                        </select></td>
                        {/* <td>
                            <input className="form-control" type="text" onChange={(e) => {
                                                             setSelectedValue(String(e.target.value) )
                                                             }}></input>
                        </td> */}
                    </tr>
                    <tr>
                        <td>No of Days</td>
                        <td><input className="form-control" type='number' defaultValue={noOfDays} onChange={noOfDaysChange}></input></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div className="btn btn-success float-end">
                <button className='btn btn-success' onClick={addPrescription} >Add/Edit</button>
            </div>
            {/* <button onClick={load}>print</button> */}
        </>
    )
}

export default EditPatientsPrescription







