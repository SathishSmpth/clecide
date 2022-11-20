import React from "react";
import { Box } from "@mui/system";

const SectionFour = () => {
  return (
    <Box
      component="img"
      sx={{
        maxWidth: "100%",
        padding: "10px",
      }}
      alt=""
      src={require("../images/sectionFour.jpg")}
    />
  );
};

export default SectionFour;
