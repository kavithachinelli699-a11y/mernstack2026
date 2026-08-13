import React from 'react'
import {NavLink} from 'react-router-dom'
import headerStyles from './header.module.css'
import logo from './logo.png'

const Header = () => {
  return (
   
    <header className={headerStyles.header}>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
    <img src={logo} alt= "logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bookappointments">Book Appointments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/offers">Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contactus</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</header>
    
  )
}

export default Header