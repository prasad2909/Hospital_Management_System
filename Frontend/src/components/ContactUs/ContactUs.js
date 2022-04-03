import React from 'react'
import img1 from '../../assets/img3.png'
import iLock from '../../assets/icons8-lock.gif'
import iLocation2 from '../../assets/icons8-place-marker.gif'
import iPhone from '../../assets/icons8-phonelink-ring.gif'
import iEmail from '../../assets/icons8-secured-letter.gif'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='container'>
    <br /><br />
      <div >
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="col"></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={iLocation2} height={200} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"># 718, 2nd Floor, Hansa Plaza,
                  24th Main, J P Nagar 6th Phase,
                  Bangalore 560 078</p>
              </div>
            </div>
          </div>
          <div className="col"><h2 style={{ textAlign: 'center', paddingTop: '200px', fontWeight: 'bold' }}>Contact Us</h2></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={iPhone} height={200} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{textAlign:"center",paddingTop:'40px'}}>080 46837034</p>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={iEmail} height={200} className="card-img-top " alt="..." />
              <div className="card-body">
                <p className="card-text" style={{textAlign:"center",paddingTop:'40px'}}>contact@hms.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>

  )
}

export default ContactUs