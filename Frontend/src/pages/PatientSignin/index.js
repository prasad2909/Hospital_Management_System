import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { useEffect } from 'react'
import img4 from '../../assets/img4.jpg'
import {
  FaHospital, FaPaste, FaNotesMedical, FaMedkit, FaLock, FaLocationArrow, FaLayerGroup, FaLaptopMedical,
  FaHospitalUser, FaFileAlt, FaBackspace, FaArrowLeft, FaEnvelope, FaExpeditedssl, FaSignInAlt, FaSignOutAlt
} from "react-icons/fa"
import { FcFeedback, FcLock } from 'react-icons/fc'
import SlidingImage from '../../components/SlidingImage/slidingImage'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      const url = `${URL}/patient/signin`

      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {


          const { patId, name, doctorId, presId, wardBedId, role } = result['data']

          sessionStorage['patId'] = patId
          sessionStorage['doctorId'] = doctorId
          sessionStorage['name'] = name
          sessionStorage['loginStatus'] = 1
          sessionStorage['presId'] = presId
          sessionStorage['wardBedId'] = wardBedId


          toast.success('Welcome ' + name)

          navigate('/patient/patient-details')

        } else {
          toast.error('Invalid patient name or password')
        }
      })
    }
  }


  return (
    <div >
      <div style={{ textAlign: 'center' }}>
        <img src={img4} id='image1' alt="..." />
      </div>

      <h1 className="title">Patient's Signin <FaExpeditedssl /></h1>

      <div className="row">
        
          <div className="col"></div>
          
          <div className="col">
<div className='card' style={{paddingLeft:'10px',paddingTop:'10px',paddingRight:'10px'}}>
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email address  <FcFeedback />
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password <FcLock />
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <button onClick={signinUser} className="btn btn-primary">
                  Signin <FaSignInAlt />
                </button>
              </div>
            </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      
    </div>
  )
}

export default Signin
