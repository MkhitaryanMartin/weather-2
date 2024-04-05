import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import CustomizedSnackbars from "../../components/snackbar";
import { Box} from "@mui/material";
import Loader from "../../components/loader";
import Map from "../../components/map";
import ForecastSelect from "../../components/forecast-select";
import { getToday } from "../../utilits/today";
import { setData, setDay } from "../../store/waether/reducer";


function Home() {
  const { data, loader, value, error, day } = useSelector((state) => state.weather);
  const { data: forecastData } = useSelector((state) => state.forecast);
  const [open, setOpen] = useState(!!error);
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
  dispatch(setDay(day))
  }

  console.log(day)
  return (
    <Box position="relative" minHeight={"93vh"} minWidth="280px" >
      {forecastData.list && <ForecastSelect options={forecastData.list} value={day} handleChange={handeSelect}/>}
      <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"
    zIndex={"-10"}
    sx={{background:"rgba(0, 0, 0, 0.8)"}}
    pt="250px"
    />
      {loader ? <Loader /> : data && <WeatherBlock data={data} temp={value.temperature} loader={loader} />}
      {/* {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature} />} */}
      <CustomizedSnackbars open={open} handleClose={handleClose} text={error} />
      {data?.coord && <Map  lat={data.coord.lat} lon={data.coord.lon}/>}
    </Box>
  )
}


export default Home;