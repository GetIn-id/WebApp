import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Link, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function CustomFooter() {
  const navigateTwitter = () => {
    window.open("https://twitter.com/Get__In");
  };
  const navigateGithub = () => {
    window.open("https://github.com/orgs/GetIn-id/repositories");
  };
  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        elevation={5}
        width={"100%"}
      >
        <Toolbar>
          <Grid
            container
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="caption"
                color="initial"
                marginBottom={1}
                marginTop={2}
                fontWeight="bold"
              >
                Contact
              </Typography>
              <Typography variant="caption" color="initial" marginBottom={2}>
                email: contact@getin.id
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="caption"
                color="initial"
                marginBottom={1}
                marginTop={3}
                fontWeight="bold"
              >
                Copyright ©2022. Get In
              </Typography>
              <Link href="/privacy" marginBottom={3}>
                privacy policy
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="caption"
                color="initial"
                marginBottom={0}
                marginTop={1}
                fontWeight="bold"
              >
                Social
              </Typography>
              <Box 
               display="flex"
               direction="row"
               justifyContent="center"
               alignItems="start"
               >
              <IconButton onClick={navigateTwitter} color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton onClick={navigateGithub} color="primary">
                <GitHubIcon />
              </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomFooter;
