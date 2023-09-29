import React from "react";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchValue, setSearchValue] = useState("Kanpur");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getforecast();
  }, []);

  async function getforecast() {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d5171be4b12f34497752f5ac56aeb2c2`
    );
    const json = await data.json();
    setForecast(json);
    console.log(forecast);
  }
  if (!forecast) return null;
  return (
    <>
      <div className="main">
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div>
          <button
            className="search-btn"
            onClick={() => {
              const data = searchValue;
              getforecast(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="weather_card">
          <div className="city_name">{forecast.name}</div>
          <div className="city_temp">{forecast?.main?.temp + "°C"}</div>
          <div className="city_weather">
            {/* {forecast?.weather[0]?.description} */}
          </div>
          <div id="boxes">
            <div id="leftbox">
              <h1>Wind:</h1>
              <h2 className="detail">{forecast?.wind?.speed}km/h</h2>
              <h2 className="detail">{forecast?.wind?.deg}°deg</h2>
            </div>

            <div id="middlebox"></div>

            <div id="rightbox">
              <span className="right_ques">Humidity:</span>
              <h2 className="detail right">{forecast?.main?.humidity}</h2>
              <span className="right_ques">Pressure:</span>
              <h2 className="detail right">{forecast?.main?.pressure}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
