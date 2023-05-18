import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const AnswersFormGroup = () => {
  const rows = [
    "Never",
    "Rarely",
    "Occasionaly",
    "Sometimes",
    "Frequently",
    "Usually",
    "Always",
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "row", color: "#463A6A",fontSize:'8px' }}>
      <FormGroup  aria-label="position" row>
        {rows.map((row, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    width: '40px',
                    height: '40px',
                    color: "#463A6A",
                    strokeWidth: 0.1
                  },
                }}
              />
            }
            label={row}
            labelPlacement="bottom"
          />
        ))}
      </FormGroup>
    </Box>
  );
};
const Card = ({ label, text }) => {
  return (
    <Box
      gap={4}
      sx={{
        backgroundColor: "#261a3d",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography component="div" align="center">
        <Box sx={{ fontWeight: "medium", color: "#ffcd35" }}>{label}</Box>
        <Box sx={{ fontWeight: "medium", color: "#ffffff" }}>{text}</Box>
      </Typography>
      <AnswersFormGroup />
    </Box>
  );
};

export default Card;
