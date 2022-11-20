import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import { Toolbar } from "@mui/material";

const SectionOne = () => {
  return (
    <Box component="div">
      <Box
        component="img"
        sx={{
          height: "fit content",
          width: "100%",
        }}
        alt=""
        src={require("../images/sectionOne.jpg")}
      />
      <Box
        component="div"
        sx={{
          height: "fit content",
          width: "100%",
          backgroundColor: "#001524",
          padding: "40px 20px",
          justifyContents: "center",
        }}
      >
        <Grid container sx={{ color: "white" }}>
          <Grid item xs={12} md={4} xl={4} l={4}>
            <Box sx={{margin:"10px 25px",padding:"20px", backgroundColor:"#1c2f3c"}}>
              <Toolbar>ECO-FRIENDLY</Toolbar>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} xl={4} l={4}>
            <Box sx={{margin:"10px 25px",padding:"20px", backgroundColor:"#1c2f3c"}}>
              <Toolbar>AFFORDABLE</Toolbar>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} xl={4} l={4}>
            <Box sx={{margin:"10px 25px",padding:"20px", backgroundColor:"#1c2f3c"}}>
              <Toolbar>LESS CHEMICAL</Toolbar>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionOne;
