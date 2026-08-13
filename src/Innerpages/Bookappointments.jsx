import React, { useState } from 'react'
import innerStyles from "./innerStyles.module.css";
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';

const Bookappointments = () => {


  const {catname,subtreatmentname, doctorname, doctorworkinghospital} = useParams();


  const [data, setData] = useState({
    catname:catname || "",
    subTreatmentName:subtreatmentname ||  "",
    doctorName: doctorname|| "",
    hospitalName:doctorworkinghospital || "",
    patientName:"",
    patientEmail:"",
    appointmentDate: "",
    appointmentTime: "",
    message: "",

  });

  const changeHandler = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    });

  };

const submitHandler = (e) =>{
  e.preventDefault();
  axios.post(`https://mernstack-1-epy0.onrender.com/bookappointments`,data)
  .then(res=>{
    alert(res.data.message);
    setData({
    catname: "",
    subTreatmentName:"",
    doctorName: "",
    hospitalName:"",
    patientName:"",
    patientEmail:"",
    appointmentDate: "",
    appointmentTime: "",
    message: "",      
    })
  })
  .catch(err=>{
    console.log(err);
  })
}

  return (
    <>

      <section className={innerStyles.bread}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
               <h1>Book</h1>
              <h4>Appointment</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={innerStyles.appointmentSection}>

        <div className='container'>

          <div className='row justify-content-center'>

            <div className='col-md-10'>

              <div className={innerStyles.formBox}>

                <h2>Book Appointment</h2>

                <form onSubmit={submitHandler}>

                  <div className='row'>

                    {/* Treatment */}
                    <div className='col-md-6 mb-4'>

                      <label>Treatment</label>

                      <input
                        type='text'
                        name='catname'
                        value={data.catname}
                        onChange={changeHandler}
                        className='form-control'
                      />

                    </div>

                    {/* SubTreatment */}
                    <div className='col-md-6 mb-4'>

                      <label>Sub Treatment</label>

                      <input
                        type='text'
                        name='subTreatmentName'
                        value={data.subTreatmentName}
                        onChange={changeHandler}
                        className='form-control'
                      />

                    </div>

                    {/* Doctor */}
                    <div className='col-md-6 mb-4'>

                      <label>Doctor Name</label>

                      <input
                        type='text'
                        name='doctorName'
                        value={data.doctorName}
                        onChange={changeHandler}
                        className='form-control'
                      />

                    </div>

                    {/* Hospital */}
                    <div className='col-md-6 mb-4'>

                      <label>Hospital</label>

                      <input
                        type='text'
                        name='hospitalName'
                        value={data.hospitalName}
                        onChange={changeHandler}
                        className='form-control'
                      />

                    </div>

                    {/* Patient Name */}
                    <div className='col-md-6 mb-4'>

                      <label>Patient Name</label>

                      <input
                        type='text'
                        name='patientName'
                        value={data.patientName}
                        onChange={changeHandler}
                        placeholder='Enter Patient Name'
                        required
                      />

                    </div>

                    {/* Email */}
                    <div className='col-md-6 mb-4'>

                      <label>Email</label>

                      <input
                        type='email'
                        name='patientEmail'
                        value={data.patientEmail}
                        onChange={changeHandler}
                        placeholder='Enter Email'
                        required
                      />

                    </div>

                    {/* Date */}
                    <div className='col-md-6 mb-4'>

                      <label>Date</label>

                      <input
                        type='date'
                        name='appointmentDate'
                        value={data.appointmentDate}
                        onChange={changeHandler}
                        required
                      />

                    </div>

                    {/* Time */}
                    <div className='col-md-6 mb-4'>

                      <label>Time</label>

                      <input
                        type='time'
                        name='appointmentTime'
                        value={data.appointmentTime}
                        onChange={changeHandler}
                        required
                      />

                    </div>

                    {/* Message */}
                    <div className='col-md-12 mb-4'>

                      <label>Message</label>

                      <textarea
                        rows="5"
                        name='message'
                        value={data.message}
                        onChange={changeHandler}
                        placeholder='Enter Message'
                      ></textarea>

                    </div>

                    <div className='col-md-12 text-center'>

                      <button type='submit'>

                        Confirm Appointment

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Bookappointments