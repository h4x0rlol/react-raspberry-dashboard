import { useEffect, useState } from "react";
import { Currency } from "./components/Currency";
import { Raspberry } from "./components/Raspberry";
import { RoomSensors } from "./components/RoomSensors";
import { Weather } from "./components/Weather";
import axios from "axios";
import { format, getDate, getYear } from "date-fns";
import { enUS } from "date-fns/locale";

const API_URL = "http://localhost:5000/info";

const App = () => {
  const [responseData, setResponseData] = useState();
  const [requestTime, setRequestTime] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const time = new Date().toLocaleTimeString().slice(0, -3);
      setRequestTime(time);
      const res = await axios.get(API_URL);
      setResponseData(res.data);
      setLoading(false);
      setErrors(null);
    } catch (e) {
      console.log(e);
      setErrors(e.message);
      setLoading(false);
    }
  };

  const getCurrentDate = () => {
    const month = format(new Date(), "LLLL", { locale: enUS }).slice(0, 3);
    const dayName = format(new Date(), "EEEE");
    const year = getYear(new Date());
    const day = getDate(new Date());
    setCurrentDate({
      month,
      dayName,
      year,
      day,
    });
  };

  useEffect(() => {
    getCurrentDate();
    fetchData();
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex  justify-center app items-center">
      {errors && <div>{errors.message}</div>}

      {loading && !errors ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-whiteborder-t-2 border-b-2 border-black" />
        </div>
      ) : (
        <div className="w-full lg:px-60  justify-center container mx-auto ">
          <div className="flex flex-wrap w-full lg:w-auto  ">
            <Weather />
            <RoomSensors />
          </div>
          <div className="flex flex-wrap w-full shadow-xl ">
            <Currency />
            <Raspberry />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
