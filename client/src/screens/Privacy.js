import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Privacy() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      width="70vw"
      paddingLeft={"15vw"}
      paddingTop={"5vh"}
    >
      <Typography variant="h2">Privacy</Typography>
      <Typography variant="body1">
        Last updated: November 09, 2022 This Privacy Policy describes Our
        policies and procedures on the collection, use and disclosure of Your
        information when You use the Service and tells You about Your privacy
        rights and how the law protects You. We use Your Personal data to
        provide and improve the Service. By using the Service, You agree to the
        collection and use of information in accordance with this Privacy
        Policy. This Privacy Policy has been created with the help of the
        Privacy Policy Generator.
      </Typography>
      <Typography variant="h2">Interpretation and Definitions</Typography>
      <Typography variant="h3">Interpretation</Typography>
      <Typography variant="body1">
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </Typography>
      <Typography variant="h3">Definitions</Typography>
      <Typography variant="body1">
        For the purposes of this Privacy Policy:
      </Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        <ListItem>Account means a unique account created for You to access our Service or parts of our Service.</ListItem>
        <ListItem>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</ListItem>
        <ListItem>Application means the software program provided by the Company downloaded by You on any electronic device, named Get In</ListItem>
        <ListItem>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Get In.</ListItem>
        <ListItem>Country refers to: Sweden</ListItem>
        <ListItem>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</ListItem>
        <ListItem>Personal Data is any information that relates to an identified or identifiable individual.</ListItem>
        <ListItem>Service refers to the Application.</ListItem>
        <ListItem>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</ListItem>
        <ListItem>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</ListItem>
        <ListItem>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</ListItem>
      </List>
    </Box>
  );
}

export default Privacy;
