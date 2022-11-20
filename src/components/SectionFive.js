import React from "react";
import Example from "./Carousel/Carousel";
import {Box} from "@mui/system";

const SectionFive = () => {
  return (
    <Box component="div" >
      <Box sx={{textAlign:"center",padding:"20px"}}>OUR CUSTOMERS SHARE</Box>
      <Box component="img" src={require("../images/logo-leaf.png")}/>
      <Example />
    </Box>
  );
};

export default SectionFive;
