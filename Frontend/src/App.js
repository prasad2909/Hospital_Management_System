import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Admin from './pages/Admin'
import UserDetails from './pages/UserDetails'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import Doctor from './pages/Doctor'
import PatientsDetails from './pages/DPatientsDetails'
import EditPrescription from './pages/EditPrescription'
import './pages/background.css'
import Navbar from './components/Navbar/Navbar.js'
import HospitalHome from './components/Home'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs'
import PatientDetails from './pages/PPatientDetails'
import PatientSignin from './pages/PatientSignin'
import BillDetails from './pages/BillDetails'
import Receptionist from './pages/Receptionist'
import AddPatient from './pages/AddPatient'
import PatientDetail from './pages/PatientDetails'
import EditPatient from './pages/EditPatient'
import ForgetPassword from './pages/ForgetPassword'
import Accountant from './pages/accountant/Accountant'

const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus == '1' ? <HospitalHome /> : <Signin />
}

function App() {
  return (
    <body>


      <div>
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <div className="container">
            <Routes>
              <Route path="/s" element={<AuthorizeUser />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/user-details" element={<UserDetails />} />
              <Route path="/user-details" element={<UserDetails />} />
              <Route path="/admin/add-user" element={<AddUser />} />
              <Route path="/admin/user-details/edit-user" element={<EditUser />} />

              <Route path="/receptionist" element={<Receptionist />} />
              <Route path="/receptionist/addpatient" element={<AddPatient />} />
              <Route path="/receptionist/patientdetail" element={<PatientDetail />} />
              <Route path="/receptionist/patientdetail/edit-patient" element={<EditPatient />} />


              <Route path="/hospital-Home" element={<HospitalHome />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/doctor-home" element={<Doctor />} />
              <Route path="/doctor-home/patients-details" element={<PatientsDetails />} />
              <Route path="/doctor-home/patients-details/edit-prescription" element={<EditPrescription />} />

              <Route path="/patient-signin" element={<PatientSignin />} />
              <Route path="/patient/patient-details" element={<PatientDetails />} />
              <Route path="/patient/patient-details/bill-details" element={<BillDetails />} />
              {/* forgot password link
               */}
                <Route path="/forgotPassword" element={<ForgetPassword />} />
                <Route path="/accountant" element={<Accountant />} />


            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        <ToastContainer theme="colored" position="top-center" autoClose='1200'/>
      </div>
    </body>

  )
}

export default App
