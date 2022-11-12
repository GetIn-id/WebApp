import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <Box>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="70vw"
        paddingLeft={"15vw"}
        paddingTop={"5vh"}
      >
        <Typography variant="h2" textAlign="center">
          Catch the adopter's attention HERE 
        </Typography>
        <Typography variant="h2" textAlign="center">
          - Get In
        </Typography>
        <Button variant="contained" color="primary" textColor="white" style={{marginTop: 30, color: "white", fontWeight: "bold"}}>Download</Button>
      </Box>
    </Box>
  );
}

export default Home;
