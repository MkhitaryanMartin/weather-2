import { createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../../service/weatherService";


export const fetchForecast=createAsyncThunk(
    "fetchForecast",
     async (params, thunkApi)=>{
        try {
            const res = await WeatherService.fetchWeather(params);
            console.log(res.data)
          const data = {...res.data, list: res.data.list.filter((item,i)=>{
            if(item["dt_txt"].split(" ")[1].includes("15:00")){
             return true
            }
          })}
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)