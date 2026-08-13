import React, { useState } from 'react'
import axios from 'axios'


const AddOffers = () => {
const [data, setData] = useState({
    oname: '',
    odescription: ''

  })

  const changeHandler = (e) => {
     setData({ ...data,  [e.target.name]: e.target.value })

  };

  const addOfferData = (e) => {
  e.preventDefault()
   axios.post( `https://mernstack-1-epy0.onrender.com/offer`, data)
  .then(res =>{
    alert(res.data.message);
    setData({
      oname:'',
      odescription:''
    });
  })
         .catch (err =>{
          console.log(err);
         });
        };

        

  return (

   <section>
    <div className='container'>
      <div className='row border-0 shadow-lg p-4'>
        <div className='col-md-8'>
          <form>
            <div className='mb-4'>
              <input type='text' className='form-control' name='oname' placeholder='Offer Name' value={data.oname} onChange={changeHandler}/>

            </div>
            <div className='mb-4'>
              <textarea className='form-control' name='odescription' placeholder='Offer Description' value={data.odescription} onChange={changeHandler}/>
            </div>
            <div>
                <button type='Submit' className='btn btn-primary' onClick={addOfferData}>Add Offer</button>
              </div>
          </form>
        </div>
      </div>
    </div>
   </section>

  )
}

export default AddOffers