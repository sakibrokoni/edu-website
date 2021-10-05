import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


         // Footer Part


const Footer = () => {
    return (
        <div className="container sectionMargin footer">
            <div className="row">
               
                <div className="col-md-8">
                    <h4>EduMark</h4>
                    <p>Education is the passport to the future,
                        for tomorrow belongs to those who prepare for it today.
                    </p>
                    <div>
                        <p>Copyright EduMark 2021</p>
                    </div>
                </div>

                {/* Main Link Given In Footer */}

                <div className="col-md-4">
                    <div>
                        <ul className=" ms-auto  menu">
                            <Link to="/">
                                Home
                            </Link>
                            <Link to="/about">
                                About
                            </Link>
                            <Link to="/services">
                                Services
                            </Link>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </ul>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;