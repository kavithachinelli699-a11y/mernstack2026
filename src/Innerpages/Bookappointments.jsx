import React, { useEffect, useState } from 'react'
import innerStyles from "./innerStyles.module.css";
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';

const Bookappointments = () => {


  const {catname,subtreatmentname, doctorname, doctorworkinghospital} = useParams();

  const [treatment, setTreatment]= useState([])
  const [subtreatment, setSubtreatment]= useState([])
  const [doctor , setDoctor]= useState([])

  useEffect(()=>{
      async function getDropdownData(){
        const res = await axios.get(`http://localhost:4000/treatment`)
        console.log(res.data)
        setTreatment(res.data.treatmentdata);
      };
      getDropdownData(); 
    },[])
  
  useEffect(()=>{
      async function getDropdownData(){
        const res = await axios.get(`http://localhost:4000/subtreatment`)
        console.log(res.data)
        setSubtreatment(res.data.subtreatmentdata);
      };
      getDropdownData(); 
    },[])

      useEffect(()=>{
      async function getDropdownData(){
        const res = await axios.get(`http://localhost:4000/doctor`)
        console.log(res.data)
        setDoctor(res.data.ddata);
      };
      getDropdownData(); 
    },[])


  const [data, setData] = useState({
    catname:catname || "",
    subtreatmentname:subtreatmentname ||  "",
    doctorname: doctorname|| "",
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
  axios.post(`http://localhost:4000/bookappointments`,data)
  .then(res=>{
    alert(res.data.message);
    setData({
    catname: "",
    subtreatmentname:"",
    doctorname: "",
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

                      <select name="catname" value={data.catname} onChange={changeHandler} className='form-control'>
                          <option value="">Select Treatment</option>
                          {
                            treatment.map((e)=>(
                              <option key={e._id} value={e.catname}>
                                {e.catname}
                              </option>
                            ))
                          }
                        </select>
                    </div>

                    {/* SubTreatment */}
                    <div className='col-md-6 mb-4'>

                      <label>Sub Treatment</label>

                      <select name="subtreatmentname" value={data.subtreatmentname} onChange={changeHandler} className='form-control'>
                          <option value="">Select Treatment</option>
                          {
                            subtreatment.map((e)=>(
                              <option key={e._id} value={e.subtreatmentname}>
                                {e.subtreatmentname}
                              </option>
                            ))
                          }
                        </select>

                    </div>

                    {/* Doctor */}
                    <div className='col-md-6 mb-4'>

                      <label>Doctor Name</label>

                      <select name="doctorname" value={data.doctorname} onChange={changeHandler} className='form-control'>
                          <option value="">Select Treatment</option>
                          {
                            doctor.map((e)=>(
                              <option key={e._id} value={e.doctorname}>
                                {e.doctorname}
                              </option>
                            ))
                          }
                        </select>

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
