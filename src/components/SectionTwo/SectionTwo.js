import React from 'react';
import SubSectionOne from './SubSecOne';
import SubSectionTwo from './SubSecTwo';
import { Box } from "@mui/system";

const SectionTwo = () => {
  return (
    <Box sx={{backgroundColor:"#f8f6f3",padding:"20px 0px"}}>
      <SubSectionOne/>
      <SubSectionTwo/>
    </Box>
  );
};

export default SectionTwo;