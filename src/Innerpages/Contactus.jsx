import React, { useState } from "react";
import innerStyles from "./innerStyles.module.css";

const ContactUs = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);

    alert("Message Sent Successfully");
    setData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
    });
  };

  return (
    <>
      <section className={innerStyles.contactSection}>
        <div className="container">

          <div className={innerStyles.contactGrid}>

            {/* Left Side Form */}

            <div className={innerStyles.contactForm}>
              <h2>Contact Us</h2>

              <form onSubmit={submitHandler}>

                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={data.name}
                  onChange={changeHandler}
                  required
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  required
                />

                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={data.phone}
                  onChange={changeHandler}
                  required
                />

                <input
                  type="text"
                  placeholder="Enter Subject"
                  name="subject"
                  value={data.subject}
                  onChange={changeHandler}
                  required
                />

                <textarea
                  rows="5"
                  placeholder="Enter Message"
                  name="message"
                  value={data.message}
                  onChange={changeHandler}
                  required
                ></textarea>

                <button type="submit">
                  Submit
                </button>

              </form>
            </div>

            {/* Right Side Address */}

            <div className={innerStyles.contactInfo}>
              <h2>Reach Us</h2>

              <div className={innerStyles.addressBox}>
                <p>
                  <strong>Hospital Name:</strong> Medic Healthcare
                </p>

                <p>
                  <strong>Address:</strong> Hyderabad, Telangana, India
                </p>

                <p>
                  <strong>Phone:</strong> +91 8886912345
                </p>

                <p>
                  <strong>Email:</strong> medic@gmail.com
                </p>
              </div>

              {/* Google Map */}

              <div className={innerStyles.mapBox}>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509624334!2d78.24323131888926!3d17.412608641927164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d3d91f7c59%3A0x8f9e0a5f4f8f7d2e!2sHyderabad!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;