import React from 'react';
import logo from '../../assets/icons8-pills-96.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Navbar.css'
const Navbar = () => {
  useEffect(() => {
    }, [])
  return (
    <div>
      <nav className="navbar navbar-light bg-dark" style={{ position: "fixed", width: '100%', zIndex: '4',paddingRight:"100px"}}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" style={{ fontSize: '25px',paddingLeft:"100px" }} >
              <img src={logo} alt="" style={{ width: '40px', }} className="d-inline-block align-text-top" />
              Hospital Managenemt System
          </a>
          <ul class="nav justify-content-end" style={{ fontSize: '20px' }}>
            <li class="nav-item">
              <Link to='/hospital-Home' class="nav-link"  style={{textDecoration:'none'}}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/aboutUs' class="nav-link"  style={{textDecoration:'none'}}>About-Us</Link>
              
            </li>
            <li class="nav-item">
            <Link to='/contactUs' class="nav-link" style={{textDecoration:'none'}}>Contact-Us</Link>
            </li>
            <li>
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:'10px'}}>
                SignIn Here..!
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><Link to='/signin' className="dropdown-item" style={{textDecoration:'none'}}>Employee</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to='/patient-signin' className="dropdown-item" style={{textDecoration:'none'}}>Patient</Link></li>
              </ul>
            </div>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar