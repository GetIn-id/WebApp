import { Typography, Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../components/Card";

const maja = require("../assets/maja.png");
const eb = require("../assets/eb.png");
const grape = require("../assets/grape.png");
const skarsh = require("../assets/skarsh.png");

function About() {
  return (
    <Box minHeight={"80vh"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"5vh"}
      >
        <Typography variant="h2" marginTop={1}>
          About us
        </Typography>

        <Typography variant="body1" marginBottom={1}>
          We are a team of four who came together to build in the {" "}
          <Link href="https://makers.bolt.fun/tournaments/1/overview">
            Legends of Lightning Tournament.
          </Link>
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Card
          title="Maja Ring"
          subtitle="Design and marketing"
          image={maja}
        ></Card>
        <Card
          title="Emergency Bread"
          subtitle="Business development"
          image={eb}
        ></Card>
        <Card
          title="The Grape"
          subtitle="Frontend development"
          image={grape}
        ></Card>
        <Card
          title="Skarsh"
          subtitle="Backend development"
          image={skarsh}
        ></Card>
      </Container>
    </Box>
  );
}

export default About;
