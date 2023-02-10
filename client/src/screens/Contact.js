import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Avatar,
  Paper,
  Divider,
  Modal,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { useStatePersist } from "use-state-persist";

import {
  broadcastToRelay,
  Connect,
  connectToRelay,
  ConnectURI,
} from "@nostr-connect/connect";

import { QRCodeSVG } from "qrcode.react";
import { getEventHash, getPublicKey } from "nostr-tools";

function Contact() {
  const secretKey =
    "5acff99d1ad3e1706360d213fd69203312d9b5e91a2d5f2e06100cc6f686e5b3";
  const connectURI = new ConnectURI({
    target: getPublicKey(secretKey),
    relay: "wss://nostr.vulpem.com",
    metadata: {
      name: "Get In",
      description: "testing Nostr Connect",
      url: "https://getin.id",
      icons: ["https://i.postimg.cc/rmzBHcm8/grape.webp"],
    },
  });
  const [pubkey, setPubkey] = useStatePersist("@pubkey", "");
  const [getPublicKeyReply, setGetPublicKeyReply] = useState("");
  const [eventWithSig, setEvent] = useState({});
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    (async () => {
      const target = pubkey.length > 0 ? pubkey : undefined;
      const connect = new Connect({
        secretKey,
        target,
      });
      connect.events.on("connect", (pubkey) => {
        setPubkey(pubkey);
      });
      connect.events.on("disconnect", () => {
        setEvent({});
        setPubkey("");
        setGetPublicKeyReply("");
      });
      await connect.init();
    })();
  }, []);

  const getPub = async () => {
    if (pubkey.length === 0) return;
    const connect = new Connect({
      secretKey,
      target: pubkey,
    });
    const pk = await connect.getPublicKey();
    setGetPublicKeyReply(pk);
  };

  const sendMessage = async () => {
    try {
      if (pubkey.length === 0) return;

      const connect = new Connect({
        secretKey,
        target: pubkey,
      });

      let event = {
        kind: 1,
        pubkey: pubkey,
        created_at: Math.floor(Date.now() / 1000),
        tags: [],
        content: content,
      };
      event.id = getEventHash(event);
      event.sig = await connect.signEvent(event);
      const relay = await connectToRelay("wss://nos.lol");
      await broadcastToRelay(relay, event, true);

      setEvent(event);
    } catch (error) {
      console.error(error);
    }
  };

  const isConnected = () => {
    getPub();
    return pubkey.length > 0;
  };

  const disconnect = async () => {
    const connect = new Connect({
      secretKey,
      target: pubkey,
    });
    await connect.disconnect();
    //cleanup
    setEvent({});
    setPubkey("");
    setGetPublicKeyReply("");
  };

  return (
    <Box
      minHeight={"85vh"}
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
        paddingTop={"5vh"}
        maxWidth={"90vw"}
      >
        <Typography variant="h2" marginTop={1}>
          Contact
        </Typography>
        <Typography variant="body1" marginBottom={1}>
          What do you think of Get In? Comment below!
        </Typography>
        <TextField
          sx={{ width: "30vw", marginTop: "15px", marginBottom: "10px" }}
          label="Write your comment here"
          multiline
          onChange={(e) => setContent(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={handleOpen}>
          Comment
        </Button>
      </Box>
      <h1>Comments</h1>
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
      <Typography>Nostr ID: {getPublicKey(secretKey)}</Typography>
      <Typography>
        Status: {isConnected() ? "🟢 Connected" : "🔴 Disconnected"}
      </Typography>
      {isConnected() ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <QRCodeSVG value={connectURI.toString()} />
      )}
      {isConnected() ? (
        <Box>
          <Button onClick={getPub}>Get public key</Button>
          <Typography>Reply: {getPublicKeyReply}</Typography>
          <Button onClick={sendMessage}>Publish message</Button>
        </Box>
      ) : (
        <Typography>Connect to publish a message</Typography>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isConnected() ? (
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                You are connected
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Press the button below and sign the comment in Nostrum.
              </Typography>
              <Button onClick={sendMessage} variant="contained" size="large" sx={{marginTop: "10px"}}>Comment</Button>
            </Box>
          ) : (
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Connect with Nostrum
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Scan the QR code with the Nostrum mobile app to connect and sign
                the comment with your Nostr profile.
              </Typography>
              <QRCodeSVG
                value={connectURI.toString()}
                style={{
                  marginLeft: "125px",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default Contact;
