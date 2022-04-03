import React from 'react'
import img1 from '../../assets/img3.png'
import iLock from '../../assets/icons8-lock.gif'
import iLocation from '../../assets/icons8-location.gif'
import iService from '../../assets/icons8-services.gif'
import ifile from '../../assets/icons8-product.gif'
import idoctor from '../../assets/doctor-s-hand-holding-stethoscope-closeup.jpg'
import idoctor2 from '../../assets/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'
import './index.css'
const HospitalHome = () => {
  return (
    <div><br /><br />
      <div class='card shadow-lg mb-5 bg-body rounded' style={{ backgroundColor: "#F0FFFF" ,maxWidth:'1200px'}}>
        <div class="row">
          <div class="col-4">
            <img src={idoctor}  height={320} ></img>
          </div>
          <div class="col-8" style={{paddingLeft:"47px"}}><br /><h4><p>Handling patient bills and appointment used to be a chaotic scene in hospitals and clinics.</p>
            <p>Not anymore! With the arrival of DocPulse’s Clinic Management Software, a systematic process has evolved over the time.The best part of this software is that it has reduced the use of paper, keeping all important information in one place to access.</p>
            <p>Doctors could coordinate with other departments with great ease, regarding medical health records.The software has helped in saving time as prescriptions, bills and other calculations are maintained digitally.</p>
          </h4></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class='card shadow-lg  mb-5 bg-body rounded' style={{ backgroundColor: "#F0FFFF", paddingLeft: '20px' ,maxWidth:'1200px',paddingRight:'70px'}}>
        <div class="row">
          <div class="col-8"><br /><h4><p>TiaNuMR (Tia New Universal Medical Record) is an advanced hospital management system (HMS) that is customizable to care providers of all sizes.</p> <p>This workflow-enabled management solution seamlessly supports hospitals in carrying out their entire range of functions. TiaNuMR is integrated with electronic patient health records (EHR), and includes enterprise resource planning (ERP) modules.</p><p> TiaNuMR also has an built-in telemedicine functionality.</p></h4></div>
          <div class="col-4">
            <img src={idoctor2}  height={320} ></img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='row'>
        <div className="cardid mb-3 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row g-1">
            <div className="col-md-4">
              <img src={iLock}  className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Administrative Control</h5>
                <p className="card-text">Centrally monitor revenue from different departments (finance, stores, procurement, inventory, and HR) in addition to core hospital parameters. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col' />
      </div>
      <br />
      <div className='row'>

        <div className='col' />
        <div className="cardid mb-3 shadow-lg p-3 mb-5 bg-body rounded" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={iLocation} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">One-Stop Solution</h5>
                <p className="card-text">The TiaNuMR ecosystem provides an all-in-one solution for all your hospital management requirements. The modules are integrated, so data flows seamlessly across the system.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className="cardid mb-3 shadow-lg p-3 mb-5 bg-body rounded" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={iService} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">IT Support</h5>
                <p className="card-text">Any questions? Our IT support team is available to assist you and to ensure the smooth functioning of your advanced hospital management system.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='col' />

      </div>
      <br />
      <div className='row'>

        <div className='col' />
        <div className="cardid mb-3 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={ifile} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Electronic Health Records</h5>
                <p className="card-text">All patient health records can be stored digitally, and can be integrated with every hospital department, enabling more effective patient management.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default HospitalHome

