import React from "react";
import { Paper, Box, Container, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "auto",
        width: "99.8vw",
        height: "10vh",
        borderBottom: "none"
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <Link href="/">
            <Image priority src={logo} width={75} height={30} alt="Logo" />
          </Link> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            mb: 2,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. Get In 
          </Typography>
          <Link href="/privacy">
            privacy policy 
          </Link>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
