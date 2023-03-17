import React from 'react'
import '../../assets/styles/Navbar.css'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <ul>
                        <li>
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">F.A.Q</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>      
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar