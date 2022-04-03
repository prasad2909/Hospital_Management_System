import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'


const Receptionist = () => {
  // get the logged in user's information
  const {name} = sessionStorage
  const navigate = useNavigate()
  const { state } = useLocation()

  // used only for testing
  const [patients, setPatient] = useState([])
  const [searchName, setSearchName] = useState("");
  
  sessionStorage['name'] = name

  const searchEmployeeByName = () =>
  {
    //debugger;
    const url = `${URL}/patient/getbyname/${searchName}`
    console.log(url);
    axios.get(url).then((response)=>
    {
      const result = response.data;
      console.log("-----------------")
      console.log(result)
      console.log("-----------------")
      if (result["status"] == "success") {
        console.log(result["data"]);
        navigate("patientdetail", {
          state: { id : result["data"].patId },
        });

      } else {
        toast.error(result["error"]);
      }
    })
  }

  console.log(state)
  // make a call to the search api to get the results
  const searchPatients = () => {
    const url = `${URL}/patient/getallpatients`
    axios.get(url).then((response) => {
      const result = response.data
      console.log(result['data'])
      if (result['status'] == 'success') {
        setPatient(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }

  // load the data in the beginning
  useEffect(() => {
    searchPatients()
    console.log('getting called')
  }, [])

  const logoutUser = () => {
    // remove the logged users details from session storage
    
    sessionStorage.removeItem('name')
    

    // navigate to sign in component
    navigate('/signin')
  }

  return (
    <div>
        <br/>
        

      <div className="row">
        <div className="col">
          <h1 style={{fontFamily:"serif",fontSize:30}}>Patients</h1>
          
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
          -------------------------------------------------
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
              patients.filter((e)=>
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
                return (
                  <div key={key}>
                  {<h1>{console.log(e.name)}</h1>}
                  </div>
                )
                
                  
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
          -------------------------------------------------
        </div>
      </div>
      <br/><br/>
      <table className="table table-bordered" style={{fontFamily:"serif",fontSize:30}}>
            <thead class="table table-bordered">
                <tr className="table-info">
                    <th style={{textAlign:'center'}} >Patient Id</th>
                    <th style={{textAlign:'center'}}>Patient Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
              {patients.map((patient)=>{
                  return <tr key={patient.No}>
                        
                            <td align="center">{patient.patId}</td>
                            <td align="center">{patient.name}</td>
                          
                            <td align="center">
                                <button id={patient.patId}
                                        onClick={()=>
                                        {
                                          //debugger;
                                          navigate("patientdetail", {state: {id : patient.patId}})
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
                                    onClick={()=>
                                    {
                                      navigate("addpatient")
                                    }}
                                className='btn btn-success'>
                                Add Patient
                              </button>
                          </div>
      </div>
  )
}

export default Receptionist
