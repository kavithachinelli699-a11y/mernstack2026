import React, { useEffect, useState } from 'react';
import innerStyles from "./innerStyles.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Locations = () => {

  const [data, setData] = useState([]);
  
  const {subname,tname} = useParams();

  // Get the route parameter

  useEffect(() => {
    axios.get(`https://mernstack-1-epy0.onrender.com/location/${subname}`)
      .then((res) => {
        console.log(res.data);

        // If your API returns an array
        setData([res.data.sdata]);
      })
      .catch((err) => console.log(err));

  }, [subname]);

  return (
    <>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Locations</h1>
              <h4>Home / Locations</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center g-4">

            {data.map((sdata) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={sdata._id}
              >
                <NavLink to={`/doctors/${sdata.locationname}/${subname}/${tname}`}  style={{textDecoration: 'none', color: '#000', fontWeight: '600', fontSize: '20px',}}>
                <div className={innerStyles.card}>
                  <div className="card-body">

                    <h4 className="treatment-name">
                      <i className="fa fa-heartbeat me-2 text-danger"></i>
                      {sdata.catname}
                    </h4>

                    <p className="sub-treatment">
                      <i className="fa fa-stethoscope me-2 text-success"></i>
                      <strong> Sub Treatment:</strong>{" "}
                      {sdata.subtreatmentname}
                    </p>

                    <p className="location">
                      <i className="fa fa-map-marker-alt me-2 text-primary"></i>
                      <strong> Location:</strong>{" "}
                      {sdata.locationname}
                    </p>

                  </div>
                </div>
              </NavLink>
                </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;