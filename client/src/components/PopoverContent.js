import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BusinessIcon from "@mui/icons-material/Business";

function PopoverContent() {
  let navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/product");
  };

  const navigateBusiness = () => {
    navigate("/business");
  };
  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <SmartphoneIcon
          color="primary"
          sx={{
            fontSize: "2rem",
            marginBottom: 1,
          }}
        />
        <Typography variant="body1" marginBottom={1} inline align="center">
          Mobile app for users
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={{
            color: "black",
            maxWidth: 300,
          }}
          //sx={{ pt: 1, pb: 1, pl: 5, pr: 5 }}
          onClick={navigateProduct}
        >
          Users
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <BusinessIcon
          color="primary"
          sx={{
            fontSize: "2rem",
            marginBottom: 1,
          }}
        />
        <Typography variant="body1" marginBottom={1} inline align="center">
          Platform for businesses
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={{
            color: "black",
            maxWidth: 300,
          }}
          //sx={{ pt: 1, pb: 1, pl: 5, pr: 5 }}
          onClick={navigateBusiness}
        >
          Businesses
        </Button>
      </Grid>
    </Grid>
  );
}

export default PopoverContent;
