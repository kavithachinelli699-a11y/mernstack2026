import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Innerpages/Home'
import Treatments from './Innerpages/Treatments'
import Bookappointments from './Innerpages/Bookappointments'
import Offers from './Innerpages/Offers'
import Gallery from './Innerpages/Gallery'
import Contactus from './Innerpages/Contactus'
import Admin from './Admin/Admin'
import Register from './Admin/Register'
import AdminDashboard from './Admin/Admindashboard'

import AddTreatment from './Admin/AddTreatment'
import AddSubtreatment from './Admin/AddSubtreatment'
import AddLocations from './Admin/AddLocations'
import AddDoctors from './Admin/AddDoctors'
import AddOffers from './Admin/AddOffers'
import BookAppointmentData from './Admin/BookAppointmentData'
import AddGallery from './Admin/AddGallery'
import ViewOffers from './Admin/ViewOffers'
import ViewTreatments from './Admin/ViewTreatments'
import ForgotPassword from './Admin/ForgotPassword'
import Subtreatments from './Innerpages/Subtreatments'
import Locations from './Innerpages/Locations'
import Doctors from './Innerpages/Doctors'
import ViewsubTreatments from './Admin/ViewsubTreatments'
import ViewDoctors from './Admin/ViewDoctors'
import ViewLocations from './Admin/ViewLocations'
import EditTreatment from './Admin/editTreatment'
import EditsubTreatment from './Admin/EditsubTreatment'
import EditOffer from './Admin/EditOffer'
import EditDoctor from './Admin/EditDoctor'
import EditLocation from './Admin/EditLocation'


const Routing = () => { 
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treatments" element={<Treatments />} />
                 <Route path="/subtreatments/:subname" element={<Subtreatments />} />

                 <Route path="/location/:subname/:tname" element={<Locations />} />
                 <Route path="/doctors/:locationname/:subname/:tname" element={<Doctors />} />
                 
                
                

                <Route path="/bookappointments/:catname/:subtreatmentname/:doctorname/:doctorworkinghospital" element={<Bookappointments />} />
                <Route path="/bookappointments" element={<Bookappointments />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contactus" element={<Contactus />} />
                
                
                
                <Route path="/admin" element = {<Admin />} />
                <Route path="/register" element = {<Register />} />
                <Route path="/forgotpassword" element = {<ForgotPassword />} />
                <Route path="/admindashboard" element = {<AdminDashboard />} >
                

                  <Route path = "" element = {<AddTreatment />} />
                  <Route path= "viewtreatments" element ={<ViewTreatments />} />
                  
                  <Route path="addSubtreatment" element = {<AddSubtreatment />} />
                  <Route path="viewsubtreatments" element = {<ViewsubTreatments />} />
                  
                  <Route path="addLocations" element ={<AddLocations />} />
                   <Route path="viewlocations" element ={<ViewLocations />} />
                  <Route path="addDoctors" element ={<AddDoctors />} />
                  <Route path="viewdoctors" element ={<ViewDoctors />} />
                  <Route path="addoffers" element = {<AddOffers />} />
                  <Route path='viewoffers' element = {<ViewOffers />} />
                  <Route path="addGallery" element = {<AddGallery />} />
                  <Route path="bookappointmentdata" element = {<BookAppointmentData/>} />
                  
                 
                  </Route>

                   <Route path= "edittreatment/:tid" element ={<EditTreatment />} />
                   <Route path="editsubtreatment/:tid" element = {<EditsubTreatment />} />
                  <Route path="editoffer/:oid" element = {<EditOffer />} />
                  <Route path="editdoctor/:did" element = {<EditDoctor />} />
                  <Route path="editlocation/:lid" element = {<EditLocation />} />
                  

                <Route path="/bookappointment" element = {<Bookappointments />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}

export default Routing