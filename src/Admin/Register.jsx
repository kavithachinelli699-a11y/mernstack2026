import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Register = () => {
    const navigate=useNavigate();
     const [data, setData] = useState({
        name:"",
        email:"",
       password:"",
       phone:"",
       address:""

     })

     const changeHandler =(e) => {
        setData({ ...data, [e.target.name]: e.target.value })
     }

     const registerData = (e) =>{
        e.preventDefault();
        axios.post(`https://mernstack-1-epy0.onrender.com/register`, data)
        .then(res =>{
            alert(res.data.message);
            setData({
                name:"",
                email:"",
                password:"",
                phone:"",
                address:""
            })
            navigate("/admin")
        })
        .catch(err =>{
            console.log(err)
        })
     }

  return (
   <>
   <section className={adminStyles.bread}>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>Admin Registeration</h1>
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
                        <input type='name' className='form-control' name='name' placeholder='Enter name' value={data.name} onChange={changeHandler} />
                    </div>
                    <div className='mb-4'>
                        <input type='email' className='form-control' name='email' placeholder='Enter email' value={data.email} onChange={changeHandler} />
                    </div>
                
                    <div className='mb-4'>
                        <input type='password' className='form-control' name='password' placeholder='Enter password'  value={data.password} onChange={changeHandler} />
                    </div>
                      <div className='mb-4'>
                        <input type='phone' className='form-control' name='phone' placeholder='Enter phone' value={data.phone} onChange={changeHandler} />
                    </div>
                   <div className='mb-4'>
                        <input type='address' className='form-control' name='address' placeholder='Enter address' value={data.address} onChange={changeHandler} />
                    </div>
                   
                   <div>
                     <button type='submit' className='btn btn-primary' onClick={registerData}>Admin Register</button>
                   </div>

                </form>
               
            </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default Register
