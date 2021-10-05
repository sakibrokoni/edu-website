import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image7 from "../../image/bg7.jpg";
import Button from "@restart/ui/esm/Button";

const NotFound = () => {
    return (
        <div className="container">
            <h2 className="d-flex justify-content-center sectionMargin1"> Page Not Found</h2>

            <Card>
                <Card.Img variant="top" src={image7} />
                <Card.Body>
                    <Card.Text>

                        {/* when error occour, image will be showen and will go back to another link  */}

                        <div className="container">
                            <div className="d-flex justify-content-centre">
                                <ul className=" ms-auto  menu">
                                    <Link to="/services">
                                    <Button type="button" className="btn btn-danger">Services</Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button type="button" className="btn btn-danger">Contact</Button>
                                    </Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>


    );
};

export default NotFound;