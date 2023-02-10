import React, { useState, useEffect } from "react";
import { Grid, Avatar, Paper, Typography } from "@mui/material";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import fromUnixTime from "date-fns/fromUnixTime";

export default function Comment({ event }) {
    const [newPost, setNewPost] = useState({ created_at: 0, content: "" });

    useEffect(() => {
        console.log(event);
        const jsonPost = JSON.parse(event);
        // const ZERO = 0;
        // const PUBKEY = 1;
        // const CREATED_AT = 2;
        // const KIND = 3;
        // const TAGS = 4;
        // const CONTENT = 5;
        // console.log(jsonPost.content);
        // setNewPost({
        //   0: jsonPost[ZERO],
        //   pubkey: jsonPost[PUBKEY],
        //   created_at: jsonPost[CREATED_AT],
        //   kind: jsonPost[KIND],
        //   tags: jsonPost[TAGS],
        //   content: jsonPost[CONTENT],
        // });
        setNewPost(jsonPost);
      }, []);
  return (
    <Paper style={{ padding: "40px 20px", marginBottom: "5px", width: "50vw" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={"https://i.postimg.cc/rmzBHcm8/grape.webp"}
          />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>The Grape</h4>
          <Typography sx={{ fontSize: "15px", color: "#555" }}>
                          {newPost.content}
                        </Typography>
          <Typography sx={{ fontSize: "15px", mr: "6px", color: "#555" }}>
            {formatDistanceToNow(fromUnixTime(newPost.created_at))}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
