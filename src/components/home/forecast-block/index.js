import React from "react";
import { Box } from "@mui/material";
import ForestBlockItem from "./forest-block-item";

const ForecastBlock = ({
    data,
    temp,
}) => {
    return (
        <Box textAlign="center" mt="20px">
            <Box display="flex"  sx={{p:{xs:"5px", md:"0 2%"}}}>
            <Box display="flex" width="100%"  flexWrap="wrap" 
            sx={{justifyContent:{xs:"center", md:"space-between", sm:"space-around"}}}>
            {data.list.map((data) => {
                    return <ForestBlockItem data={data} temp={temp} key={data?.dt_txt}/>
                })}
            </Box>
            </Box>
        </Box>
    )
}

export default ForecastBlock;