import React from 'react'
import photo from "../Components/myphoto.png";

const About = () => {
    return (
        <div className= "container py-5">
            <div className="row">
                <div className = "col-lg-6 col xm-12">
                    <img src={photo} alt= "The Developer"/>
                </div>
                <div className="col-lg 6 col-xm-12">
                <h1>About Me</h1>
                <p> Test</p>
                </div>
            </div>
        </div>
    )
}

export default About
