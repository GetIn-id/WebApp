import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";
import Axios from "axios";

const logo = require("../assets/GetIn2.2.png");

function Header() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://auth.getin.id/user",
    }).then((res) => {
      res.data.id ? setUser(res.data.id) : setUser(null);
      console.log(user);
    });
  });

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
    window.location.replace("https://auth.getin.id/login");
  };

  const navigateLogout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://auth.getin.id/logout",
    }).then((res) => {
      setUser(null);
    });
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
                {user == null ? (
                  <Button
                    onClick={navigateLogin}
                    variant="contained"
                    color="primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Try it
                  </Button>
                ) : (
                  <Button
                    onClick={navigateLogout}
                    variant="contained"
                    color="primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Logout
                  </Button>
                )}
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
                {user == null ? (
                  <Typography variant="h7" component="div"></Typography>
                ) : (
                  <Typography
                    variant="h7"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {" "}
                    Logged in as: {user}
                  </Typography>
                )}
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
                {user == null ? (
                  <Button
                    onClick={navigateLogin}
                    variant="contained"
                    color="primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Try it
                  </Button>
                ) : (
                  <Button
                    onClick={navigateLogout}
                    variant="contained"
                    color="primary"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Log Out
                  </Button>
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
