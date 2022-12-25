import { Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadModal from "../components/DownloadModal";
import backgroundVideo from "../assets/background.mp4";
import landingImage from "../assets/landing.png";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/product");
  };


  return (
    <div>
      <div className="videoMain">
        <div className="videoOverlay" />
        <video
          autoPlay
          loop
          muted
          styles={{ position: "fixed" }}
          src={backgroundVideo}
        />
        <div className="videoContent">
          <Typography
            variant="h3"
            textAlign="center"
            marginBottom={5}
            style={{ color: "white", fontWeight: "bold" }}
          >
            Passwords are in the past!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ pt: 2, pb: 2, pl: 5, pr: 5 }}
            style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
            onClick={handleOpen}
          >
            Download the Get In app
          </Button>
        </div>
      </div>
      <Box
        minHeight={"80vh"}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          maxWidth={"80vw"}
          sx={{
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Grid item xs={12} md={4} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              The smarter way to login
            </Typography>
            <Typography variant="body1" marginBottom={8}>
              Login to websites or apps with just a tap on your phone. Get In
              removes the need for passwords, which makes login easier and more
              secure.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                maxWidth: 300,
              }}
              sx={{ pt: 3, pb: 3, pl: 5, pr: 5 }}
              onClick={navigateProduct}
            >
              How it works
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <img src={landingImage} alt="app" style={{ maxHeight: 500 }} />
          </Grid>
        </Grid>
      </Box>
      <Box
        minHeight={"80vh"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          marginTop={8}
          maxWidth={500}
          inline
          align="center"
        >
          Take control of your digital identity
        </Typography>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={"50vw"}
          sx={{
            marginTop: 17,
            marginBottom: 20,
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <LockOpenIcon
              color="primary"
              sx={{
                fontSize: "8rem",
                marginBottom: 7,
              }}
            />
            <Typography
              variant="h5"
              marginBottom={3}
              fontWeight="bold"
              inline
              align="center"
            >
              We offer an easy and secure login
            </Typography>
            <Typography variant="body1" marginBottom={8} inline align="center">
              When there's no passwords, there's no need to remember them or be
              afraid to lose them.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <PersonAddAltIcon
              color="primary"
              sx={{
                fontSize: "8rem",
                marginBottom: 7,
              }}
            />
            <Typography
              variant="h5"
              marginBottom={3}
              fontWeight="bold"
              inline
              align="center"
            >
              Simplified registration
            </Typography>
            <Typography variant="body1" marginBottom={8} inline align="center">
              Increase user growth by simplifying the registration process
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <PhonelinkLockIcon
              color="primary"
              sx={{
                fontSize: "8rem",
                marginBottom: 7,
              }}
            />
            <Typography
              variant="h5"
              marginBottom={3}
              fontWeight="bold"
              inline
              align="center"
            >
              Manage your digital identity
            </Typography>
            <Typography variant="body1" marginBottom={8} inline align="center">
              We build the tools which allow people all over the world to manage
              their digital identities
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <DownloadModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Home;
