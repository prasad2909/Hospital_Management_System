import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import {
    FaHospital, FaPaste, FaNotesMedical, FaMedkit, FaLock, FaLocationArrow, FaLayerGroup, FaLaptopMedical,
    FaHospitalUser, FaFileAlt, FaBackspace, FaArrowLeft, FaArrowCircleLeft, FaRegEdit, FaRupeeSign
} from "react-icons/fa"

const BillDetails = () => {
    const [pres, setPres] = useState([])
    const [doctorCharges, setDoctorCharges] = useState('')
    const [medicineCharges, setMedicineCharges] = useState('')
    const [dateDiff, setDateDiff] = useState('')
    const [wardCharges, setWardCharges] = useState('')

    const navigate = useNavigate()
    const { presId } = sessionStorage
    const { doctorId } = sessionStorage
    const { patId } = sessionStorage
    const { wardBedId } = sessionStorage

    const loadPrescriptionDetails = () => {
        const url = `${URL}/patient/getPres/${presId}`        //to get the prescribed medicines
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            setPres(result.data)
            // if (response['status'] == 'success') {
            //  console.log(result['data']);
            //   setPres(result)
            // }
        })
    }


    const loadDoctorChargesDetails = async () => {
        const url = `${URL}/patient/doctorCharges/${doctorId}`   //to get the doctor charges
        await axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log(result['data']);
                setDoctorCharges(result['data'])
            }
        })
    }

    const loadMedicineChargesDetails = async () => {
        const url = `${URL}/patient/medicineCharges/${presId}`   //to get the medicine charges
        await axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log(result['data']);
                setMedicineCharges(result['data'])
            }
        })
    }

    const loadDateDiffDetails = async () => {
        const url = `${URL}/patient/dateDiff/${patId}`        //for date difference between admission and release
        await axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log(result['data']);
                setDateDiff(result['data'])
            }
        })
    }

    const loadWardChargesDetails = async () => {
        const url = `${URL}/patient/wardCharges/${wardBedId}`  //for ward bed charges
        await axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log(result['data']);
                setWardCharges(result['data'])
            }
        })
    }

    useEffect(() => {
        loadPrescriptionDetails()
        loadDoctorChargesDetails()
        loadMedicineChargesDetails()
        loadDateDiffDetails()
        loadWardChargesDetails()
    }, [])

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => {
                    navigate("/patient/patient-details")
                }}>
                    <FaArrowCircleLeft /> Back
                </button>
                <br />
                <br />
            </div>
            <div className="row">
                <div className="col">
                    <h1>  Bill Details </h1>
                </div>
            </div>
            <div>
                <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 20 }}>
                    <thead>
                        <tr className="table-info" >
                            <th style={{ textAlign: 'center' }} colspan="3" scope="colgroup">
                                Invoice <FaRupeeSign />
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        <tr>
                            <th>Sr.No</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Doctor Fees</td>
                            <td>₹{doctorCharges}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Bed Charges For {dateDiff} days</td>
                            <td>₹{wardCharges * dateDiff}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Medicine Charges</td>
                            <td>₹{medicineCharges}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>₹{medicineCharges + doctorCharges + wardCharges * dateDiff}</td>
                        </tr>
                    </tbody>
                </table>
                <br /><br />
                <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 20 }}>
                    <thead>
                        <tr className="table-info" >
                            <th style={{ textAlign: 'center' }} colspan="3" scope="colgroup">
                                Prescription <FaRegEdit />
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        <tr>
                            <th>Sr.No</th>
                            <th>Medicine name</th>
                            <th>No of days</th>
                        </tr>
                        {pres.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td >{e.medicineName}</td>
                                <td >{e.noOfDays}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <br />
            </div>
        </div>
    )
}

export default BillDetails;



