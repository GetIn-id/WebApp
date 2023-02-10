import {
    Grid,
    Avatar,
    Paper,
    Divider,
  } from "@mui/material";

export default function Comment({ eventWithSig }) {

    return (
        <Paper
        style={{ padding: "40px 20px", marginBottom: "5vh", width: "50vw" }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src={"https://i.postimg.cc/rmzBHcm8/grape.webp"}
            />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>The Grape</h4>
            <p style={{ textAlign: "left" }}>
              {JSON.stringify(eventWithSig, null, 2)}{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
      );
    }