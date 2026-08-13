import React, { useState } from 'react'
import axios from 'axios'

const AddTreatment = () => {

 const [catname, setCatname] = useState("");
  const [image, setImage] = useState("");

  const formdata = new FormData();
  const addTreatmentData = (e) =>{  
  e.preventDefault();
  formdata.append("image", image);
   formdata.append("catname", catname);
    axios.post(`https://mernstack-1-epy0.onrender.com/treatment`, formdata)
    .then(res => {
      alert(res.data.message);
      setCatname("");
      setImage("");
    })
    .catch(err => console.log(err));
  }

  return (

    <section className="py-5">
     <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
           <div className="card border-0 shadow-lg p-4">
            <form>

               <div className='mb-4'>
                <input type="file" className='form-control' onChange={(e) => setImage(e.target.files[0])} />

              </div>
              <div className='mb-4'>
                <input type="text" className='form-control' name='tname' placeholder='Treatment Name' value={catname} onChange={(e) => setCatname(e.target.value)}/>

              </div>
              <div>
                <button type='Submit' className='btn btn-primary' onClick={addTreatmentData}>Add Treatment</button>
              </div>

            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  )
}

export default AddTreatment