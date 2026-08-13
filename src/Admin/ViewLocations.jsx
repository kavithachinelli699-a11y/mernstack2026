import React, { useEffect, useState } from 'react'
import styles from './adminStyles.module.css'
import axios from 'axios'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt'
import { NavLink } from 'react-router-dom'

const ViewLocations = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  axios.get(`https://mernstack-1-epy0.onrender.com/location`)
    .then(res=>{
      console.log(res.data)
      setData(res.data.ldata);
    })  
    .catch(err=>{
      console.log(err);
    })

  
      setTimeout(function(){
        new DataTable('#myTable')
      },1000);
    
  });
  
  const deleteLocation =(lid)=>{
    const status = window.confirm("Are you sure you want to delete this location?");
    if(status){
      axios.delete(`https://mernstack-1-epy0.onrender.com/location/${lid}`)
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
      <h2>View Locations</h2>
      <div className={styles.tableWrapper}>
        <table className={`display  ${styles.table}`} id="myTable">
          <thead>
            <tr>
              <th>View Locations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            (data || []).map((ldata) => (
              <tr key={ldata._id}>
                <td>{ldata.locationname}</td>
               
                <td>
                  <button className={`btn btn-danger ${styles.deleteBtn}`} onClick={()=>deleteLocation(ldata._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <NavLink to={`/EditLocation/${ldata._id}`}>
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

export default ViewLocations