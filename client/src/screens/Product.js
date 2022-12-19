import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DownloadModal from "../components/DownloadModal";
import landing from "../assets/landing.png";
import camera from "../assets/camera.png";
import auth from "../assets/auth.png";
import success from "../assets/success.png";

function Product() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {isMobile ? (
        <div>
          <Box
            minHeight={"50vh"}
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
              maxWidth={"90vw"}
            >
              <Typography
                variant="h2"
                textAlign="center"
                marginTop={10}
                marginBottom={3}
              >
                How it works
              </Typography>
              <Typography variant="body1" textAlign="center" marginBottom={5}>
                Your new login experience begins with the Get In app.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ pt: 2, pb: 2, pl: 5, pr: 5 }}
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                onClick={handleOpen}
              >
                Get the app
              </Button>
            </Box>
            <DownloadModal open={open} handleClose={handleClose} />
          </Box>
          <Box
            minHeight={"60vh"}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            sx={{ pt: 0, pb: 5, pl: 3, pr: 2 }}
          >
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              1. Open Get In on your phone
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              This is the landing page, no matter if you open the app for the
              first time or the 100th time. You don't need to register or go
              through any other setup steps. The cryptographic keys which are
              used to login are generated automatically behind the scenes. They
              are stored on your device and never shared with anyone else.
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={landing}
                alt="app"
                style={{
                  maxHeight: 500,
                }}
              />
            </Box>
            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={5}
              fontWeight="bold"
            >
              2. Press "QR code"
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              This opens up the camera on your phone. Use it to scan a QR code
              on the website where you want to login. If you want to login on
              your phone, just tap on the QR code instead. You can test it by
              pressing the "Try it" button on the top right of this page.
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={camera} alt="app" style={{ maxHeight: 500 }} />
            </Box>
            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={5}
              fontWeight="bold"
            >
              3. Accept the login
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              When the QR code has been scanned, you are navigated to this
              verification screen. Here you also have the option to share
              username and email. If you enable this, your profile on the
              website will automatically have this information about you when
              you login for the first time - so you don't have to fill it in
              manually. Press the "Get In" button to login, or press cancel if
              you changed your mind.
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={auth} alt="app" style={{ maxHeight: 500 }} />
            </Box>
            <Typography
              variant="h4"
              marginBottom={3}
              marginTop={5}
              fontWeight="bold"
            >
              4. Success!
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              You are logged in! No passwords and no registration processes.
              Passwords are in the past!
            </Typography>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={success} alt="app" style={{ maxHeight: 500 }} />
            </Box>
          </Box>
        </div>
      ) : (
        <div>
          <Box
            minHeight={"50vh"}
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
              maxWidth={"90vw"}
            >
              <Typography
                variant="h2"
                textAlign="center"
                marginTop={20}
                marginBottom={3}
              >
                How it works
              </Typography>
              <Typography variant="body1" textAlign="center" marginBottom={5}>
                Your new login experience begins with the Get In app.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ pt: 2, pb: 2, pl: 5, pr: 5 }}
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                onClick={handleOpen}
              >
                Get the app
              </Button>
            </Box>
            <DownloadModal open={open} handleClose={handleClose} />
          </Box>
          <Box
            minHeight={"60vh"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  1. Open Get In on your phone
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  This is the landing page, no matter if you open the app for
                  the first time or the 100th time. You don't need to register
                  or go through any other setup steps. The cryptographic keys
                  which are used to login are generated automatically behind the
                  scenes. They are stored on your device and never shared with
                  anyone else.
                </Typography>
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
                <img src={landing} alt="app" style={{ maxHeight: 500 }} />
              </Grid>
            </Grid>
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
                <img src={camera} alt="app" style={{ maxHeight: 500 }} />
              </Grid>
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  2. Press "QR code"
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  This opens up the camera on your phone. Use it to scan a QR
                  code on the website where you want to login. If you want to
                  login on your phone, just tap on the QR code instead. You can
                  test it by pressing the "Try it" button on the top right of
                  this page.
                </Typography>
              </Grid>
            </Grid>
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
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  3. Accept the login
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  When the QR code has been scanned, you are navigated to this
                  verification screen. Here you also have the option to share
                  username and email. If you enable this, your profile on the
                  website will automatically have this information about you
                  when you login for the first time - so you don't have to fill
                  it in manually. Press the "Get In" button to login, or press
                  cancel if you changed your mind.
                </Typography>
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
                <img src={auth} alt="app" style={{ maxHeight: 500 }} />
              </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              maxWidth={"80vw"}
              sx={{
                marginTop: 5,
                marginBottom: 10,
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
                <img src={success} alt="app" style={{ maxHeight: 500 }} />
              </Grid>
              <Grid item xs={12} md={4} display="flex" direction="column">
                <Typography variant="h4" marginBottom={3} fontWeight="bold">
                  4. Success!
                </Typography>
                <Typography variant="body1" marginBottom={8}>
                  You are logged in! No passwords and no registration processes.
                  Passwords are in the past!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Product;
