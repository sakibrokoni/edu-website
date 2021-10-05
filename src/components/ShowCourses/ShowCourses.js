import React from "react";
import "./ShowCourses.css";
import Button from "@restart/ui/esm/Button";

const ShowCourses = (props) => {

    const { title, price, img } = props.course;

    // Showing The Courses,Price,Title

    return (

        <div className="col-md-4">
            <div className="card coursesCard">
                <img className="img-fluid" src={img} alt={title} />
                <h5>Title: {title}</h5>
                <h6>Price: ${price} </h6>
                <Button type="button" className="btn btn-outline-info">Buy Now</Button>
            </div>
        </div>

    );
};

export default ShowCourses;