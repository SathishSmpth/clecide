import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001524",
        color: "#8bc34a",
      }}
    >
      <Grid container sx={{ padding: "25px 0px" }}>
        <Grid item xs={12} md={3} l={3} xl={3} sx={{padding:"25px"}}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              padding: "10px",
              margin: "50px 20px",
            }}
            alt=""
            src={require("../images/logo.png")}
          />
        </Grid>
        <Grid item xs={12} md={3} l={3} xl={3} sx={{padding:"25px"}}>
          <Box component="h6" sx={{ color: "white", fontSize: "32px" }}>
            MENU
          </Box>
          <Box component="div">
            <Box>Home</Box>
            <Box>Products</Box>
            <Box>Contact Us</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} l={3} xl={3} sx={{padding:"25px"}}>
          <Box component="h6" sx={{ color: "white", fontSize: "32px" }}>
            ACCOUNT
          </Box>
          <Box component="div">
            <Box>My Account</Box>
            <Box>My Cart</Box>
            <Box>Wishlist</Box>
            <Box>Check Out</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} l={3} xl={3} sx={{padding:"25px"}}>
          <Box component="h6" sx={{ color: "white", fontSize: "32px" }}>
            CONTACT INFO
          </Box>
          <Box component="div">
            <Box>47,Bazaar Road, Pallavaram</Box>
            <Box>Chennai - 600043</Box>
            <Box component="br"></Box>
            <Box>+91 9791197017</Box>
            <Box>mailbox@haleycp.com</Box>
            <Box sx={{ padding: "10px 0px", color: "white" }}>
              <FacebookIcon />
              <InstagramIcon sx={{ margin: "0px 30px" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ color: "white", borderTop: "1px solid white", padding: "25px" }}
      >
        <Grid item xs={12} md={6} l={6} xl={6}>
          <Box component="h5">
            COPYRIGHT ©2021 HALEY CONSUMER PRODUCTS PRIVATE LIMITED
          </Box>
        </Grid>
        <Grid item xs={12} md={6} l={6} xl={6} sx={{ textAlign: "right" }}>
          Design by Compunet Connections.
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
