import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const customButton = {
  mainButton: {
    border: "1px solid #463A6A",
    borderRadius: "12px",
    color: "#000000",
    height: "10px",
    fontSize: "7px",
    backgroundColor: "#ffffff",
  },
  emptyCircle: {
    border: "1px solid #463A6A",
    borderRadius: "50%",
    height: "10px",
    width: "10px",
  },
  yellowCircle: {
    border: "1px solid #463A6A",
    backgroundColor: "#ffcd35",
    borderRadius: "50%",
    height: "10px",
    width: "10px",
  },
};

const NavigationBar = () => {
  return (
    <Box
      gap={2}
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Button sx={customButton.mainButton}>IN GENERAL</Button>
      <Box sx={customButton.emptyCircle}></Box>
      <Box sx={customButton.emptyCircle}></Box>
      <Box sx={customButton.yellowCircle}></Box>
    </Box>
  );
};

export default NavigationBar;
