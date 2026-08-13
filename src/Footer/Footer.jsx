import React from "react";
import footerStyles from "./footer.module.css";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className={footerStyles.footerGrid}>

                        {/* About */}
                        <div className={footerStyles.footerBox}>
                            <h3>About</h3>
                            <p>
                                Medic Healthcare provides trusted medical services with
                                experienced doctors, advanced treatments, and patient-focused
                                care for a healthier future.
                            </p>
                        </div>

                        {/* Treatments */}
                        <div className={footerStyles.footerBox}>
                            <h3>Treatments</h3>
                            <ul>
                                <li>Cardiology Care</li>
                                <li>Dental Treatment</li>
                                <li>Neurology</li>
                                <li>Orthopedic Care</li>
                            </ul>
                        </div>

                        {/* Offers */}
                        <div className={footerStyles.footerBox}>
                            <h3>Offers</h3>

                            <div className={footerStyles.offerContainer}>
                                <div className={footerStyles.offerScroll}>
                                    <p>20% OFF on Full Body Checkup</p>
                                    <p>Free Dental Consultation</p>
                                    <p>Heart Health Screening Package</p>
                                    <p>Free Ambulance Service*</p>
                                </div>
                            </div>
                        </div>

                        {/* Reach Us */}
                        <div className={footerStyles.footerBox}>
                            <h3>Reach Us</h3>

                            <p>
                                +91 8886922358
                            </p>

                            <p>
                                medic@gmail.com
                            </p>

                            <p>
                                Gachibowli, Hyderabad, India
                            </p>

                        </div>

                    </div>
                </div>

                {/* Bottom Footer */}
                <div className={footerStyles.bottomFooter}>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>
                                © 2026 Medic Healthcare. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                Developed By Kavitha chinnalli
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;