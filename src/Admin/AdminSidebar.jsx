import React from 'react'
import adminStyles from './adminStyles.module.css';
import {NavLink} from 'react-router-dom';


const AdminSidebar = () => {
  return (
    <ul className={adminStyles.adminsidebar}>
        <li>
            <NavLink to="">Add Treatment</NavLink>
        </li>

        <li>
        <NavLink to ="addSubtreatment">Add SubTreatment</NavLink>
        </li>
        
        <li>
        <NavLink to ="addLocations">Add Location</NavLink>
        </li>

        <li>
          <NavLink to ="addDoctors">Add Doctor</NavLink>
        </li>

        <li>
          <NavLink to ="addoffers">Add Offer</NavLink>
        </li>

         <li>
          <NavLink to ="addGallery">Add Gallery</NavLink>
        </li>
        
        <li>
          <NavLink to ="viewtreatments">View Treatments</NavLink>
        </li>
         <li>
          <NavLink to ="viewoffers">View Offers</NavLink>
        </li>
        <li>
          <NavLink to ="viewsubtreatments">View subTreatments</NavLink>
        </li>
        <li>
          <NavLink to ="viewdoctors">View Doctors</NavLink>
        </li>
        <li>
          <NavLink to ="viewlocations">View Locations</NavLink>
        </li>

        


          <li>
            <NavLink to ="bookappointmentdata">Book Appointment Data</NavLink>
          </li>
        

    </ul>
  )
}

export default AdminSidebar