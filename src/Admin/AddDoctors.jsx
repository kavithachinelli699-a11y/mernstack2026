import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AddDoctors = () => {

  const [data, setData] = useState({

    catname: '',
    locationname: '',
    doctorqualification: '',
    subtreatmentname: '',
    doctorworkinghospital: '',
    doctorphonenumber: '',
    doctorname: '',
    doctorexperience: '',
    hospitaladdress: '',
    doctoremail: ''

  })

  const [treatment, setTreatment]= useState([])
  
    useEffect(()=>{
      async function getDropdownData(){
        const res = await axios.get(`https://mernstack-1-epy0.onrender.com/treatment`)
        setTreatment(res.data.treatmentdata);
      };
      getDropdownData(); 
    },[])
  
    const [ subtreatment, setSubtreatment] = useState([]);
  
    useEffect(()=>{
      async function getDropdowData(){
        const res = await axios.get(`https://mernstack-1-epy0.onrender.com/subtreatment`)
          setSubtreatment(res.data.subtreatmentdata)
      }
      getDropdowData();
    },[])

    const [ location, setLocation] = useState([]);
  
    useEffect(()=>{
      async function getDropdoData(){
        const res = await axios.get(`https://mernstack-1-epy0.onrender.com/location`)
          setLocation(res.data.ldata)
      }
      getDropdoData();
    },[])

  const changeHandler = (e) => {

    setData({

      ...data,
      [e.target.name]: e.target.value

    })

  }

  const submitHandler = async (e) => {
     e.preventDefault();
    axios.post(`https://mernstack-1-epy0.onrender.com/doctor`, data)
        .then(res=>{
          alert(res.data.message);
          setData({
                catname: '',
                locationname: '',
                doctorqualification: '',
                subtreatmentname: '',
                doctorworkinghospital: '',
                doctorphonenumber: '',
                doctorname: '',
                doctorexperience: '',
                hospitaladdress: '',
                doctoremail: ''
        })
        .catch(err=>{
          console.log(err);
        })
        })
  }

  return (

    <section className="py-5">

      <div className="container">

        <div className="row">

          <div className="col-md-10">

            <div className="card border-0 shadow-lg p-4">

              <h2 className="mb-4">

                Add Doctor

              </h2>

<form onSubmit={submitHandler}>

                <div className="row">

                  {/* Left Side */}

                  <div className="col-md-6">

                    {/* Treatment */}

                    <div className="mb-4">

                     
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

                    {/* Location */}

                    <div className="mb-4">

                      
                   <select name="locationname" value={data.locationname} onChange={changeHandler} className='form-control'>
                          <option value="">Select Location</option>
                          {
                            location.map((e)=>(
                              <option key={e._id} value={e.locationname}>
                                {e.locationname}
                              </option>
                            ))
                          }
                        </select>
                        </div>
                       

                           <div className="mb-4">

                      
                      <select
                        className="form-select"
                        name="doctorworkinghospital"
                        value={data.doctorworkinghospital}
                        onChange={changeHandler}
                        required
                      >

                        <option value="">
                          Select Hospital
                        </option>

                        <option value="Apollo">
                          Apollo
                        </option>

                        <option value="Yashoda">
                          Yashoda
                        </option>

                        <option value="Care">
                          Care
                        </option>
                        <option value="Medicover">
                          Medicover
                        </option>

                      </select>

                    </div>

  <div className="mb-4">

                   

                       <input
                        className="form-control"
                        name="hospitaladdress"
                        placeholder='Hospital Address'
                        value={data.hospitaladdress}
                        onChange={changeHandler}
                        required
                      />

                    </div>


                   

                    {/* Qualification */}

                    <div className="mb-4">

                       <input
                        className="form-control"
                        name="doctorqualification"
                        placeholder='Doctor Qualification'
                        value={data.doctorqualification}
                        onChange={changeHandler}
                        required
                      />

            

                    </div>



                   

                  </div>

                  {/* Right Side */}

                  <div className="col-md-6">

                    {/* SubTreatment */}

                    <div className="mb-4">

                    
                      <select name="subtreatmentname" value={data.subtreatmentname} onChange={changeHandler} className='form-control'>
                          <option value="">Select SubTreatment</option>
                          {
                            subtreatment.map((item)=>(
                              <option key={item._id} value={item.subtreatmentname}>
                                {item.subtreatmentname}
                              </option>
                            ))
                          }
                        </select>

                    </div>

                    {/* Doctor Name */}

                    <div className="mb-4">
                   <input
                        className="form-control"
                        name="doctorname"
                        placeholder='Doctor Name'
                        value={data.doctorname}
                        onChange={changeHandler}
                        required
                      />

        

                    </div>

                    {/* Experience */}

                    <div className="mb-4">

                      
                      <input
                        className="form-control"
                        name="doctorexperience"
                        placeholder='Doctor Experience'
                        value={data.doctorexperience}
                        onChange={changeHandler}
                        required
                      />
                    </div>

                   

                  

                    {/* Email */}

                    <div className="mb-4">

                       <input
                        className="form-control"
                        name="doctoremail"
                        placeholder='Doctor Email'
                        value={data.doctoremail}
                        onChange={changeHandler}
                        required
                      />
                      

                    </div>

                     <div className="mb-4">

                      <input
                        className="form-control"
                        name="doctorphonenumber"
                        placeholder='Doctor Phonenumber'
                        value={data.doctorphonenumber}
                        onChange={changeHandler}
                        required
                      />

                    </div>

                  </div>

                  {/* Button */}

                  <div className="col-md-12 text-center">

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >

                      Add Doctor

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AddDoctors