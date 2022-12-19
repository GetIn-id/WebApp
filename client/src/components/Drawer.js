import React, { useState } from "react";
import { Drawer, List, ListItem, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  let navigate = useNavigate();

  const navigateHome = () => {
    setOpenDrawer(false);
    navigate("/");
  };

  const navigateContact = () => {
    setOpenDrawer(false);
    navigate("/contact");
  };

  const navigateProduct = () => {
    setOpenDrawer(false);
    navigate("/product");
  };

  const navigateBusiness = () => {
    setOpenDrawer(false);
    navigate("/business");
  };

  const navigateAbout = () => {
    setOpenDrawer(false);
    navigate("/about");
  };
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          },
        }}
      >
        <List>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={navigateHome}
              startIcon={<HomeIcon />}
              sx={{ minWidth: "40vw" }}
            >
              Home
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={navigateProduct}
              startIcon={<SmartphoneIcon />}
              sx={{ minWidth: "40vw" }}
            >
              Mobile app
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={navigateBusiness}
              startIcon={<BusinessIcon />}
              sx={{ minWidth: "40vw" }}
            >
              Businesses
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={navigateAbout}
              startIcon={<InfoIcon />}
              sx={{ minWidth: "40vw" }}
            >
              About us
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={navigateContact}
              startIcon={<ContactPageIcon />}
              sx={{ minWidth: "40vw" }}
            >
              Contact
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
