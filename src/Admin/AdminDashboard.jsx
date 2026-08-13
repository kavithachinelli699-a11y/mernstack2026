import React, { useContext, useEffect, useState } from 'react'
import adminStyles from './adminStyles.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { store } from '../App'
import axios from 'axios'

const AdminDashboard = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get(`https://mernstack-1-epy0.onrender.com/admindashboard`,{
            headers:{
                "x-token" : token
            }
        })
        .then(res =>{
            setData(res.data.message);
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    useEffect(() =>{
        if(!token){
            navigate("/admin")
        }
    },[token, navigate])



    return (
        <>
            <section className={adminStyles.bread}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Admin Dashboard</h1>
                        </div>
                    </div>
                </div>
            </section>

           
<section className='py-5'>

<div className='container'>
<div className='row'>
    <div className="col-md-4">
         <AdminSidebar />
    </div>
     <div className="col-md-8">
        <Outlet />
    </div> 
</div>

      
</div>

</section>
            
        </>
    )
}

export default AdminDashboard