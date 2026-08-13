import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
     const navigate = useNavigate();
     const [data, setData] = useState({
        email:""
       
     })

     const changeHandler =(e) => {
        setData({ ...data, [e.target.name]: e.target.value })
     }

     const forgotPasswordCheck = (e) =>{
       e.preventDefault();

       axios.post(`https://mernstack-1-epy0.onrender.com/forgotpassword`, data)
       .then(res =>{
          alert(res.data.message);
       })
       .catch(err =>{
       console.log(err);
       })
     }
     
  return (
   <>
   <section className={adminStyles.bread}>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>Forgot Password</h1>
            </div>
        </div>
      </div>
   </section>
    <section className='py-5'>
    <div className='container'>
        <div className='row'>
            <div className={`col-md-4 mx-auto ${adminStyles.bx_shadow}`}>
                <form>
                    <div className='mb-4'>
                        <input type='email' className='form-control' name='email' placeholder='Username' value={data.email} onChange={changeHandler} />
                    </div>
                   <div>  
                     <button type='submit' className='btn btn-primary'onClick={forgotPasswordCheck}>Forgot Password</button>
                     
                   </div>

                </form>
            </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default ForgotPassword