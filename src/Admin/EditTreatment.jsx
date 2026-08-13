import React, { useEffect, useState } from 'react'
import adminStyles from './adminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const EditTreatment = () => {
  const [data, setData] = useState("");
    const navigate = useNavigate();
    const {tid} = useParams();
    useEffect(()=>{
        axios.get(`https://mernstack-1-epy0.onrender.com/treatments/${tid}`)
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

    const addUpdatedTreatmentData = (e) =>{
        e.preventDefault();
        axios.put(`https://mernstack-1-epy0.onrender.com/treatment/${tid}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/viewtreatments')
            })
            .catch(err=>{
                alert("Unable to update the treatment ")
            })
    }
  
     return (
   <section>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
            <div className="card shadow">

              <div className="card-body p-4">
          <form className='{adminStyles._bx_shadow}'>
            <div className='mb-4'>
              <input type='text' className='form-control' name='catname' placeholder='Treatment Name' value={data.catname} onChange={changeHandler}/>

            </div>

            <div>
                <button type='Submit' className='btn btn-primary' onClick={addUpdatedTreatmentData}>Update Treatment</button>
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


export default EditTreatment