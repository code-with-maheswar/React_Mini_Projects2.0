import './WeatherApp.css'
import SeachBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from 'react'
export default function WeatherApp(){
let [weatherInfo,setWeatherInfo]=useState(
    {
        city:"Delhi",
         temp:24.84,
        temMin:25.05,
        temMax:25.05,
        humidity:47,
        feelslike:25.05,
        weather:"haze"
    }
);

let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
}

    return(
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SeachBox updateInfo={updateInfo}/><br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}