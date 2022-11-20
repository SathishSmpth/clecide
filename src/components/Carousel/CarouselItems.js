import React from "react";
import { Paper} from "@mui/material";
import { Box } from "@mui/system";

const CarouselItems = ({ Items }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        textAlign: "center",
        padding: "60px",
      }}
    >
      <Box component="h1" sx={{fontsize:"24px"}}>{Items.description}</Box>
      <h6>{Items.heading}</h6>
      <div>{Items.customer}</div>
    </Paper>
  );
};

export default CarouselItems;
