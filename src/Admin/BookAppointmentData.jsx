import React, { useEffect,useState }from 'react';
import axios from 'axios';

const BookAppointmentData = () => {

  const [data,
    setData] =
    useState([]);

  useEffect(() => {

    fetchAppointments();

  }, []);

  const fetchAppointments =
    async () => {

      try {

        const res =
          await axios.get(
            'https://mernstack-1-epy0.onrender.com/bookappointments'
          );
          console.log(res.data)
          setData(res.data.bbdata)

      } catch (error) {

        console.log(error);
      }
    };

      const updateStatus =
    async (id, status) => {

      try {

        await axios.put(
          `https://mernstack-1-epy0.onrender.com/bookappointments/${id}`,
          {
            status
          }
        );

        fetchAppointments();

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div>

      <h3>
        Appointment Data
      </h3>

      <table
        className="table table-bordered table-striped"
      >

        <thead>

          <tr>

            <th>Patient</th>

            <th>Email</th>

            <th>Treatment</th>

            <th>Sub Treatment</th>

            <th>Doctor</th>

            <th>Date</th>

            <th>Time</th>

            <th>Status</th>

            <th>Edit</th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (

            <tr key={item._id}>

              <td>
                {item.patientName}
              </td>

              <td>
                {item.patientEmail}
              </td>

              <td>
                {item.treatmentName}
              </td>

              <td>
                {item.subTreatmentName}
              </td>

              <td>
                {item.doctorName}
              </td>

              <td>
                {item.appointmentDate}
              </td>

              <td>
                {item.appointmentTime}
              </td>

              <td>

                {item.status}

              </td>

              <td>

                <select
                  className="form-select"
                  value={item.status}
                  onChange={(e) =>
                    updateStatus(
                      item._id,
                      e.target.value
                    )
                  }
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Progress">
                    Progress
                  </option>

                  <option value="Finished">
                    Finished
                  </option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default BookAppointmentData;