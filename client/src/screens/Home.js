import {
  Box,
  Typography,
  Button,
  Modal,
  Grid,
} from "@mui/material";
import Card from "../components/Card";
import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
//const logo = require("../assets/logo_black.png");

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigateApple = () => {
    window.location.href = "https://apps.apple.com/app/get-in/id6444308828";
  };

  const navigateGoogle = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.getin";
  };

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
        width="70vw"
        paddingTop={"5vh"}
      >
        {/* <img
          src={logo}
          alt="logo"
          style={{ maxWidth: 300, padding: 10, cursor: "pointer" }}
        /> */}
        <Typography variant="h2" textAlign="center" margin={1}>
          Get In
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={5}>
          Passwords are in the past!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          textColor="white"
          style={{ color: "white", fontWeight: "bold" }}
          onClick={handleOpen}
        >
          Download
        </Button>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
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
          marginTop={2}
        >
          <Card
            title="Smooth"
            subtitle="no registration"
            body="You don't need to register when signing in to a website or service with Get In. It works the same no matter if it's the first time you sign in or the hundreth time. No more time consuming registration processes."
          ></Card>
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
          <Card
            title="Safe"
            subtitle="secured by cryptogrophy"
            body="Get in use secure and thoroughly tested cryptogrophy. It's the same protocol as Bitcoin uses. Additionally, all your senstive data is stored on your device, and not on any cloud or centralized servers. No more getting your personal info exploited."
          ></Card>
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
          <Card
            title="Effortless"
            subtitle="no passwords or emails"
            body="With Get In you don't need to come up with unique and secure passwords. You don't need to remember which email/password combination you used on a certain site. No more resetting your passwords."
          ></Card>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Get our app
          </Typography>
          <Typography sx={{ mt: 2 }}>Choose your platform</Typography>
          <Box
            marginTop={1}
            width="80%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              startIcon={<AppleIcon />}
              onClick={navigateApple}
            >
              Appstore
            </Button>
            <Button
              variant="outlined"
              startIcon={<ShopIcon />}
              onClick={navigateGoogle}
            >
              Google Play
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default Home;
