import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getDay} from '../../utilits/getDay';

export default function ForecastSelect({
    handleChange,
    options,
    value,
    label="",

}) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 80}}>
    {/* <InputLabel id="demo-simple-select-standard-label">{label}aa</InputLabel> */}
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={value}
      onChange={(e)=>handleChange(e.target.value)}
      label={label}
      sx={{color:"white", "& svg":{
        color:"white"
      }}}
    >
  {
    options.map((option)=> {
        return <MenuItem value={option["dt_txt"].split(" ")[0]} key={option["dt_txt"]}>{getDay(option["dt_txt"])}</MenuItem>
    })
  }
    </Select>
  </FormControl>
  );
}

