import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";

function FAQ() {
  return (
    <>
      <Box
        minHeight={"50vh"}
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
          maxWidth={"90vw"}
        >
          <Typography
            variant="h2"
            textAlign="center"
            marginTop={20}
            marginBottom={3}
          >
            Frequently asked questions
          </Typography>
          <Typography variant="body1" textAlign="center" marginBottom={5}>
            Got questions? We got answers! If you can't find an answer to your
            question in the list below, then contact us and we will be happy to
            help you.
          </Typography>
        </Box>
      </Box>
      <Box
        minHeight={"60vh"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
          maxWidth={"70vw"}
          sx={{
            marginTop: 0,
            marginBottom: 5,
          }}
        >
          <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              What technology is behind this service?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              Get In use LNURL-Auth which is a cryptography protocol within the Lightning Network. It uses a private / public key schema which is a proven and secure method for authentication. Read more about {" "} <Link href="https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/">LNURL-Auth</Link> and the {" "}<Link href="https://en.wikipedia.org/wiki/Lightning_Network">Lightning Network</Link>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              Where can I use the Get In app?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              You can use Get In at any site which offer login with Get In or Lightning - for example {" "} <Link href="https://stacker.news/">Stacker News</Link> and {" "}<Link href="https://lnmarkets.com/en">LN Markets</Link> 
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
          maxWidth={"70vw"}
          sx={{
            marginTop: 0,
            marginBottom: 5,
          }}
        >
                      <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              How do I login with Get In on my phone?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              You navigate to the website where you want to login, navigate to the QR code and tap on it. This will open up a dialog window asking if you want to open this link in Get In. Tap yes. Get In opens in the authentication window. Tap Get In. You are logged in!
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              Can I login to the same account from different devices?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              Yes! You can have the same private key in several devices at the same time. Go to settings in Get In on one of your devices. Click show back-up and copy all 12 words. Go to settings on the other device and tap import. Paste the 12 words into the text fields in the correct order and click save. You can now login to the same accounts from both devices!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
          maxWidth={"70vw"}
          sx={{
            marginTop: 0,
            marginBottom: 10,
          }}
        >
                      <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              I lost my phone - what do I do?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              Download Get In on your new phone. Go to settings and tap import. Type in the 12 back-up words in the correct order and tap save. You now have access to all your accounts! ALWAYS KEEP A COPY OF YOUR BACK-UP PHRASE IN A SECURE LOCATION!
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} display="flex" direction="column">
            <Typography variant="h4" marginBottom={3} fontWeight="bold">
              What is the back-up phrase?
            </Typography>
            <Typography variant="body1" marginBottom={0}>
              The back-up phrase is your private key written in a human readable form. This key is what identifies you and gives you access to your accounts when you use Get In at different services. If you loose your phone or want to change device, then you can import your back-up phrase into the new device and gain access to all your accounts. ALWAYS KEEP A COPY OF YOUR BACK UP PHRASE IN A SECURE LOCATION!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FAQ;
