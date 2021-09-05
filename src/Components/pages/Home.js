import React from 'react';
import me from '../images/MyPhoto.png';

export default function Home(){
    return(
        <div className="container">
            <div className="text-center">
                <h1>Who I am</h1>
                <img src={me} className="img-fluid portrait" alt= "marcos trejo" />
            </div>
        <p>
        I decided to pursue web development after years of being an entrepreneur. Web development being the future, 
     I wanted to have the know-how to compete in the market. When I'm not pursuing the knowledge of web development, 
     I'm going crazy for Seattle sports, out in the woods looking for the next best photography spot, or at the cinemas keeping up with the latest films.
        </p>
        </div>
    )
}