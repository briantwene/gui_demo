import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [temp, setTemp] = useState(0);

  const getTemp = () => {
    // check to see if geolocation api can be accessed
    if (!navigator.geolocation) {
      console.log("geolocation API is either turned off or not supported");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position);
      });
    }
  };

  // format date function
  const getFormattedDate = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (Number(date.getMonth()) + 1) +
      "-" +
      date.getDate()
    );
  };

  const fetchWeatherData = async (position) => {
    const date = new Date();
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${
        position.coords.latitude
      }&longitude=${
        position.coords.longitude
      }&hourly=temperature_2m&start_date=${getFormattedDate(
        date
      )}&end_date=${getFormattedDate(date)}`
    ).then((res) => res.json());

    setTemp(data.hourly.temperature_2m[date.getHours()]);
  };

  useEffect(() => {
    getTemp();
  }, []);

  //using JSX to display temperature
  return (
    <div className="App">
      <h1>React Demo</h1>

      <div className="text">Current Temperature</div>
      <div className="temp">{temp}&deg;C</div>
    </div>
  );
}

export default App;
