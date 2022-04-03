import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import { FcFeedback, FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaGitlab } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer '>
            <footer className="bg-dark text-center text-white">
            
                <div className="container">
                    <section className="mb-0">

                        <a className="btn btn-outline-light btn-floating m-1" href="www.facebook.com" role="button"><i className="fab fa-facebook-f" /><FaFacebook /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="www.google.com" role="button"><i className="fab fa-google" /><FaGoogle /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="www.instagram.com" role="button"><i className="fab fa-instagram" /><FaInstagram /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="www.linkedin.com" role="button"><i className="fab fa-linkedin-in" /><FaLinkedin /></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="www.gitlab.com" role="button"><i className="fab fa-gitlab" /><FaGitlab /></a>

                    </section>
                    <div className="text-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className="text-white" href='/signin'>HMS</a>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer