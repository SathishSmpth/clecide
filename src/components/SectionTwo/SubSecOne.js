import React from "react";
import { Box } from "@mui/system";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";

const SubSectionOne = () => {
  return (
    <Box>
      <Grid container sx={{margin:"40px 0px",backgroundColor:"white"}}>
        <Grid item xs={12} md={3} l={3} xl={3} >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                padding: "10px",
              }}
              alt=""
              src={require("../../images/houseHold.jpeg")}
            />
        </Grid>
        <Grid item xs={12} md={9} l={9} xl={9}>
          <Grid container>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt=""
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt=""
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt=""
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt=""
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt=""
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} l={3} xl={3}>
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="fit-content"
                  image={require("../../images/secTwoCardImgOne.jpg")}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", fontSize: "1em", color: "#333" }}
                  >
                    <b>
                      CLECIDE Combo Of Furniture Cleaner Trigger Spray and
                      Antistatic Glass &amp; Window Cleaner Trigger Spray
                    </b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
                  }}
                >
                  <Rating sx={{ margin: "auto" }} name="read-only" readOnly />
                </Box>
                <CardActions
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: "auto",
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
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubSectionOne;
