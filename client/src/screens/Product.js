import { Box, Typography, Grid, Link } from "@mui/material";
import Card from "../components/Card";
import React from "react";

const landing = require("../assets/landing.png");
const camera = require("../assets/camera.png");
const auth = require("../assets/auth.png");
const success = require("../assets/success.png");

function Product() {
  return (
    <Box
      minHeight={"80vh"}
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"5vh"}
        maxWidth={"90vw"}
      >
        <Typography variant="h2" textAlign="center" marginTop={1}>
          Our Product
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          marginBottom={5}
        >
          A mobile app for users, and a development kit for businesses
        </Typography>
        <Typography variant="h6" marginBottom={0}>
          Mobile app available on {" "}
          <Link href="https://apps.apple.com/app/get-in/id6444308828">Appstore</Link>
          {" "} and {" "}
          <Link href="https://play.google.com/store/apps/details?id=com.getin">Google Play</Link>
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        maxWidth={"80vw"}
        sx={{
          marginTop: 0,
          marginBottom: 5,
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Card
            title="Step 1"
            subtitle="Open Get In on your phone"
            image={landing}
          ></Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Card
            title="Step 2"
            subtitle="Scan QR code on the website"
            image={camera}
          ></Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Card title="Step 3" subtitle="Verify" image={auth}></Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Card
            title="Step 4"
            subtitle="You are signed in!"
            image={success}
          ></Card>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"5vh"}
        maxWidth={"90vw"}
      >
        <Typography variant="h6" marginBottom={1}>
          SDK for businesses (under development)
        </Typography>
        <Typography variant="body1" marginBottom={10}>
          We are developing an SDK which will let businesses to easily add Get
          In as a sign in option on their website/service.
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
