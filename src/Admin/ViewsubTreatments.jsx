import React, { useEffect, useState } from 'react'
import styles from './adminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt'
import { NavLink } from 'react-router-dom'

const ViewsubTreatments = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  axios.get(`https://mernstack-1-epy0.onrender.com/subtreatment`)
    .then(res=>{
      console.log(res.data)
      setData(res.data.subtreatmentdata);
    })  
    .catch(err=>{
      console.log(err);
    })

  
      setTimeout(function(){
        new DataTable('#myTable')
      },2000);
    
  },[data]);
  
  const deletesubTreatment =(tid)=>{
    const status = window.confirm("Are you sure you want to delete this Treatment?");
    if(status){
      axios.delete(`https://mernstack-1-epy0.onrender.com/subtreatment/${tid}`)
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
      <h2>View SubTreatments</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>View SubTreatments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data || []).map((subtreatmentdata) => (
              <tr key={subtreatmentdata._id}>
                <td>{subtreatmentdata.subtreatmentname}</td>
               
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deletesubTreatment(subtreatmentdata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/editsubtreatment/${subtreatmentdata._id}`}>
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

export default ViewsubTreatments 