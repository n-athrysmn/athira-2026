"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/connect.svg";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Action = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100vw", overflow: "hidden" }}>
        <h1
          style={{
            fontSize: "14.5vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
          }}
        >
          LET'S WORK
        </h1>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Image
          src={MainImage}
          alt='Nora Athira Yasmin'
          width={500}
          height={500}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "40%",
          position: "absolute",
          top: "68%",
          left: "36%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2
          style={{
            fontSize: "5vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
            textAlign: "right",
          }}
        >
          TOGETHER
        </h2>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Link
            href='tel:+60123456789'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LocalPhoneIcon />
            +60192549717
          </Link>
          <Link
            href='https://api.whatsapp.com/send?phone=60192549717&text=Hi%20Athira!%20'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <WhatsAppIcon />
            WhatsApp?
          </Link>
          <Link
            href='mailto:athira.ysmn@gmail.com'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AlternateEmailIcon />
            Email Me
          </Link>
          <Link
            href='https://www.linkedin.com/in/norakassim/'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
            Connect on LinkedIn
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Action;
