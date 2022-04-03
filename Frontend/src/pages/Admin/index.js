import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'



const Admin = () => {
  // get the logged in user's information
  const { name,loginStatus } = sessionStorage
  const navigate = useNavigate()
  const [searchName, setSearchName] = useState("");

  // used only for testing
  const [users, setUsers] = useState([])

  // make a call to the search api to get the results
  const searchUsers = () => {
    const url = `${URL}/user/search`
    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setUsers(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }

  const searchEmployeeByName = () =>
  {
  
    const url = `${URL}/user/getbyname/${searchName}`
    console.log(url);
    axios.get(url).then((response)=>
    {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result["data"]);
        navigate("user-details", {
          state: { id : result["data"].empId },
        });

      } else {
        toast.error(result["error"]);
      }
    })
  }

  // load the data in the beginning
  useEffect(() => {
    searchUsers()
    console.log('getting called')
  }, [loginStatus])

  const logoutUser = () => {
    // remove the logged users details from session storage

    sessionStorage.removeItem('name')
    sessionStorage.removeItem('loginStatus')



    // navigate to sign in component
    navigate('/signin')
  }

  return (
    <div>
      <br />

      <div className="row">
        <div className="col">
          <h1 style={{ fontFamily: "serif", fontSize: 30 }}>Employees</h1>

        </div>
        <div className="col">
          <div className="float-end">
            <div className="btn-group " role="group">

              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Welcome {name}
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <button onClick={logoutUser} className="dropdown-item">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col">
          ----------------------------------
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => {
                setSearchName(e.target.value);
                console.log(searchName)

              }}
              className="form-control rounded"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            
            { 
              users.filter((e)=>
              {
                console.log(e)
                if (searchName == "")
                {
                  return e
                }else if (e.name.toLowerCase().includes(searchName.toLowerCase())) 
                {
                  console.log(e)
                  return e
                }
              })
              .map((e,key)=>
              {
                        <div key={key}>
                        console.log(e.name)
                        </div>
              })
            }
            
            <button
              type="button"
              onClick={searchEmployeeByName}
              className="btn btn-outline-primary"
            >
              search
            </button>
          </div>
          --------------------------
        </div>
      </div>
      <br /><br />
      <table className="table table-bordered" style={{ fontFamily: "serif", fontSize: 30 }}>
        <thead class="table table-bordered">
          <tr className="table-info">
            <th style={{ textAlign: 'center' }} >S.no.</th>
            <th style={{ textAlign: 'center' }}>Employee Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {users.map((employee) => {
            return <tr key={employee.No}>

              <td align="center">{employee.empId}</td>
              <td align="center">{employee.name}</td>

              <td align="center">
                <button id={employee.emp_id}
                  onClick={() => {
                    navigate("user-details", { state: { id: employee.empId } })
                  }}
                  className='btn btn-primary'>
                  View Details
                </button>
              </td>
            </tr>

          })}
        </tbody>
      </table>

      <hr></hr>

      <div align="center" class="d-grid gap-2">
        <button
          onClick={() => {
            navigate("add-user")
          }}
          className='btn btn-success'>
          Add User
        </button>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Admin
