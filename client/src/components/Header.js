import { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";
import Axios from "axios";
import PopoverContent from "./PopoverContent";

const logo = require("../assets/logoWhite.png");

function Header() {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

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
      if (res.data.id) {
        res.data.username ? setUser(res.data.username) : setUser(res.data.id);
        console.log(res.data);
      } else {
        setUser(null);
      }
    });
  });

  const navigateHome = () => {
    navigate("/");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateFAQ = () => {
    navigate("/FAQ");
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
      <AppBar position="static" color="primary" elevation={0} width={"100%"}>
        <Toolbar>
          {isMobile ? (
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ pt: 2, pb: 2 }}
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
                    color="secondary"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Try it
                  </Button>
                ) : (
                  <Button
                    onClick={navigateLogout}
                    variant="contained"
                    color="secondary"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Logout
                  </Button>
                )}
              </Grid>
              {isMobile && user !== null ? (
                <Typography
                  variant="h7"
                  component="div"
                  maxWidth={"70vw"}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {" "}
                  Logged in as: {user}
                </Typography>
              ) : (
                <Typography
                  variant="h7"
                  component="div"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                ></Typography>
              )}
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
                  style={{ marginTop: 1, maxWidth: 130, cursor: "pointer" }}
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
                  component="div"
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  aria-haspopup="true"
                  onMouseEnter={popoverEnter}
                  onMouseLeave={popoverLeave}
                  ref={popoverAnchor}
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
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold",
                  }}
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
                  onClick={navigateFAQ}
                  component="div"
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  sx={{ pt: 4, pb: 4 }}
                >
                  FAQ
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
                    color="secondary"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Try it
                  </Button>
                ) : (
                  <Button
                    onClick={navigateLogout}
                    variant="contained"
                    color="secondary"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Log Out
                  </Button>
                )}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Popover
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        sx={{
          pointerEvents: "none",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        <Box sx={{ pointerEvents: "auto" }}>
          <PopoverContent />
        </Box>
      </Popover>
    </Box>
  );
}

export default Header;
