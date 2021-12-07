require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
app.use(cors());

//Sensors

// Weather
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const CURRENT_CITY = "Omsk";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CURRENT_CITY}&appid=${OPENWEATHER_API_KEY}&units=metric`;

const getWeather = async () => {
  try {
    const res = await axios.get(WEATHER_URL);
    return res.data;
  } catch (e) {
    return e.message;
  }
};

// Crypto
const CMC_API_KEY = process.env.CMC_API_KEY;
const CMC_PARAMS = {
  symbol: "BNB",
  convert: "USD",
};
const CMC_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`;

const getCryptoRate = async () => {
  try {
    const res = await axios.get(CMC_URL, {
      params: CMC_PARAMS,
      headers: {
        Accepts: "application/json",
        "X-CMC_PRO_API_KEY": CMC_API_KEY,
      },
    });
    return res.data.data;
  } catch (e) {
    return e.message;
  }
};

app.get("/info", async (req, res) => {
  const weatherData = await getWeather();
  const cryptoData = await getCryptoRate();
  const response = {
    weatherData,
    cryptoData,
  };
  res.send(response);
});
