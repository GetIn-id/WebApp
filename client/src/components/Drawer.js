import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemText>
              <Typography
                variant="body1"
                onClick={navigateHome}
                component="div"
                style={{ cursor: "pointer" }}
              >
                Home
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                variant="body1"
                onClick={navigateProduct}
                component="div"
                style={{ cursor: "pointer" }}
              >
                Product
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                variant="body1"
                onClick={navigateAbout}
                component="div"
                style={{ cursor: "pointer" }}
              >
                About us
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                variant="body1"
                onClick={navigateContact}
                component="div"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Typography>
            </ListItemText>
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
