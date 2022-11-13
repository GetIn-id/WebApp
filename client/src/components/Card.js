import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function MyCard({ title, subtitle, body, image }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subtitle}
        </Typography>
        {body ? <Typography variant="body2">{body}</Typography> : <div></div>}

        {image ? (
          <img src={image} alt="app" style={{ maxWidth: 250 }} />
        ) : (
          <div></div>
        )}
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
}

export default MyCard;
