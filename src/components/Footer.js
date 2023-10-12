import { React } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Colors from "../utils/Colors";
import { Code, Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";

const Footer = ({darkmode}) => {
  return (
    <Box sx={{
      background: darkmode ? "#1e1e1e" : Colors.GRAY3,
      textAlign: "center", 
      padding: "5px",
      marginTop: "auto"
    }}>
      <Box sx={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <Code
          sx={{ marginRight: 1, color: darkmode ? "white" : Colors.DARK }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            color: darkmode ? "white" : Colors.DARK,
            fontSize: "20px"
          }}
        >
          UPCODING
        </Typography>
      </Box>
      <Box sx={{marginBottom: "20px"}}>
        <IconButton
          sx={{ color: Colors.GRAY1, marginRight: 1 }}
          onClick={() =>
            window.open(
            "https://instagram.com/",
            "_blank"
          )
          }
        >
          <Instagram />
        </IconButton>
        <IconButton
          sx={{ color: Colors.GRAY1, marginRight: 1 }}
          onClick={() =>
            window.open(
            "https://github.com/sahanmndl/UpCoding-Web",
            "_blank"
            )
          }
        >
          <GitHub />
        </IconButton>
        <IconButton
          sx={{ color: Colors.GRAY1, marginRight: 1 }}
          onClick={() =>
            window.open(
            "https://twitter.com/",
            "_blank"
            )
          }
        >
          <Twitter />
        </IconButton>
        <IconButton
          sx={{ color: Colors.GRAY1, marginRight: 1 }}
          onClick={() =>
            window.open(
            "https://facebook.com/",
            "_blank"
            )
          }
        >
          <Facebook />
        </IconButton>
      </Box>
      <Box>
        <Typography sx={{fontStyle: "italic"}}>
          &copy; Copyright 2023. All rights are reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
