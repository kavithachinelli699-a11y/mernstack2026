import React from 'react'
import innerStyles from './innerStyles.module.css'
import healthcareImage from "../assets/healthcare.webp";
import healthImage from "../assets/health.jpg";
import heart from "../assets/heart.jpg";
import dent from "../assets/dent.jpg";
import body from "../assets/body.webp";
import emer from "../assets/emer.webp";


const Home = () => {
  return (
    <>

      {/* ================= CAROUSEL ================= */}

      <div
        id="mainSlider"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        {/* Indicators */}

        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="2"
          ></button>

        </div>

        {/* Slides */}

        <div className="carousel-inner">

          {/* Slide 1 */}

          <div className="carousel-item active">

            <div className={`${innerStyles.banner} ${innerStyles.banner0}`}>

              <h1>Welcome To Medic Healthcare</h1>

              <p>Advanced Healthcare Services</p>

              <button>
                Our Treatments
              </button>

            </div>

          </div>

          {/* Slide 2 */}

          <div className="carousel-item">

            <div className={`${innerStyles.banner} ${innerStyles.banner1}`}>

              <h1>Best Medical Treatment</h1>

              <p>Professional Doctors & Care</p>

              <button>
                Explore Treatments
              </button>

            </div>

          </div>

          {/* Slide 3 */}

          <div className="carousel-item">

            <div className={`${innerStyles.banner} ${innerStyles.banner2}`}>

              <h1>24/7 Emergency Service</h1>

              <p>Your Health Is Our Priority</p>

              <button>
                Checkout Treatments
              </button>

            </div>

          </div>

        </div>

        {/* Previous Button */}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="prev"
        >

          <span className="carousel-control-prev-icon"></span>

        </button>

        {/* Next Button */}

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="next"
        >

          <span className="carousel-control-next-icon"></span>

        </button>

      </div>

      {/* ================= ABOUT SECTION ================= */}

      <section className="container py-5">

             <div className="container">
        <div className="row align-items-center">

          {/* Left Images */}
          <div className="col-md-5">
            <div className={innerStyles.aboutImages}>

              <img
                className={innerStyles.smallImg}
                src={healthcareImage}
                alt="Healthcare"
              />

              <img
                className={innerStyles.mainImg}
                src={healthImage}
                alt="Doctor"
              />

            </div>
          </div>

          {/* Vertical Line */}
          <div className="col-md-1 d-flex justify-content-center">
            <div className={innerStyles.verticalLine}></div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className={innerStyles.aboutContent}>

              <h5>ABOUT MEDIC HEALTHCARE</h5>

              <h2>
                Trusted Healthcare Services
                <br />
                For Better Living
              </h2>

              <p>
                Medic Healthcare provides advanced medical
                treatments with experienced doctors,
                modern technology, and compassionate care.
              </p>

              <p>
                We focus on patient safety, emergency care,
                diagnostics, and specialized treatments
                to ensure the best healthcare experience.
              </p>

              <button className="btn btn-primary px-4 py-2">
                Read More
              </button>

            </div>
          </div>

        </div>
      </div>


      </section>

      {/* ================= ACHIEVEMENT SECTION ================= */}
   
      <section className={innerStyles.achievementSection}>

        

        <div className="container">

          <div className="row text-center">

            {/* Box 1 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-heart-pulse-fill"></i>

                <h2>25+</h2>

                <p>Years Experience</p>

              </div>

            </div>

            {/* Box 2 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-hospital-fill"></i>

                <h2>50+</h2>

                <p>Medical Experts</p>

              </div>

            </div>

            {/* Box 3 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-emoji-smile-fill"></i>

                <h2>10K+</h2>

                <p>Happy Patients</p>

              </div>

            </div>

            {/* Box 4 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-award-fill"></i>

                <h2>15+</h2>

                <p>Awards Won</p>

              </div>

            </div>

            {/* Box 5 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-truck"></i>

                <h2>24/7</h2>

                <p>Emergency Care</p>

              </div>

            </div>

            {/* Box 6 */}

            <div className="col-md-2 col-6 mb-4">

              <div className={innerStyles.achievementBox}>

                <i className="bi bi-shield-check"></i>

                <h2>100%</h2>

                <p>Trusted Service</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* -------------------------------OFFERS--------------------------- */}

{/* ================= OFFERS SECTION ================= */}

<section className="container py-5">

  {/* Breadcrumb */}

  <div className="mb-4 text-center">

    <h5 className={innerStyles.offerBread}>
      OFFERS
    </h5>

    <h2>
      Special Healthcare Offers
    </h2>

  </div>

  {/* Carousel */}

  <div
    id="offerSlider"
    className="carousel slide"
    data-bs-ride="carousel"
  >

    <div className="carousel-inner">

  {/* Slide 1 */}
  <div className="carousel-item active">

    <div className="row">

      {/* Offer 1 */}
      <div className="col-md-6 mb-4">
        <div className={innerStyles.offerBox}>

          <img
            src={heart}
            alt="Heart Health Package"
            className="img-fluid"
          />

          <div className={innerStyles.offerContent}>

            <h4>Heart Health Package</h4>

            <p>
              Complete heart screening with
              specialist consultation.
            </p>

          </div>

        </div>
      </div>

      {/* Offer 2 */}
      <div className="col-md-6 mb-4">
        <div className={innerStyles.offerBox}>

          <img
            src={dent}
            alt="Dental Care Offer"
            className="img-fluid"
          />

          <div className={innerStyles.offerContent}>

            <h4>Dental Care Offer</h4>

            <p>
              Free dental checkup and
              cleaning package.
            </p>

          </div>

        </div>
      </div>

    </div>
  </div>


  {/* Slide 2 */}
  <div className="carousel-item">

    <div className="row">

      {/* Offer 3 */}
      <div className="col-md-6 mb-4">
        <div className={innerStyles.offerBox}>

          <img
            src={body}
            alt="Full Body Checkup"
            className="img-fluid"
          />

          <div className={innerStyles.offerContent}>

            <h4>Full Body Checkup</h4>

            <p>
              Advanced diagnostic tests with
              expert consultation.
            </p>

          </div>

        </div>
      </div>


      {/* Offer 4 */}
      <div className="col-md-6 mb-4">
        <div className={innerStyles.offerBox}>

          <img
            src={emer}
            alt="Emergency Care Service"
            className="img-fluid"
          />

          <div className={innerStyles.offerContent}>

            <h4>Emergency Care Service</h4>

            <p>
              24/7 emergency healthcare
              assistance available.
            </p>

          </div>

        </div>
      </div>

    </div>
  </div>

</div>

    {/* Previous Button */}

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#offerSlider"
      data-bs-slide="prev"
    >

      <span className="carousel-control-prev-icon"></span>

    </button>

    {/* Next Button */}

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#offerSlider"
      data-bs-slide="next"
    >

      <span className="carousel-control-next-icon"></span>

    </button>

  </div>

</section>
    </>
  )
}

export default Home
