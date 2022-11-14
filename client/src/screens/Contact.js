import { Typography, Link, Box } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box minHeight={"80vh"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"5vh"}
      >
        <Typography variant="h2" marginTop={1}>
          Contact
        </Typography>

        <Typography variant="body1" marginBottom={1}>
          You can get in contact with us on {" "}
          <Link href="https://twitter.com/The__Grape">Twitter.</Link>
        </Typography>
        <Typography variant="body1" marginBottom={1}>
          Or you can shoot us an email at thegrape1337@protonmail.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
