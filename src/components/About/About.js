import React from "react";
import image4 from "../../image/bg4.jpg";
import "./About.css";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const About = () => {
    return (
        <div className="container">

            <h2 className="d-flex justify-content-center sectionMargin1"> ABOUT US</h2>


             {/* Cart Imported */} 

            <Card>
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                    <Card.Text>
                    <h4>
                    As the largest university in one of the nation’s most iconic cities, EduMark educates diverse future leaders from across Philadelphia, the country and the world who share a common drive to learn, prepare for their careers and make a real impact .
                    </h4>
                    </Card.Text>
                </Card.Body>
            </Card>


            {/* About Part */}
    

            <section className="container my-5">

                <h2 className="d-flex justify-content-center">EduMark Academics</h2>

                <div className="sectionMargin1">

                    <div className="row row-cols-lg-1 g-3">

                        <div className="single-cart">
                            <div>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h4>Public Information</h4>
                            <p className="sectionMargin1">
                            “I am always ready to learn although I do not always like being taught.” – Winston Churchill</p>

                            <Button type="button" className="btn btn-primary">Read More</Button>
                        </div>

                        <div className="single-cart">
                            <div>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h4>History & Traditions</h4>
                            <p className="sectionMargin1">
                            “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” – Albert Einstein</p>

                            <Button type="button" className="btn btn-primary">Read More</Button>
                        </div>

                        <div className="single-cart">
                            <div>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h4>Academic Advising</h4>
                            <p className="sectionMargin1">
                            “Tell me and I forget, teach me and I may remember, involve me and I learn.” – Benjamin Franklin </p>

                            <Button type="button" className="btn btn-primary">Read More</Button>
                        </div>

                    </div>

                </div>


            </section>

        </div>


    );
};

export default About;