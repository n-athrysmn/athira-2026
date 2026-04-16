"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import SF from "../assets/SF.svg";
import SS from "../assets/SS.svg";
import LCP from "../assets/LCP.svg";

const Experiences = () => {
  const exp = [
    {
      title: "Fullstack Engineer",
      company: "Seedflex Capital Sdn Bhd",
      duration: "2024 - Now",
      img: SF,
      description:
        "Improved code quality and deployments while building integrations and real-time systems that reduced bugs, accelerated releases, and automated workflows.",
    },
    {
      title: "DevOps Engineer",
      company: "Strato Solutions Sdn Bhd",
      duration: "2023 - 2024",
      img: SS,
      description:
        "Trained developers in DevOps, modernized legacy systems using MERN, and deployed scalable enterprise applications on Azure while optimizing database performance.",
    },
    {
      title: "Application Engineer",
      company: "LCP Buildsoft Technology",
      duration: "2022 - 2023",
      img: LCP,
      description:
        "Delivered 20+ web and mobile applications, leading deployments, integrations, and e-commerce solutions while improving time-to-market and system reliability.",
    },
  ];
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100vw", overflow: "hidden" }}>
        <h1
          style={{
            fontSize: "13vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
          }}
        >
          EXPERIENCES
        </h1>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mb: 3 }}>
        {exp.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: 1,
              borderLeft: 2,
              p: 2,
              m: 2,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                zIndex: -2,
                opacity: 0.8,
              }}
            >
              <Image src={item.img} alt={item.title} width={150} height={150} />
            </Box>
            <p>
              {item.title} <br /> {item.company} <br /> ({item.duration})
            </p>
            <p>{item.description}</p>
          </Box>
        ))}
      </Box>

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
    </Box>
  );
};

export default Experiences;
