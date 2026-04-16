"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/Solo.png";

const Hero = () => {
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
            fontSize: "13.5vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
          }}
        >
          PORTFOLIO
        </h1>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "62%",
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
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          m: 4,
          position: "relative",
          zIndex: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <p style={{ letterSpacing: "1px", lineHeight: 1.6 }}>
            A versatile Full Stack Engineer with experience in enterprise
            systems, cloud deployments, and modern web applications using React,
            Node.js, and Java. I enjoy building scalable systems and exploring
            AI-powered applications.
          </p>
        </Box>

        <Box />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "right",
          }}
        >
          <p style={{ letterSpacing: "2px", fontSize: "2vw" }}>
            Nora Athira Yasmin
          </p>
          <p>Fullstack Engineer | 2026</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
