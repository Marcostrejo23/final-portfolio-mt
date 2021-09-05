import React from 'react'
import resume from "../images/CodingResume"
export default function Resume(){
    return(
        <div className="container">
            <div className="text-center">
            <h1>Here is my resume</h1>
            <a href={resume}>Marcos Trejo's resume</a>
            </div>
        </div>
    );
}