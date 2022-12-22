import { Typography, Link, Box } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box
      minHeight={"85vh"}
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
        paddingTop={"5vh"}
        maxWidth={"90vw"}
      >
      <Typography variant="h2" marginTop={1}>
        Contact
      </Typography>

      <Typography variant="body1" marginBottom={1}>
        You can get in contact with us on{" "}
        <Link href="https://twitter.com/Get__In">Twitter.</Link>
      </Typography>
      <Typography variant="body1" marginBottom={1}>
        Or you can shoot us an email at contact@getin.id
      </Typography>
      </Box>
    </Box>
  );  
}

export default Contact;
