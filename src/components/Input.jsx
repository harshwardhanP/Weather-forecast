import React from "react";
import { useWeather } from "../context/Weather";

const Input = () =>{
    const weather = useWeather(null);
    console.log(weather);
    return (
        <input
        ClassName="input-field"
        placeholder="Search here"
        value ={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        />
    )
}
export default Input;

