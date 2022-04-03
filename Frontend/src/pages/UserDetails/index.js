import { useLocation,useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'

const UserDetails=()=>
{
    const { state } = useLocation()
    console.log(state);
    const [employee,setEmployee]=useState('')
    const navigate = useNavigate()

    const loadUserDetails = () => {
        const { id } = state
        const url = `${URL}/user/search/${id}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
              console.log(result['data']);
            setEmployee(result['data'])
          }
        })
      }
    
      useEffect(() => {
        loadUserDetails()
      }, [])

    return(
      <div>
      <div>
        <br/><br/>
        <button className="btn btn-primary" onClick={()=>
          {
            navigate("/admin")
          }}>
          Back  
        </button>
        <br/><br/>
        <table className="table table-bordered" style={{fontFamily:"serif",fontSize:30}}>
          <thead>
            <tr className="table-info" >
            <th style={{textAlign:'center'}} colspan="2" scope="colgroup">
              Employee Details
            </th>
            </tr>
          </thead>
          <tbody style={{textAlign:"center"}}>
            <tr>
              <td>Employee id</td>
              <td>{employee.empId}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{employee.name}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{employee.role}</td>
            </tr>
            <tr>
              <td>Email id</td>
              <td>{employee.email}</td>
            </tr>
            <tr>
              <td>Security question</td>
              <td>{employee.securityQuestion}</td>
            </tr>
            <tr>
              <td>Security answer</td>
              <td>{employee.securityAnswer}</td>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <td>{employee.dob}</td>
            </tr>
            <tr>
              <td>Hired Date</td>
              <td>{employee.hireDate}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{employee.phoneNo}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>{employee.salary}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <button className="btn btn-danger"
        onClick={()=>
          {
            const { id } = state
            const url = `${URL}/user/delete/${id}`
            axios.post(url).then((response) => 
            {
              const result = response.data
              if (result['status'] == 'success') 
              {
                  console.log(result['data']);
                  navigate("/admin")
              }
            })
          }}>
          Delete Employee
        </button>
        <button className="btn btn-success float-end"
        onClick={()=>
          {
            navigate("edit-user", {state: {employee : employee}})
          }}>
          Edit Employee Details
        </button>
        </div>
        </div>
    )
}



export default UserDetails;