import { Typography, Box, Button, TextField } from "@mui/material";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useStatePersist } from 'use-state-persist';

import { broadcastToRelay, Connect, connectToRelay, ConnectURI } from '@nostr-connect/connect';

import { QRCodeSVG } from 'qrcode.react';
import { getEventHash, getPublicKey } from 'nostr-tools';

function Contact() {
  const secretKey = "5acff99d1ad3e1706360d213fd69203312d9b5e91a2d5f2e06100cc6f686e5b3";
const connectURI = new ConnectURI({
  target: getPublicKey(secretKey),
  relay: 'wss://nostr.vulpem.com',
  metadata: {
    name: 'Get In',
    description: 'testing Get In Nostr',
    url: 'https://getin.id',
    icons: ['https://i.postimg.cc/rmzBHcm8/grape.webp'],
  },
});
const [pubkey, setPubkey] = useStatePersist('@pubkey', '');
const [getPublicKeyReply, setGetPublicKeyReply] = useState('');
const [eventWithSig, setEvent] = useState({});
const [content, setContent] = useState("");

useEffect(() => {
  (async () => {
    const target = pubkey.length > 0 ? pubkey : undefined;
    const connect = new Connect({
      secretKey,
      target,
    });
    connect.events.on('connect', (pubkey) => {
      setPubkey(pubkey);
    });
    connect.events.on('disconnect', () => {
      setEvent({});
      setPubkey('');
      setGetPublicKeyReply('');
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
}

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
      content: content
    };
    event.id = getEventHash(event)
    event.sig = await connect.signEvent(event);
    const relay = await connectToRelay('wss://nos.lol');
    await broadcastToRelay(relay, event, true);

    setEvent(event);
  } catch (error) {
    console.error(error);
  }

}

const isConnected = () => {
  return pubkey.length > 0;
}

const disconnect = async () => {
  const connect = new Connect({
    secretKey,
    target: pubkey,
  });
  await connect.disconnect();
  //cleanup
  setEvent({});
  setPubkey('');
  setGetPublicKeyReply('');
}

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
         You can get in contact with us by commenting below!
        </Typography>
        <TextField 
        sx={{width: "30vw", marginTop: "15px", marginBottom: "10px"}}
        label="Write your question here"
        multiline
        onChange={(e) => setContent(e.target.value)}
        />
        <Typography>Nostr ID: {getPublicKey(secretKey)}</Typography>
        <Typography>Status: {isConnected() ? '🟢 Connected' : '🔴 Disconnected'}</Typography>
          {
            isConnected() ? <Button onClick={disconnect}>Disconnect</Button>
            :
            <QRCodeSVG value={connectURI.toString()} />
          }
          { isConnected() ? 
          <Box> 
          <Button onClick={getPub}>Get public key</Button>
          <Typography>Reply: {getPublicKeyReply}</Typography>
          <Button onClick={sendMessage}>Publish message</Button>
          <Typography>Event: {JSON.stringify(eventWithSig, null, 2)}</Typography>
          </Box>
          :
          <Typography>Connect to publish a message</Typography>
          }
      </Box>
    </Box>
  );
}

export default Contact;
