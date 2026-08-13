import React, { useEffect, useState } from 'react'
import adminStyles from './adminStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const EditDoctor = () => {
  const [data, setData] = useState("");
    const navigate = useNavigate();
    const {did} = useParams();
    useEffect(()=>{
        axios.get(`https://mernstack-1-epy0.onrender.com/doctor/${did}`)
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

    const UpdateDoctor = (e) =>{
        e.preventDefault();
        axios.put(`https://mernstack-1-epy0.onrender.com/doctor/${did}`,data)
            .then(res=>{
                alert(res.data.message);
                navigate('/admindashboard/viewdoctors')
            })
            .catch(err=>{
                alert("Unable to update the doctor ")
            })
    }
  
     return (
   <section>
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className="card shadow">
                
              <div className="card-body p-4">
          <form>
            <div>
            <div className='mb-4'>
              <input type='text' className='form-control' name='doctorname' placeholder='Doctor Name' value={data.doctorname} onChange={changeHandler}/>

            </div>

            <div>
                <button type='Submit' className='btn btn-primary' onClick={UpdateDoctor}>Update Doctor</button>
              </div>
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


export default EditDoctor