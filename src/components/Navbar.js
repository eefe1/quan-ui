import React from "react";
import { Box } from "@mui/material";
import quanlogo from '../images/quanlogo.svg';
import NavigationBar from "./NavigationBar";


export default function Navbar() {
  return (
    <Box sx={{ backgroundColor: "#261a3d", display: "flex",justifyContent: 'space-between', p:1.5 }}>
      <img src={quanlogo} alt='logo'/>
      <NavigationBar/>
      <Box sx={{color:'#463A6A', cursor:'pointer'}}>LOG OUT</Box>
    </Box>
  );
}
