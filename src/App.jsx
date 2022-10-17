import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(0);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getTemp = () => {
    // check to see if geolocation api can be accessed
    if (!navigator.geolocation) {
      console.log("geolocation API is either turned off or not supported");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchData(position);
      });
    }
  };

  const getFormattedDate = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (Number(date.getMonth()) + 1) +
      "-" +
      date.getDate()
    );
  };

  const fetchData = async (position) => {
    console.log(latitude, longitude);
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

  // getting the current position
  useEffect(() => {
    getTemp();
  }, []);

  console.log(temp);
  return (
    <div className="App">
      <h1>React Demo</h1>

      <div>Current Temperature</div>
      <div>{temp}&deg;C</div>
    </div>
  );
}

export default App;
