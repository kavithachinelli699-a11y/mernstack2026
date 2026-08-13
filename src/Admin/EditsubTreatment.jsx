import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import adminStyles from './adminStyles.module.css';

const EditsubTreatment = () => {

  const [data, setData] = useState({
    catname: '',
    subtreatmentname: '',
    filename: '',
    path: ''
  });

  const navigate = useNavigate();
  const { tid } = useParams();


  // =========================
  // GET SINGLE SUBTREATMENT
  // =========================

  useEffect(() => {

    axios
      .get(`https://mernstack-1-epy0.onrender.com/subtreatments/${tid}`)
      .then((res) => {

        console.log('GET RESPONSE:', res.data);

        if (res.data.subtreatmentdata) {

          setData(res.data.subtreatmentdata);

        }

      })
      .catch((err) => {

        console.log(
          'GET ERROR:',
          err.response?.data || err.message
        );

      });

  }, [tid]);


  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const changeHandler = (e) => {

    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));

  };


  // =========================
  // UPDATE SUBTREATMENT
  // =========================

  const addUpdatedsubTreatmentData = (e) => {

    e.preventDefault();

    console.log('ID:', tid);
    console.log('DATA:', data);

    axios
      .put(
        `https://mernstack-1-epy0.onrender.com/subtreatments/${tid}`,
        {
          catname: data.catname,
          subtreatmentname: data.subtreatmentname
        }
      )
      .then((res) => {

        console.log('PUT RESPONSE:', res.data);

        alert(res.data.message);

        navigate('/admindashboard/viewsubtreatments');

      })
      .catch((err) => {

        console.log(
          'PUT ERROR:',
          err.response?.data || err.message
        );

        alert(
          err.response?.data?.message ||
          'Unable to update the subtreatment'
        );

      });

  };


  return (

    <div className={adminStyles.adminContainer}>

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="card shadow">

              <div className="card-body p-4">

                <h2 className="text-center mb-4">
                  Edit SubTreatment
                </h2>


                <form onSubmit={addUpdatedsubTreatmentData}>


                  {/* =========================
                      TREATMENT NAME
                  ========================= */}

                  <div className="mb-3">

                    <label className="form-label">
                      Treatment Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="catname"
                      placeholder="Treatment Name"
                      value={data.catname || ''}
                      onChange={changeHandler}
                    />

                  </div>


                  {/* =========================
                      SUBTREATMENT NAME
                  ========================= */}

                  <div className="mb-3">

                    <label className="form-label">
                      Sub Treatment Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="subtreatmentname"
                      placeholder="Sub Treatment Name"
                      value={data.subtreatmentname || ''}
                      onChange={changeHandler}
                    />

                  </div>


                  {/* =========================
                      EXISTING IMAGE
                  ========================= */}

                  {data.filename && (

                    <div className="mb-4 text-center">

                      <label className="form-label d-block">
                        Current Image
                      </label>

                      <img
                        src={`https://mernstack-1-epy0.onrender.com/uploads/${data.filename}`}
                        alt={data.subtreatmentname || 'SubTreatment'}
                        style={{
                          width: '180px',
                          height: '120px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          border: '1px solid #ddd'
                        }}
                      />

                    </div>

                  )}


                  {/* =========================
                      BUTTONS
                  ========================= */}

                  <div className="d-flex justify-content-center gap-3">

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Update SubTreatment
                    </button>


                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        navigate('/admindashboard/viewsubtreatments')
                      }
                    >
                      Cancel
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EditsubTreatment;
