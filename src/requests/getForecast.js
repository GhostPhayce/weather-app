import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage(`No such town or city, please try again`);
        console.error(`Location is not valid`, error);
        window.setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
      if (status === 500) {
        setErrorMessage("Something went wrong, please try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
