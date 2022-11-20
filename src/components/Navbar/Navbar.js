import React from "react";
import { Toolbar, Typography, AppBar, Tabs, Tab, Box } from "@mui/material";
import SearchMenu from "./SearchMenu";
import Cart from "../../images/cart.svg";
import User from "../../images/user.svg";

const Navbar = () => {
  
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ecf1ed", color: "#0000", padding: "20px 10px" }}
    >
      <Toolbar>
        <Toolbar>
          <Typography>
            <img src={require("../../images/logo.png")} alt="Clecide" />
          </Typography>
          <SearchMenu/>
        </Toolbar>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tabs aria-label="basic tabs example">
            <Tab label="Home" />
            <Tab label="All Products" />
            <Tab label="Contact" />
          </Tabs>
          <Typography sx={{ padding: "0px 15px" }}>
            <img src={Cart} alt="" />
          </Typography>
          <Typography sx={{ padding: "0px 15px" }}>
            <img src={User} alt="" />
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
