import { Box, Typography, Button, Modal } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

function DownloadModal({ open, handleClose }) {
  const navigateApple = () => {
    window.location.href = "https://apps.apple.com/app/get-in/id6444308828";
  };

  const navigateGoogle = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.getin";
  };
  return (
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

export default DownloadModal;
