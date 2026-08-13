import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import innerStyles from './innerStyles.module.css'
import axios from 'axios'

const Subtreatments = () => {
  const [data, setData] = useState([]);
    const {subname} = useParams();
       useEffect(() => {
  axios.get(`https://mernstack-1-epy0.onrender.com/subtreatment/${subname}`)
    .then((res) => {
      
      console.log(res.data);
      setData(res.data.subtreatmentdata);
    })
    .catch((err) => console.log(err));
}, [ subname]);

  return (
   <>
    <section className={innerStyles.bread}>
                   <div className='container'>
                     <div className='row'>
                       <div className='col-md-12'>
                         <h1>Sub Treatments</h1>
                       <h4>{subname}</h4>
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

<div> <NavLink to={`/location/${item.subtreatmentname}/${item.catname}/`}
      style={{textDecoration: 'none', color: '#000', fontWeight: '600', fontSize: '20px',}}>
     {item.subtreatmentname}
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

export default Subtreatments
