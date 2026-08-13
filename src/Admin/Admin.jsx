import React, { useContext, useState } from 'react'
import adminStyles from './adminStyles.module.css'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import adminImg from './admin.jpg'
import { store } from '../App';


const Admin = () => {
    const navigate = useNavigate();
    const[token, setToken] = useContext(store)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const adminDataCheck = (e) => {
        e.preventDefault();

        axios.post(`https://mernstack-1-epy0.onrender.com/login`, data)
            .then(res => {
                if (res.data.message === "User not found") {
                    alert("User not found");
                }
                else if (res.data.message === "Invalid password") {
                    alert("Invalid password");
                }
                else {
                    setToken(res.data.token);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    if(token){
        alert("Loggin Successful");
        navigate('/admindashboard')
    }



    return (
        <>
            <section className={adminStyles.bread}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Admin Login</h1>
                        </div>
                    </div>
                </div>
            </section>

           
                <section className='container py-5'>

    <div className='row align-items-center'>

        {/* Left Image */}

        <div className='col-md-5'>

            <div className={adminStyles.img_box}>

                <img
                    src={adminImg}
                    alt='admin'
                    className='img-fluid'
                />

            </div>

        </div>

        {/* Vertical Line */}

        <div className='col-md-1 d-flex justify-content-center'>

            <div className={adminStyles.vertical_line}></div>

        </div>

        {/* Right Form */}

        <div className='col-md-6'>

            <div className={`p-5 ${adminStyles.bx_shadow}`}>

                <h2 className='text-center mb-4'>
                    Admin Login
                </h2>

                <form>

                    <div className='mb-4'>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            placeholder='Username'
                            value={data.email}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            placeholder='Enter your password'
                            value={data.password}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className='d-grid'>
                        <button
                            type='submit'
                            className='btn btn-primary'
                            onClick={adminDataCheck}
                        >
                            Admin Login
                        </button>
                    </div>

                </form>

                <div className='mt-4 d-flex justify-content-between'>

                    <NavLink to="/register">
                        Create a new user
                    </NavLink>

                    <NavLink to="/forgotpassword">
                        Forgot Password?
                    </NavLink>

                </div>

            </div>

        </div>

    </div>

</section>
            
        </>
    )
}

export default Admin