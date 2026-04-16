"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/Face.png";

const Intro = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ width: "100vw", overflow: "hidden" }}>
        <h1
          style={{
            fontSize: "8vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
          }}
        >
          I'M <br /> ATHIRA
        </h1>
        <p style={{ letterSpacing: "1px" }}>
          I’m Athira, a full stack engineer focused on building scalable web
          applications and exploring AI-driven solutions. I enjoy solving
          complex problems and creating systems that are both efficient and
          intuitive to use.
        </p>
      </Box>

      <Box>
        <Image
          src={MainImage}
          alt='Nora Athira Yasmin'
          width={600}
          height={800}
        />
      </Box>
    </Box>
  );
};

export default Intro;
