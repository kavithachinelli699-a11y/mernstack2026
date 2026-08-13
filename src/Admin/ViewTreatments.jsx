import React, { useEffect, useState } from 'react'
import styles from './adminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt'
import { NavLink } from 'react-router-dom'

const ViewTreatments = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  axios.get(`https://mernstack-1-epy0.onrender.com/treatment`)
    .then(res=>{
      console.log(res.data)
      setData(res.data.treatmentdata);
    })  
    .catch(err=>{
      console.log(err);
    })

  
      setTimeout(function(){
        new DataTable('#myTable')
      },1000);
    
  });
  
  const deleteTreatment =(tid)=>{
    const status = window.confirm("Are you sure you want to delete this Treatment?");
    if(status){
      axios.delete(`https://mernstack-1-epy0.onrender.com/treatment/${tid}`)
      .then(res=>{
        alert(res.data.message);
      })
      .catch(err=>{
        console.log(err);
      })
    }
    else{
      alert("Deletion cancelled.");
    }
  }

  return (
    <div className={styles.tablePage}>
      <h2>View Treatments</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>View Treatments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data || []).map((treatmentdata) => (
              <tr key={treatmentdata._id}>
                <td>{treatmentdata.catname}</td>
               
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deleteTreatment(treatmentdata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/edittreatment/${treatmentdata._id}`}>
                      <button className={`btn btn-info ms-3 ${styles.deleteBtn}`}>
                        <i className="bi bi-pencil"></i>
                      </button>
                  </NavLink>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewTreatments