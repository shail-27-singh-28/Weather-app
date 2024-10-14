import "./App.css";
import Highlights from "./components/Highlights";
import Temprature from "./components/Temprature";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=d7df9ca8c5044b4682e22942241210&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex flex-col md:flex-row justify-center items-center md:items-center p-5">
      {/* Temperature Section */}
      <div className="w-full md:w-1/4 h-full mt-10 md:mt-0 flex justify-center items-center">
        {weatherData && (
          <Temprature
            setCity={setCity}
            stats={{
              temp: weatherData?.current?.temp_c,
              condition: weatherData?.current?.condition?.text,
              isDay: weatherData?.current?.is_day,
              location: weatherData?.location?.name,
              time: weatherData?.location?.localtime,
            }}
          />
        )}
      </div>

      {/* Highlights Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="text-slate-200 text-2xl col-span-2">Today's Highlights</h2>

        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Wind Status",
                value: weatherData?.current?.wind_mph,
                unit: "mph",
                direction: weatherData?.current?.wind_dir,
              }}
            />
            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData?.current?.humidity,
                unit: "%",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                value: weatherData?.current?.vis_miles,
                unit: "miles",
              }}
            />
            <Highlights
              stats={{
                title: "Air Pressure",
                value: weatherData?.current?.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
