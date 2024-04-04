import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import ForecastBlock from "../../components/home/forecast-block";
import CustomizedSnackbars from "../../components/snackbar";
import { Box, Button } from "@mui/material";
import Loader from "../../components/loader";
import Map from "../../components/map";
import ForecastSelect from "../../components/forecast-select";
import { getToday } from "../../utilits/today";
import { setData } from "../../store/waether/reducer";


function Home() {
  const { data, loader, value, error } = useSelector((state) => state.weather);
  const { data: forecastData } = useSelector((state) => state.forecast);
  const [open, setOpen] = useState(!!error);
  const [day, setDay] = useState(getToday());
  const dispatch = useDispatch()
  

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      setOpen(!!error)
    }
  }, [error])

  const handeSelect =(day)=>{
    const newData = forecastData.list.filter(item=> item["dt_txt"].split(" ")[0] === day);
   dispatch(setData(newData[0]))
   setDay(day)
  }

  return (
    <Box position="relative" minHeight={"93vh"} minWidth="280px">
      {forecastData.list && <ForecastSelect options={forecastData.list} value={day} handleChange={handeSelect}/>}
      <Map />
      {loader ? <Loader /> : data && <WeatherBlock data={data} temp={value.temperature} loader={loader} />}
      {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature} />}
      <CustomizedSnackbars open={open} handleClose={handleClose} text={error} />
    </Box>
  )
}


export default Home;