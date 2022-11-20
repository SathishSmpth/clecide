import { Box } from "@mui/system";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const SubSecTwo = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Grid
        container
        sx={{
          fontFamily: "'Merriweather',serif",
          color: "#333333",
        }}
      >
        <Grid item xs={12} md={4} l={4} xl={4}>
          <Box>
            <Card
              sx={{
                margin: "10px",
                height: "300px",
                width: "352px",
                fontWeight: "600",
                padding:"20px"
              }}
            >
              <CardContent>
                <Box component="h2" sx={{ margin: "20px 0px" }}>
                  Household Products
                </Box>
                <Typography>Bulk Orders</Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#8bc34a",
                    padding: "10px 30px",
                    fontSize: "16px",
                    borderRadius: "30px",
                  }}
                >
                  Shop Now
                  <EastIcon />
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} l={4} xl={4}>
          <Box>
            <Card
              sx={{
                margin: "10px",
                height: "300px",
                width: "352px",
                fontWeight: "600",
                padding:"20px"
              }}
            >
              <CardContent>
                <Box component="h2" sx={{ margin: "20px 0px" }}>
                  Instuitional Products
                </Box>
                <Typography>Bulk Orders</Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#8bc34a",
                    padding: "10px 30px",
                    fontSize: "16px",
                    borderRadius: "30px",
                  }}
                >
                  Shop Now
                  <EastIcon />
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} l={4} xl={4}>
          <Box>
            <Card
              sx={{
                margin: "10px",
                height: "300px",
                width: "352px",
                fontWeight: "600",
                padding:"20px"
              }}
            >
              <CardContent>
                <Box component="h2" sx={{ margin: "20px 0px" }}>
                  Combo Pack
                </Box>
                <Typography>Bulk Orders</Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#8bc34a",
                    padding: "10px 30px",
                    fontSize: "16px",
                    borderRadius: "30px",
                  }}
                >
                  Shop Now
                  <EastIcon />
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubSecTwo;
