import {useLocation,useNavigate } from 'react-router'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'


const AddUser=()=>
{
    const[empId,setempId]=useState('')
    const[role,setRole]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[securityQuestion,setSecurityQuestion]=useState('')
    const[securityAnswer,setSecurityAnswer]=useState('')
    const[name,setName]=useState('')
    const[dob,setDob]=useState('')
    const[hireDate,setHireDate]=useState('')
    const[phoneNo,setPhoneNo]=useState('')
    const[salary,setSalary]=useState('')
    const { state } = useLocation()
    console.log(state);
    const navigate = useNavigate()

    const save = () => {
        if (role.length == 0) {
          toast.warning('please enter role')
        } else if (email.length == 0) {
          toast.warning('please enter email')
        } else if (password.length == 0) {
          toast.warning('please enter password')
        } else if (securityQuestion.length == 0) {
            toast.warning('please enter question')
        } else if (securityAnswer.length == 0) {
            toast.warning('please enter security answer')
        } else if (name.length == 0) {
            toast.warning('please enter name')
        } else if (dob.length == 0) {
            toast.warning('please enter dob')
        } else if (hireDate.length == 0) {
            toast.warning('please enter hire-date')
        } else if (phoneNo.length == 0) {
            toast.warning('please enter phone number')
        } else if (salary.length == 0) {
            toast.warning('please enter salary')
        } else {
          const body = {
            role,
            email,
            password,
            securityQuestion,
            securityAnswer,
            name,
            dob,
            hireDate,
            phoneNo,
            salary,
            userId: sessionStorage['id'],
          }
    
          const url = `${URL}/user/add`
          axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
              toast.success('added new Employee..')
              navigate('/admin')
            } else {
              toast.error(result['error'])
            }
          })
        }
      }



    return(
        <div >
        <h2 style={{textAlign:"center",fontFamily:"serif"}}>Fill Up Employee Details</h2>

            <div className="form">
            <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="mb-3" style={{width:600,fontSize:25,fontFamily:"serif"}}>
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

                <label htmlFor="" className="label-control">
                    Email
                </label>
                <input
                    onChange={(e) => {
                    setEmail(e.target.value)
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
                    setPassword(e.target.value)
                    }}
                    type="password"
                    className="form-control"
                />

                <label htmlFor="" className="label-control">
                securityQuestion
                </label>
                <input
                    onChange={(e) => {
                    setSecurityQuestion(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />

                <label htmlFor="" className="label-control">
                securityAnswer
                </label>
                <input
                    onChange={(e) => {
                    setSecurityAnswer(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />

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

                <label htmlFor="" className="label-control">
                    Hire Date
                </label>
                <input
                    onChange={(e) => {
                    setHireDate(e.target.value)
                    }}
                    type="date"
                    className="form-control"
                />

                <label htmlFor="" className="label-control">
                    Phone Number
                </label>
                <input
                    onChange={(e) => {
                    setPhoneNo(e.target.value)
                    }}
                    type="number"
                    className="form-control"
                />

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
                <hr></hr>
                <button 
                onClick={save}
                className="btn btn-success btn-lg btn-block">
                    Save
                </button>
                <Link to="/admin" className="btn btn-danger float-end">
                   Cancel
                </Link>
                </div>
                
                </div>
                <div className="col"></div>
                </div>
            </div>
        </div>
    )
}



export default AddUser;