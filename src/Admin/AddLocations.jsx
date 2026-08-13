import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddLocation = () => {

  const [data, setData] = useState({

    catname: '',
    subtreatmentname: '',
    locationname: ''

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
  



  const changeHandler = (e) => {
   setData({...data,[e.target.name]: e.target.value})

  }

  const submitHandler = async (e) => {
     e.preventDefault();
    axios.post(`https://mernstack-1-epy0.onrender.com/location`, data)
        .then(res=>{
          alert(res.data.message);
          setData({
            catname:"",
            subtreatmentname:"",
            locationname:""
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

          <div className="col-md-6">

            <div className="card border-0 shadow-lg p-4">

              <h2 className="mb-4">

                Add Location

              </h2>

              <form onSubmit={submitHandler}>

                {/* Treatment Name */}

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

                {/* Sub Treatment */}

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

                {/* Location Name */}

                <div className="mb-4">

                  <label className="form-label">

                    Location Name

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="locationname"
                    placeholder="Enter Location Name"
                    value={data.locationname}
                    onChange={changeHandler}
                    required
                  />

                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="btn btn-primary"
                >

                  Add Location

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AddLocation