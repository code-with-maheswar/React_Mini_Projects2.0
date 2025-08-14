import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SeachBox({updateInfo}){
let [city,setCity]=useState('');
let [error,setError]=useState(false)
const API_URL="https://api.openweathermap.org/data/2.5/weather"
let API_KEY="9fb9492736811d25220b9588a94261fd"

let getWeatherInfo=async()=>{
    
       try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let getJsonResponse=await response.json();
    console.log(getJsonResponse);
    let result = {
        city:city,
        temp:getJsonResponse.main.temp,
        temMin:getJsonResponse.main.temp_min,
        temMax:getJsonResponse.main.temp_max,
        humidity:getJsonResponse.main.humidity,
        feelslike:getJsonResponse.main.feels_like,
        weather:getJsonResponse.weather[0].description
    }
    console.log(result);
    return result

}catch(err){
    throw err;
}
};

let handleChanage=(evt)=>{
    setCity(evt.target.value);
} 

let onSubmit=async(form)=>{
   try{ form.preventDefault();
    console.log(city);
setCity('');
let  newInfo=await getWeatherInfo();
updateInfo(newInfo);
   }catch(err){
    setError(true)
   }
}
    return (
        <div className='SearchBox'>
             <form action="/action" onSubmit={onSubmit}>
              <TextField id="city" label="Enter city" variant="outlined" value={city} onChange={handleChanage} required/><br /><br />
              <Button variant="contained" type='submit'>Search</Button>
              {error  && <p style={{color:"red"}}>No such place exist in Our API</p>}
             </form>
        </div>
    )
}