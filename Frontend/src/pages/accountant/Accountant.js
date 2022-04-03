import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import InvoiceModal from '../../components/accountantModal/InvoiceModal'
import Patient from '../../components/accountantModal/Patient'



const Accountant = () => {
    const [patients, setPatients] = useState([]);
  //to toggle invoice modal to fullscreen
  const [invoiceToggleFlag, setInvoiceToggleFlag] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [patient, setPatient] = useState({});

  //object to collect bill data
  const [bill, setBill] = useState({});
  //to reload page on every update
  const [dataChangeFlag, setDataChangeFlag] = useState(false);
  //   to toggle the modal flag
  const SetInvoiceModal = (patient) => {
    GetPatientBillFromServer(patient.patId);
    setPatient(patient);
    handleShow();
    setInvoiceToggleFlag(true);
  };
  // to load the bill
  const GetPatientBillFromServer = (id) => {
    
    const url = `${URL}/patient/getPatientBill/${id}`;
    axios.get(url).then((res) => {
      const result = res.data;
      console.log(res);
      if (result.status == "success") {
        setBill(result.data);
      }
    });
  };
  
  //function to get details of particular patient from server

  //to turn off modal
  const ResetInvoiceModal = () => {
    handleClose();
    setInvoiceToggleFlag(false);
  };
  //function to change the dataflag
  const ToggleDataChangelag = () => {
     
    setDataChangeFlag(!dataChangeFlag);
  };
  // to get data from server
  const GetDataFromServer = () => {
    //to reset datachanged flag to initial state
    
    const url = `${URL}/patient/getallpatients`;
    axios.get(url).then((res) => {
      const result = res.data;
      if (result.status == "success") {
        setPatients(result.data);
        console.log(res);
      } else {
        console.log("unable to fetch result");
      }
    });
  };
  useEffect(() => {
    GetDataFromServer();
  }, [dataChangeFlag]);
  //===============================new code avbove
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
        // --------------------------
        SetInvoiceModal(result.data);
        // -----------------------------------------
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
        {/* to pop up model */}
        {invoiceToggleFlag && (
        <InvoiceModal
        bill={bill}
          patient={patient}
          setInvoiceToggleFlag={setInvoiceToggleFlag}
          handleClose={handleClose}
          show={show}
          ResetInvoiceModal={ResetInvoiceModal}
          ToggleDataChangelag={ToggleDataChangelag}
        />
      )}
      <br />

      <div className="row">
        <div className="col">
          <h1 style={{ fontFamily: "serif", fontSize: 30 }}>Patients</h1>

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
      <table className="table table-bordered" >
        <thead class="table table-bordered">
        <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Payment Status</th>
            <th>Phone Number</th>
            
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody >
        {patients.map((p) => {
            return <Patient patient={p} SetInvoiceModal={SetInvoiceModal} />;
          })}
        </tbody>
      </table>

      <hr></hr>

      
      <br /><br /><br /><br />
    </div>
  )
}

export default Accountant
