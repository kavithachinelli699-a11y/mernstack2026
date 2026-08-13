import React, { useEffect, useState } from 'react'
import axios from 'axios'
import adminStyles from './adminStyles.module.css';

const AddSubtreatment = () => {
const [data, setData] = useState({
    catname: "",
    subtreatmentname: "",
    image: null
});

const [treatment, setTreatment]= useState([])

useEffect(()=>{
    async function getDropdownData(){
      const res = await axios.get(`https://mernstack-1-epy0.onrender.com/treatment`)
      console.log(res.data)
      setTreatment(res.data.treatmentdata);
    };
    getDropdownData(); 
  },[])

  const formdata = new FormData();
  const addsubTreatmentData = (e) =>{  
  e.preventDefault();
  formdata.append("image", data.image);
   formdata.append("catname", data.catname);
   formdata.append("subtreatmentname", data.subtreatmentname);
    axios.post(`https://mernstack-1-epy0.onrender.com/subtreatment`, formdata)
    .then(res => {
      alert(res.data.message);
      setCatname("");
      setImage("");
    })
    .catch(err => console.log(err));
  }

  const changeHandler = (e) => {
  const { name, value } = e.target;

  setData({ ...data, [name]: value,});};

  return (

    <section className="py-5">
    <div className="container">
    <div className="row">
    <div className="col-md-6">
     <div className="card border-0 shadow-lg p-4">

       <form onSubmit={addsubTreatmentData}>
       <div className="mb-4">

<label className="form-label">Treatment Name</label>

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

              <div className="mb-4">
              <label className="form-label">SubTreatment Name</label>

<input type="text" className="form-control" name="subtreatmentname" placeholder="Enter SubTreatment Name"
    value={data.subtreatmentname} onChange={changeHandler}required/>
              </div>

            <div className='mb-4'>
<input type="file" className='form-control' onChange={(e)=> setData({...data, image:e.target.files[0]})}/>
            </div>

  <button type="submit" className="btn btn-primary" onClick={addsubTreatmentData}>Add SubTreatment</button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AddSubtreatment