import React from 'react';
import {useState, useEffect } from 'react';
import innerStyles from "./innerStyles.module.css";
import axios from 'axios';


const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get (`https://mernstack-1-epy0.onrender.com/gallery`)
    .then(res => {
      console.log(res.data);
      setData(res.data.gallerydata);
    })
    .catch(err => console.log(err));

  }, [])


  return (
    <>
     <section className={innerStyles.bread}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Gallery</h1>
                    <h4>Home/Gallery</h4>
                </div>
            </div>
          </div>
       </section>

       <section className='py-5'>
        <div className='container'>
          <div className='row'>
            {
              data.map((gall) =>{
                return (
                  <div className='col-md-3 mb-4' key={gall._id}>
               <img src={`https://mernstack-1-epy0.onrender.com/uploads/${gall.filename}`} 
               alt={gall.catname} style={{width:200, height:140, borderRadius:'10px', transition: "all 0.4s ease"}} 
               className='mx-auto d-flex' onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  }} />
               <h5 className='text-center mt-3'>{gall.catname}</h5>
                    </div>
                )
              })
            }
          </div>
        </div>
       </section>

       
    </>
  )
}

export default Gallery