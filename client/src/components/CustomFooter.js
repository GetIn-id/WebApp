import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";

function CustomFooter() {
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
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={1}
              display="flex"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="caption" color="initial" marginBottom={2} marginTop={3}>
                Copyright ©2022. Get In
              </Typography>
              <Link href="/privacy" marginBottom={3}>privacy policy</Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomFooter;
