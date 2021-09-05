import React from 'react';
import password from '../images/PasswordGenerator.png';
import weather from '../images/WeatherDashboard.png';
import WorkDay from '../images/WorkDayScheduler.png';

export default Portfolio(){
    return(
        <div className="container">
            <div className="text-center">
            <h2>My work so far</h2>
            <img className="img-fluid port=image"src={password} alt="Password Generator"></img>
            <a href="https://github.com/Marcostrejo23/password-generator-mt">Password Generator</a>
            <p>This is a password generator I created for my Boot camp.</p>
            <img className="img-fluid port=image"src={weather} alt="Weather Dashboard"></img>
            <a href="https://github.com/Marcostrejo23/weather-api-mt">Weather Dashboard</a>
            <p>I created this weather dashboard where when you select a city it will give you a five day forecast.</p>
            </div>
            <img className="img-fluid port=image"src={weather} alt="WorkDay scheduler"></img>
            <a href="https://github.com/Marcostrejo23/workday-calendar-mt">WorkDay Scheduler</a>
            <p>This is a workday scheduler where a user can input tasks that will save to local storage.</p>
        </div>
    );
}