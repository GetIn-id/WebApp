import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function About() {
  return (
    <Box minHeight={"80vh"}>
       <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        paddingLeft={"10vw"}
        paddingTop={"5vh"}
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="text.secondary"
          marginBottom={5}
        >
          About us (coming soon)
        </Typography>
      </Box>
    </Box>
  );
}

export default About;