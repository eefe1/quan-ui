import { Box } from "@mui/system";
import React from "react";
import Card from "./Card";

export default function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        label={"During the past 2 weeks"}
        text={"I have been eating and drinking healthily"}
      />
    </Box>
  );
}
