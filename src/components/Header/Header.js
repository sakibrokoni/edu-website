import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">
                    EduMark
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" ms-auto  menu">

                        <Link to="/">
                            Home
                        </Link>


                        <Link to="/about">
                            About
                        </Link>


                        <Link to="/courses">
                            Courses
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
        </nav>

    );
};

export default Header;