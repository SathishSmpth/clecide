import * as React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import SearchMenu from "./SearchMenu";
import Cart from "../../images/cart.svg";
import User from "../../images/user.svg";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#ecf1ed", color: "black", padding: "20px 10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={require("../../images/logo.png")}
            alt="Clecide"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          />
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <SearchMenu />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <Box
                component="img"
                src={require("../../images/logo.png")}
                alt="Clecide"
              />
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">All Products</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent:"right",
              color:"#0000",
              alignItems: "center",
            }}
          >
            <Tabs aria-label="basic tabs example">
              <Tab
                label="Home"
                onClick={handleCloseNavMenu}
              />
              <Tab
                label="All Products"
                onClick={handleCloseNavMenu}
              />
              <Tab
                label="Contact"
                onClick={handleCloseNavMenu}
              />
            </Tabs>
            <Box
              component="img"
              onClick={handleCloseNavMenu}
              sx={{ padding: "0px 15px" }}
              src={Cart}
            />

            <Box
              component="img"
              onClick={handleCloseNavMenu}
              sx={{ padding: "0px 15px" }}
              src={User}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
