import { Box, Button } from "@mui/material";

function Map({ lon, lat }) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.188146403812!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lon}!5e0!3m2!1sen!2sua!4v1649132248902!5m2!1sen!2sua`;

  return (
    <Box
    mt="60px"
    >
      <iframe
        title="Google Maps"
        width="90%"
        height="500"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
      {/* <Button variant="contained">Hidden map</Button>:"" */}
    </Box>
  );
}

export default Map;
