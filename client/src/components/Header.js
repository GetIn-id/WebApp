import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";

const logo = require("../assets/GetIn2.2.png");

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigateHome = () => {
    navigate("/");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  const navigateProduct = () => {
    navigate("/product");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

    const navigateLogin = () => {
    window.location.replace("http://auth.getin.id")
  };

  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        width={"100vw"}
        height={"10vh"}
      >
        <Toolbar>
          {isMobile ? (
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop={2}
            >
              <Grid
                item
                xs={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <DrawerComponent />
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={logo}
                  alt="logo"
                  onClick={navigateHome}
                  style={{ maxWidth: 100, cursor: "pointer" }}
                />
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Try it
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                md={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={logo}
                  alt="logo"
                  onClick={navigateHome}
                  style={{ marginTop: 10, maxWidth: 130, cursor: "pointer" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h7" component="div"></Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h7"
                  onClick={navigateProduct}
                  component="div"
                  style={{ cursor: "pointer" }}
                >
                  Product
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h7"
                  onClick={navigateAbout}
                  component="div"
                  style={{ cursor: "pointer" }}
                >
                  About us
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h7"
                  onClick={navigateContact}
                  component="div"
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  onClick={setOpen}
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Try it
                </Button>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Coming soon
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This feature is under development.
          </Typography>
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
export default Header;
