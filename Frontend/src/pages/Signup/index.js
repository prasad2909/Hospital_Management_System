import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role,setRole]= useState('')
  const [dob,setDob]= useState('')
  const [hireDate,sethireDate]=useState('')
  const [phoneNo,setphoneNo]=useState('')
  const [salary,setSalary]=useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [securityQuestion,setsecurityQuestion]= useState('')
  const [securityAnswer,setsecurityAnswer]= useState('')

  // used to navigate from one component to another
  const navigate = useNavigate()

  const signupUser = () => {
    if (name.length == 0) {
      toast.warning('Please enter name')
    } else if (email.length == 0) {
      toast.warning('Please enter email')
    } else if (password.length == 0) {
      toast.warning('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('Please confirm your password')
    } else if (password != confirmPassword) {
      toast.warning('Password does not match')
    } else if (role.length == 0) {
      toast.warning('please enter role')
    } else if (dob.length == 0) {
      toast.warning('please enter date of birth')
    } else if (hireDate.length == 0) {
      toast.warning('please enter hire-date')
    } else if (phoneNo.length == 0){
      toast.warning('please enter phone number')
    } else if (salary.length == 0) {
      toast.warning('please enter salary')
    } else if (securityQuestion.length == 0) {
      toast.warning('please enter security question')
    } else if (securityAnswer.length == 0) {
      toast.warning('please enter security answer')
    }else {
      const body = {
        name,
        email,
        password,
        role,
        securityQuestion,
        securityAnswer,
        dob,
        hireDate,
        phoneNo,
        salary,
      }

      // url to call the api
      const url = `${URL}/user/signup`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div>
      <h1 className="title">Signup</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
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
                Role
              </label>
              <input
                onChange={(e) => {
                  setRole(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Date Of Birth
              </label>
              <input
                onChange={(e) => {
                  setDob(e.target.value)
                }}
                type="date"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Hire Date
              </label>
              <input
                onChange={(e) => {
                  sethireDate(e.target.value)
                }}
                type="date"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Phone Number
              </label>
              <input
                onChange={(e) => {
                  setphoneNo(e.target.value)
                }}
                type="phone"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Salary
              </label>
              <input
                onChange={(e) => {
                  setSalary(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Security Question
              </label>
              <input
                onChange={(e) => {
                  setsecurityQuestion(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Security Answer
              </label>
              <input
                onChange={(e) => {
                  setsecurityAnswer(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
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
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin">Signin here.</Link>
              </div>
              <button onClick={signupUser} className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Signup
