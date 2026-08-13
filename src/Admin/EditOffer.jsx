import React, { useEffect, useState } from 'react'
import adminStyles from './adminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const EditOffer = () => {
  const [data, setData] = useState("");
    const navigate = useNavigate();
    const {oid} = useParams();
    useEffect(()=>{
        axios.get(`https://mernstack-1-epy0.onrender.com/offer/${oid}`)
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

    const UpdateOffer = (e) =>{
        e.preventDefault();
        axios.put(`https://mernstack-1-epy0.onrender.com/offer/${oid}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/viewoffers')
            })
            .catch(err=>{
                alert("Unable to update the Offer ")
            })
    }
  
     return (
   <section>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
              <div className="card shadow">

              <div className="card-body p-4">
          <form className='{adminStyles._bx_shadow}'>
            <div className='mb-4'>
              <input type='text' className='form-control' name='oname' placeholder='Offer Name' value={data.oname} onChange={changeHandler}/>

            </div>
             <div className='mb-4'>
              <input type='text' className='form-control' name='odescription' placeholder='Offer Name' value={data.odescription} onChange={changeHandler}/>

            </div>

            <div>
                <button type='Submit' className='btn btn-primary' onClick={UpdateOffer}>Update Offer</button>
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


export default EditOffer