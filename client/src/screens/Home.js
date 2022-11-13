import { Box, Typography, Button, Modal, Link } from "@mui/material";
import Card from "../components/Card";
import React, { useState } from "react";
import { Container } from "@mui/system";

const logo = require("../assets/logo_black.png");

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box minHeight={"80vh"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="70vw"
        paddingLeft={"15vw"}
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
        <Typography
          variant="h4"
          textAlign="center"
          color="text.secondary"
          marginBottom={5}
        >
          Smooth, Safe and Effortless sign in
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <Card
          title="Smooth"
          subtitle="no registration"
          body="You don't need to register when signing in to a website or service with Get In for the first time. It works the same no matter if it's the first time you sign in or the hundreth time. No more time consuming registration processes."
        ></Card>
        <Card
          title="Safe"
          subtitle="secured by cryptogrophy"
          body="Sign in uses secure and thoroughly tested cryptogrophy. It's the same protocol as Bitcoin uses. Additionally, all your senstive data is stored on your device, and not on any cloud or centralized servers. No more getting your personal info exploited."
        ></Card>
        <Card
          title="Effortless"
          subtitle="no passwords or emails"
          body="With Get In you don't need to come up with unique and secure passwords. You don't need to remember which email/password combination you used on a certain site. No more resetting your passwords."
        ></Card>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Coming soon
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Our app is not yet published on app stores, but you can test the beta on Iphone here:
          </Typography>
          <Link href="https://testflight.apple.com/join/B54EIjAh">
            Beta test
          </Link>
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
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default Home;
