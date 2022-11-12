import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const logo = require('../assets/GetIn2.2.png');

function Header() {
    let navigate = useNavigate();

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent' elevation={0}>
        <Toolbar>
        <img src={logo} alt="logo" onClick={navigateHome} style={{maxWidth: 130, paddingTop: 10, paddingBottom: 10, paddingRight: "10vw", paddingLeft: "5vw", cursor: "pointer"}} />
          <Typography variant="h7" onClick={navigateProduct} component="div" sx={{ flexGrow: 1 }} style={{cursor: "pointer"}}>
            Product
          </Typography>
          <Typography variant="h7" onClick={navigateAbout} component="div" sx={{ flexGrow: 1 }} style={{cursor: "pointer"}}>
            About us
          </Typography>
          <Typography variant="h7" onClick={navigateContact} component="div" sx={{ flexGrow: 1 }} style={{cursor: "pointer"}}>
            Contact
          </Typography>
          <Button variant="contained" color="primary" style={{ color: "white", fontWeight: "bold"}}>Try it out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;