import React from "react";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import image2 from "../../image/bg2.jpg";
import About from "../About/About";
import Courses from "../Courses/Courses";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">

            <Card className="bg-dark text-white">
                <Card.Img src={image2} alt="Card image" />
                <Card.ImgOverlay>
                    <h1>
                        <Card.Title className="d-flex justify-content-center sectionMargin1">
                            Edusite Free Online Training Courses
                        </Card.Title>
                    </h1>

                    <Card.Text className="sectionMargin1 conatiner">
                        <h4 >
                            <p className="d-flex justify-content-center">Immerse yourself in real-world learning.
                            </p>
                            <p className="d-flex justify-content-center">Gain the skills to excel in the world of business.</p>
                            <p className="d-flex justify-content-center">Don't miss the application window for our world-renowned, interactive online courses.</p>
                        </h4>
                        <h8 className="d-flex justify-content-center">
                            Education at the intersection of research, innovation and social impact.
                        </h8>

                        <div className="d-flex justify-content-center  sectionMargin1">
                            <Button type="button" className="btn btn-info ">See What We Do </Button>
                        </div>

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <About></About>
            <Courses></Courses>
        </div >

    );
};

export default Home;