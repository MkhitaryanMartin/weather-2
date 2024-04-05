import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./action";
import { getDay } from "../../utilits/getDay";
import { getToday } from "../../utilits/today";

const initialState = {
    data:null,
    loader: false,
    error:"",
    value: {
        searchValue: "",
        temperature: "metric"
      },
    day: getToday()
}

const weatherReducer = createSlice({
    name:"weather",
    initialState: initialState,
    reducers:{
        setValue : (state, action)=>{
            state.value = {...state.value, [action.payload.eventName]: action.payload.newValue}
        },
        setError : (state, action)=>{
            state.error = ""
        },
        setData : (state, action)=>{
            state.data = {...state.data, ...action.payload}
        },
        setDay :(state, action)=>{
            state.day = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.data = action.payload
            state.loader = false
            state.error = ""
                   
        })
        .addCase(fetchWeather.pending, (state, action)=>{
            state.loader = true
                   
        })
        .addCase(fetchWeather.rejected, (state, action)=>{
            state.error = action.payload;
            state.loader = false
                   
        })
    }
});

export const {setValue, setError, setData, setDay} = weatherReducer.actions
export default weatherReducer.reducer;