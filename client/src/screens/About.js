import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../components/Card";
import banner from "../assets/GreenBannerFat2.2.png";
import login from "../assets/login.png";
import vision from "../assets/vision.jpeg";
import mission from "../assets/mission.png";

const maja = require("../assets/maja.png");
const eb = require("../assets/eb.png");
const grape = require("../assets/grape.png");
const skarsh = require("../assets/skarsh.png");

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Box
        minHeight={"30vh"}
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
          paddingTop={"1vh"}
          maxWidth={"90vw"}
        >
          <Typography variant="h2" marginTop={10}>
            About us
          </Typography>

          <Typography variant="body1" marginTop={3} inline align="center">
            Get In provide passwordless login for users and businesses globally
          </Typography>
        </Box>
      </Box>
      {isMobile ? (
        <>
          <Box
            minHeight={"60vh"}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            sx={{ pt: 0, pb: 5, pl: 3, pr: 2 }}
          >
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              Easy and secure login
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              We are offering users all over the world to login effortlessly by
              just a tap on their phone. Our solution provides people with the
              option to login without passwords, which increase both the user
              experience and security.
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={login} alt="app" style={{ maxWidth: 500 }} />
            </Box>

            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={5}
              fontWeight="bold"
            >
              Our vision
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              We will enable people all over the world to take control of, and
              manage, their digital identity
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={vision} alt="app" style={{ maxWidth: 500 }} />
            </Box>

            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={5}
              fontWeight="bold"
            >
              Our mission
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              Around one billion people globally have no way to prove their
              identity. We want to support the achievement of the Sustainable
              Development Goal Target 16.9 on providing legal identity for all.
              We do this by offering a tool to manage ones digital identity.
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={mission} alt="app" style={{ maxWidth: 500 }} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            minHeight={"40vh"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              alignItems="center"
              maxWidth={"80vw"}
              sx={{
                marginTop: 0,
                marginBottom: 1,
              }}
            >
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  Easy and secure login
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  We are offering users all over the world to login effortlessly
                  by just a tap on their phone. Our solution provides people
                  with the option to login without passwords, which increase
                  both the user experience and security.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={0}
              >
                <img src={login} alt="app" style={{maxWidth: 500 }} />
              </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              alignItems="center"
              maxWidth={"80vw"}
              sx={{
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={0}
              >
                <img src={vision} alt="app" style={{ maxWidth: 500 }} />
              </Grid>
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  Our vision
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  We will enable people all over the world to take control of,
                  and manage, their digital identity
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              alignItems="start"
              maxWidth={"80vw"}
              sx={{
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} marginTop={5} fontWeight="bold">
                  Our mission
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  Around one billion people globally have no way to prove their
                  identity. We want to support the achievement of the
                  Sustainable Development Goal Target 16.9 on providing legal
                  identity for all. We do this by offering a tool to manage ones
                  digital identity.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={0}
              >
                <img src={mission} alt="app" style={{ maxWidth: 500 }} />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      <Box
        minHeight={"85vh"}
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
          <Typography variant="h4" marginBottom={3} fontWeight="bold">
            Our Team
          </Typography>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            maxWidth={"80vw"}
            sx={{
              marginTop: 1,
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
                title="Maja Ring"
                subtitle="Design and marketing"
                image={maja}
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
                title="Emergency Bread"
                subtitle="Business development"
                image={eb}
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
                title="The Grape"
                subtitle="Frontend development"
                image={grape}
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
                title="Skarsh"
                subtitle="Backend development"
                image={skarsh}
              ></Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default About;
