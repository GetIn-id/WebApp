import { Box, Typography, Container } from "@mui/material";
import Card from "../components/Card";
import React from "react";

const landing = require("../assets/landing.png");
const camera = require("../assets/camera.png");
const auth = require("../assets/auth.png");
const success = require("../assets/success.png");

function Product() {
  return (
    <Box minHeight={"80vh"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        paddingLeft={"10vw"}
        paddingTop={"5vh"}
      >
        <Typography variant="h2" textAlign="center" marginTop={1}>
          Our Product
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          color="text.secondary"
          marginBottom={5}
        >
          A mobile app for users, and a development platform for businesses
        </Typography>
      </Box>
      <Typography
          variant="h5"
          paddingLeft={"10vw"}
          marginBottom={1}
        >
          Mobile app (coming soon to app stores)
        </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 1,
          marginBottom: 5,
        }}
      >
        <Card
          title="Step 1"
          subtitle="Open Get In on your phone"
          image={landing}
        ></Card>
        <Card
          title="Step 2"
          subtitle="Scan QR code on the website"
          image={camera}
        ></Card>
        <Card title="Step 3" subtitle="Verify sign in" image={auth}></Card>
        <Card
          title="Step 4"
          subtitle="You are signed in!"
          image={success}
        ></Card>
      </Container>
      <Typography
          variant="h5"
          paddingLeft={"10vw"}
          marginBottom={1}
        >
          SDK for businesses (under development)
        </Typography>
        <Typography
          variant="body1"
          paddingLeft={"10vw"}
          marginBottom={10}
        >
          We are developing an SDK which will let businesses to easily add Get In as a sign in option on their website/service.
        </Typography>
    </Box>
  );
}

export default Product;