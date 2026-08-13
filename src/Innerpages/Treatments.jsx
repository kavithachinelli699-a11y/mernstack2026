import React from 'react'
import innerStyles from "./innerStyles.module.css";
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Treatments = () => {
   const [data, setData] = useState([]);
    useEffect(() =>{
      axios.get(`https://mernstack-1-epy0.onrender.com/treatment`)
      .then(res =>{
          console.log(res.data);
        setData(res.data.treatmentdata);
      })
      .catch(err => console.log(err));
    }, [])
    
  return (
    <>
     <section className={innerStyles.bread}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h1>Treatments</h1>
                       <h4>Home/Treatments</h4>
                      </div>
                  </div>
                </div>
              </section>

               <section className="py-5">
             <div className="container">
        <div className="row g-4">

          {data.map((item) => (
            <div className="col-md-6" key={item._id}>

              <div className="card border-0 shadow-lg p-3">
                <div className="d-flex align-items-center">
 <div className="me-3">
 <img src={`https://mernstack-1-epy0.onrender.com/uploads/${item.filename}`} alt={item.catname} style={{ width: '240px',
    height: '200px', objectFit: 'cover', borderRadius: '10px',}}/>
  </div>

<div> <NavLink to={`/subtreatments/${item.catname}`}
      style={{textDecoration: 'none', color: '#000', fontWeight: '600', fontSize: '20px',}}>
     {item.catname}
     </NavLink>
</div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>


    </>
  )
}

export default Treatments
