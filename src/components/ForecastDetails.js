import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        <b>Max Temperature:</b> {temperature.max}
        &deg;C
        <br />
        <b>Min Temperature:</b> {temperature.min}
        &deg;C
        <br />
      </div>
      <div className="forecast-details__humidity">
        <b>Humidity:</b> {humidity}
      </div>
      <div className="forecast-details__wind">
        <b>Wind Speed:</b> {wind.speed}
        <br />
        <b>Wind Direction:</b> {wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
