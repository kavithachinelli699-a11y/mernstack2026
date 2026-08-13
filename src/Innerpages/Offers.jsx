import React, { useEffect, useState } from 'react'
import innerStyles from "./innerStyles.module.css";
import axios from 'axios';


const Offers = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get(`https://mernstack-1-epy0.onrender.com/offer`)
    .then(res =>{
      console.log(res.data)
      setData(res.data.odata);
    })
    .catch(err => console.log(err));
  }, [])
  

  return (
    <>
      <section className={innerStyles.bread}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Offers</h1>
              <h4>Home/Offers</h4>
            </div>
          </div>
        </div>
      </section>

     <section className={innerStyles.osection}>
  <div className={`container ${innerStyles.timeline}`}>

    {/* Center Vertical Line */}
    <div className={innerStyles.centerLine}></div>

    {data.map((odata, index) => (
      <div
        key={odata._id}
        className={`row mb-5 ${
          index % 2 === 0 ? "justify-content-start" : "justify-content-end"
        }`}
      >
        <div className="col-md-5">

          <div className={innerStyles.circle}></div>

          <div className={`card shadow ${innerStyles.offerCard}`}>
            <div className="card-body">

              <h5 className="fw-bold text-primary">
                {odata.oname}
              </h5>

              <p className="border-bottom pb-3">
                {odata.odescription}
              </p>

            </div>
          </div>

        </div>
      </div>
    ))}

  </div>
</section>

    </>
  )
}

export default Offers;