import React from 'react'
import Typed from "react-typed";
const Header = () => {
    return (
     <div className="header-wrapper">
     <div className="main-info">
     <h1> I decided to pursue web development after years of being an entrepreneur. Web development being the future, 
     I wanted to have the know-how to compete in the market. When I'm not pursuing the knowledge of web development, 
     I'm going crazy for Seattle sports, out in the woods looking for the next best photography spot, or at the cinemas keeping up with the latest films.</h1>
     <Typed 
        className="typed-text"
        strings={["Web Development", "Software Development", "Interpersonal Communication"]}
        typeSpeed={40}
        backSpeed={60}
        loop
     />
     </div>
     </div>
    )
}

export default Header;
