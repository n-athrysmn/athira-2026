"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/MainImage.png";

const Contents = () => {
  const contents = [
    {
      title: "Athira?",
      page: "003",
    },
    {
      title: "Experiences",
      page: "005",
    },
    {
      title: "Projects",
      page: "006",
    },
    {
      title: "My Skills",
      page: "007",
    },
    // {
    //   title: "Gallery",
    //   page: "008",
    // },
    {
      title: "Connect",
      page: "009",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>Nora Athira Yasmin</p>
          <p>Fullstack Engineer | 2026</p>
        </Box>
        <h1
          style={{
            fontSize: "9vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
          }}
        >
          Contents
        </h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {contents.map((c, i) => (
            <Box
              sx={{
                borderBottom: 1,
                width: "90%",
                mx: 4,
                my: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
              key={i}
            >
              <p>{c.page}</p>
              <p style={{ letterSpacing: "1px" }}>{c.title}</p>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ placeContent: "center", display: "grid", flex: 1 }}>
        <Image
          src={MainImage}
          alt='Nora Athira Yasmin'
          width={700}
          height={700}
        />
      </Box>
    </Box>
  );
};

export default Contents;
