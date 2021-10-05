import React, { useEffect, useState } from "react";
import data from "./fake.json";
import ShowCourses from "../ShowCourses/ShowCourses";
import "./Courses.css";

const Courses = () => {

    const [courses, setCourses] = useState([]);

 //    loading the from JSON

    useEffect(() => {
        setCourses(data);
    }, [])

    return (

        <div className="container">

            <h1 className="d-flex justify-content-center sectionMargin1">Most Popular Courses</h1>

            <div className="row">
                {
                    courses.map(course => <ShowCourses course= { course } ></ShowCourses>)
                }
        </div>


        </div >
    );

};

export default Courses;