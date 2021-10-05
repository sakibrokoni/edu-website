import React from "react";
import "./Services.css";
import Button from "@restart/ui/esm/Button";

const Services = () => {
    return (

        <section className="container my-5">

            <h2 className="d-flex justify-content-center"> Student Services for Online Learners</h2>

            <div className="sectionMargin1">

                 {/* Servies Part  */}
                 {/* Button Is Imported */}


                <div className="row row-cols-lg-1 g-3">

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Admissions Support</h4>
                        <p className="sectionMargin1">
                            Admissions specialists help students make informed choices about online schools and degree programs.</p>

                        <Button type="button" className="btn btn-primary">Read More</Button>
                    </div>

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Financial Aid Advising</h4>
                        <p className="sectionMargin1">
                            Students must consider how they will pay for college early in the admissions process.</p>

                        <Button type="button" className="btn btn-primary">Read More</Button>
                    </div>

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Academic Advising</h4>
                        <p className="sectionMargin1">
                            Academic advisors support students selecting academic majors, specialty tracks, and courses. </p>

                        <Button type="button" className="btn btn-primary">Read More</Button>
                    </div>

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Alumni Support</h4>
                        <p className="sectionMargin1">
                            For years, colleges have offered students personal services through on-campus health and counseling centers, but the sensitive nature of this support made it difficult to deliver online.</p>

                        <Button type="button" className="btn btn-primary">Read More</Button>
                    </div>

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Library Support</h4>
                        <p className="sectionMargin1">
                            College libraries do more than lend books. Librarians teach students how to access digital journals and other research tools, or perform detailed searches on students’ behalf.</p>

                        <Button type="button" className="btn btn-primary">Read More</Button>

                    </div>

                    <div className="single-cart">
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4>Internship Services</h4>
                        <p className="sectionMargin1">
                            Internships and other practical placements offer students a chance to practice and refine skills learned through coursework</p>

                        <Button type="button" className="btn btn-primary">Read More</Button>
                    </div>

                </div>



            </div>


        </section>
    );
};

export default Services;