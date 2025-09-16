import logo from "./logo.svg";
import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    //get current location here
  weather.fetchCurrentUserLocationData();
  },[])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData} />
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;


