import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

import './slidingImage.css'

const slidingImage = () => {
    const { role } = sessionStorage
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                </div>
                <div className='text-center'>
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={img3} id='image1' style={{ alignSelf: 'center' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} id='image1' style={{ alignSelf: 'center' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img1} id='image1' style={{ alignSelf: 'center' }} alt="..." />
                        </div>





                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


export default slidingImage