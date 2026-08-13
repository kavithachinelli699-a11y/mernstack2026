import React, { useEffect, useState } from 'react'
import adminStyles from './adminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditLocation = () => {
  const [data, setData] = useState("");
    const navigate = useNavigate();
    const {lid} = useParams();
    useEffect(()=>{
        axios.get(`https://mernstack-1-epy0.onrender.com/location/${lid}`)
            .then(res=>{
              console.log(res.data)
            })
            .catch(err=>{
                console.log(err);
        })
    },[]);

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        };

    const UpdateLocation = (e) =>{
        e.preventDefault();
        axios.put(`https://mernstack-1-epy0.onrender.com/location/${lid}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/viewlocations')
            })
            .catch(err=>{
                alert("Unable to update the location ")
            })
    }
  
     return (

   <section>
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className="card shadow">

              <div className="card-body p-4">
          <form className='{adminStyles._bx_shadow}'>
            <div className='mb-4'>
              <input type='text' className='form-control' name='locationname' placeholder='Location Name' value={data.locationname} onChange={changeHandler}/>

            </div>

            <div>
                <button type='Submit' className='btn btn-primary' onClick={UpdateLocation}>Update Location</button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
   </section>

  )
}


export default EditLocation