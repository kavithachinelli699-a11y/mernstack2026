import React, { useEffect, useState } from 'react'
import styles from './adminStyles.module.css'
import axios from 'axios';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTable from 'datatables.net-dt'
import { NavLink } from 'react-router-dom'

const ViewOffers = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
      axios.get(`https://mernstack-1-epy0.onrender.com/offer`)
    .then(res=>{
      console.log(res.data)
      setData(res.data.odata);
    })  
    .catch(err=>{
      console.log(err);
    })

  
      setTimeout(function(){
        new DataTable('#myTable')
      },1000);
    
  });
      
const deleteOfferData =(oid)=>{
    const status = window.confirm("Are you sure you want to delete this offer?");
    if(status){
      axios.delete(`https://mernstack-1-epy0.onrender.com/offer/${oid}`)
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
    
    <section>
        <div className={styles.tablePage}>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>View Offers</h2>
                    <div className={styles.tableWrapper}>
                        <table className={`display  ${styles.table}`} id="myTable">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                     <th>Offer Name</th>
                                      <th>Offer Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((odata) =>{
                                        return (
                                            <tr key={odata._id}>
                                                <td className='d-flex'>
                        <button className="btn btn-danger" onClick={() => deleteOfferData(odata._id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                                                 <NavLink to={`/editoffer/${odata._id}`}>
                                                    <button className='btn btn-primary ms-2'>
                                                         <i className='bi bi-pencil'></i>
                                                    </button>
                                                    </NavLink>
                                                    </td>
                                                    <td>{odata.oname}</td>
                                                    <td>{odata.odescription}</td>
                                                    </tr>
                                        )
                                    })
                                }
                               
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ViewOffers