import React from 'react';
import Typed from 'react-typed';

export default function Home(){
    return(
        <div className="home-wrapper">
            <div className="main-info">
               <h1>web developer</h1>
               <Typed 
                    className='typed-text'
                    strings={["Web Design", "Web Development","Databases"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
               />
               <p className='home-text'>
               Hello! My name is Marcos Trejo and I'm a beginner Javascript Developer. 
               Here you will find examples of my work, about me, my resume, and how to reach out. 
               If you think I am a good fit for your company or have any questions about my work, shoot me an email 
               at Marcostrejo23@gmail.com.
               </p>
               <p>VS Code, HTML5, CS3, React.js, graph.ql, nodejs, sql, mysql, mongodb, github, terminal. These are the technologies I am comfortable working with currently, I am hoping to add Java to this list in 2022. </p>
            </div>
       
        </div>
    )
}