import React from 'react'
import './Weaher.css'
import { useState } from 'react';

import search_icon from "../assets/search.png";
// import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
// import rain_icon from "../assets/rain.png";
// import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
    const [wind, setwind] = useState("-- km/h")
    const [humidity, setHumidity] = useState('--')
    const [location, setLocation] = useState("London")
    const [temp, setTemp] = useState("--°C")
    const api_key = "d2655b29f0b43b60ebbd47de0f3a6ec0"
   
    const search = async() =>{
        const element = document.getElementsByClassName("cityInput");
        
        if (element[0].value === 'London') {
            
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value === ""? "London": element[0].value}&units=Metric&appid=${api_key}`

        let response =  await fetch(url)
        let data = await response.json()

       

        setwind(data.wind.speed+ "km/h");
        setHumidity(data.main.humidity+"%");
        setTemp(Math.floor(data.main.temp)+" °C");
        setLocation(data.name);
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
            </div>
    
            <div className='weather-image'>
                <img src={cloud_icon} alt="" />
            </div>

            <div className='weather-temp'>{temp}</div>
            <div className="weather-location">{location}</div>

            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity">{humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity">{wind}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Weather
