import { useLocation,useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'

const EditUser=()=>
{ 
    const { state } = useLocation()
    const [empId]=useState('')
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const [email,setEmail] = useState('')
    const [securityQuestion,setsecurityQuestion] = useState('')
    const [securityAnswer,setsecurityAnswer] = useState('')
    const [dob,setDob] = useState('')
    const [hireDate,sethireDate] = useState('')
    const [phoneNo,setphoneNo] = useState('')
    const [salary,setSalary] = useState('')
    
    const navigate = useNavigate()
   
    useEffect(() => {
        const {employee}=state
        setName(employee.name)
        setRole(employee.role)
        setEmail(employee.email)
        setsecurityQuestion(employee.securityQuestion)
        setsecurityAnswer(employee.securityAnswer)
        setDob(employee.dob)
        sethireDate(employee.hireDate)
        setphoneNo(employee.phoneNo)
        setSalary(employee.salary)
    }, [])


    const save = () => {
        console.log("currentEmployee role length "+role)
        if (role.length == 0) {
          toast.warning('please enter role')
        } else if (email.length == 0) {
          toast.warning('please enter email')
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
                empId,
                name,
                role,
                email,
                securityQuestion,
                securityAnswer,
                dob,
                hireDate,
                phoneNo,
                salary,
            }

            
         
          const url = `${URL}/user/edit/${state.employee.empId}`
          console.log(`current empId = ` + state.employee.empId)
          axios.put(url, body).then((response) => {
            var result = response.data
            if (result['status'] == 'success') {
              toast.success('added new Employee..')
              navigate('/admin/user-details', {state: {id : state.employee.empId}})
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
            navigate("/admin/user-details", {state: {id : state.employee.empId}})
        }}>
        Back  
        </button>
        <br/><br/>
        <table className="table table-bordered" style={{fontFamily:"serif",fontSize:30}}>
        <thead>
            <tr className="table-info" >
            <th style={{textAlign:'center'}} colspan="2" scope="colgroup">
            Edit Employee Details
            </th>
            </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
            <tr>
            <td>Employee Id</td>
            <td>{state.employee.empId}</td>
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
            <td>Role</td>
            <td><input id="Role" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={role}
                onChange={(e) => {
                    setRole(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Email Id</td>
            <td><input id="Email" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Security Question</td>
            <td><input id="Sec que" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={securityQuestion}
                onChange={(e) => {
                    setsecurityQuestion(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Security Answer</td>
            <td><input id="sec ans" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={securityAnswer}
                onChange={(e) => {
                    setsecurityAnswer(e.target.value)
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
            <td>Hired Date</td>
            <td><input id="hire date" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={hireDate}
                onChange={(e) => {
                    sethireDate(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Phone Number</td>
            <td><input id="phone no" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={phoneNo}
                onChange={(e) => {
                    setphoneNo(e.target.value)
                  }}></input>
            </td>
            </tr>
            <tr>
            <td>Salary</td>
            <td><input id="Salary" class="form-control" style={{textAlign:"center",fontSize:20}} 
                value={salary}
                onChange={(e) => {
                    setSalary(e.target.value)
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

export default EditUser;