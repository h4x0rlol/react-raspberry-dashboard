require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
app.use(cors());

// Room air quality sensors
const SCRIPT_PATH = "/home/pi/Adafruit_Python_DHT/examples/AdafruitDHT.py 22 4";
const regex = /[+-]?\d+(\.\d+)?/g; // to extract floats from string

const getSensorsData = async () => {
  try {
    const { stdout } = await exec(SCRIPT_PATH);
    const floats = stdout.match(regex).map((v) => parseFloat(v));
    return floats; // 0 - temp, 1 - humidity
  } catch (e) {
    console.log(e?.message);
    return [e?.message, e?.message];
  }
};

// Raspberry temp
const GPU_TEMP = "vcgencmd measure_temp";
const CPU_TEMP = "cat /sys/class/thermal/thermal_zone0/temp";

const getRaspberryTemp = async () => {
  try {
    const gpu = await exec(GPU_TEMP);
    const cpu = await exec(CPU_TEMP);
    const gpuTemp = gpu.stdout.match(regex).map((v) => parseFloat(v))[0];
    const cpuTemp = Number(Number(cpu.stdout) / 1000).toFixed(1);
    return [gpuTemp, cpuTemp]; // 0 - gpu, 1 - cpu
  } catch (e) {
    console.log(e?.message);
    return [e?.message, e?.message];
  }
};

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

// Request
app.get("/info", async (req, res) => {
  const weatherData = await getWeather();
  const cryptoData = await getCryptoRate();
  const sensorsData = await getSensorsData();
  const raspberryData = await getRaspberryTemp();

  const response = {
    weatherData,
    cryptoData,
    sensorsData: {
      temp: sensorsData[0],
      humidity: sensorsData[1],
    },
    raspberryData: {
      gpu: raspberryData[0],
      cpu: raspberryData[1],
    },
  };

  res.send(response);
});
