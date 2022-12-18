import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Business() {
  let navigate = useNavigate();

  const navigateContact = () => {
    navigate("/contact");
  };
  return (
    <Box
      minHeight={"83vh"}
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
        maxWidth={"60vw"}
      >
        <Typography
          variant="h2"
          textAlign="center"
          marginTop={20}
          marginBottom={3}
        >
          Business platform
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={5}>
          We are currently developing a platform which will allow businesses to
          quickly and easily implement Get In as a login option to their
          service. The platform will have a free base with optional premium
          features.
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={5}>
          Are you interested to be one of our first business partners?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ pt: 2, pb: 2, pl: 5, pr: 5 }}
          style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
          onClick={navigateContact}
        >
          Contact us!
        </Button>
      </Box>
    </Box>
  );
}

export default Business;
