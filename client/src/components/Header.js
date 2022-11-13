import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

const logo = require('../assets/GetIn2.2.png');

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position="static" color='transparent' elevation={0} width={"100vw"} height={"10vh"}>
        <Toolbar>
        {/* <img src={logo} alt="logo" onClick={navigateHome} style={{maxWidth: 130, paddingTop: 10, paddingBottom: 10, paddingRight: "10vw", paddingLeft: "5vw", cursor: "pointer"}} /> */}
        <img src={logo} alt="logo" onClick={navigateHome} style={{maxWidth: 130, padding: 10, cursor: "pointer"}} />
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Typography variant="h7" onClick={navigateProduct} component="div" sx={{ flexGrow: 0.1 }} style={{cursor: "pointer"}}>
            Product
          </Typography>
          <Typography variant="h7" onClick={navigateAbout} component="div" sx={{ flexGrow: 0.1 }} style={{cursor: "pointer"}}>
            About us
          </Typography>
          <Typography variant="h7" onClick={navigateContact} component="div" sx={{ flexGrow: 0.1 }} style={{cursor: "pointer"}}>
            Contact
          </Typography>
          <Button onClick={handleOpen} variant="contained" color="primary" style={{ color: "white", fontWeight: "bold"}}>Try it out</Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Coming soon
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            This feature is under development.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default Header;