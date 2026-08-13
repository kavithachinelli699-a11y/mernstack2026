import React, { useEffect, useState } from "react";
import innerStyles from "./innerStyles.module.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Doctors = () => {
  const [data, setData] = useState([]);

  const { locationname, subname, tname } = useParams();

  useEffect(() => {
    axios
      .get(`https://mernstack-1-epy0.onrender.com/doctor/${locationname}/${subname}`)
      .then((res) => {
        console.log("Doctor response:", res.data);

        setData(res.data.ddata || []);
      })
      .catch((err) => {
        console.log("Doctor error:", err);
        setData([]);
      });
  }, [locationname, subname]);

  return (
    <>
    <section className={innerStyles.bread}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="py-4">DOCTOR DETAILS</h1>
                </div>
              </div>
            </div>
          </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">

            {data.length > 0 ? (
              data.map((ddata) => (
                <div
                  className="col-lg-6 col-md-8 mb-4"
                  key={ddata._id}
                >
                  <div className={innerStyles.card}>
                    <div className="card-body text-center">

                      <h3 className="mb-4">
                        {ddata.doctorname}
                      </h3>

                      <p>
                        <strong>Treatment:</strong>{" "}
                        {ddata.catname}
                      </p>

                      <p>
                        <strong>Sub Treatment:</strong>{" "}
                        {ddata.subtreatmentname}
                      </p>

                      <p>
                        <strong>Location:</strong>{" "}
                        {ddata.locationname}
                      </p>

                      <p>
                        <strong>Qualification:</strong>{" "}
                        {ddata.doctorqualification}
                      </p>

                      <p>
                        <strong>Hospital:</strong>{" "}
                        {ddata.doctorworkinghospital}
                      </p>

                      <p>
                        <strong>Phone:</strong>{" "}
                        {ddata.doctorphonenumber}
                      </p>

                      <p>
                        <strong>Email:</strong>{" "}
                        {ddata.doctoremail}
                      </p>

                      <p>
                        <strong>Hospital Address:</strong>{" "}
                        {ddata.hospitaladdress}
                      </p>

                      <NavLink
                        to={`/Bookappointments/${ddata.catname}/${ddata.subtreatmentname}/${ddata.doctorname}/${ddata.doctorworkinghospital}`}
                        className="btn btn-primary"
                      >
                        Book Appointment
                      </NavLink>

                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h5>No Doctor Found</h5>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;