"use client";

import { Box, Chip } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/Red.png";
import Digital from "../assets/Digital.svg";
import AI from "../assets/AI.svg";
import LMS from "../assets/LMS.svg";
import Safe from "../assets/Safe.svg";

function ProjectCard({ project }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        p: 1,
        borderRadius: 2,
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Image src={project.image} alt={project.title} width={250} height={150} />

      <Box
        sx={{
          backgroundColor: "#171717",
          p: 1,
        }}
      >
        <p style={{ margin: 0 }}>{project.title}</p>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          {project.tags.map((tag: string) => (
            <Chip
              key={tag}
              label={tag}
              sx={{
                fontFamily: "Boldonse",
                letterSpacing: "1px",
                fontSize: "10px",
                backgroundColor:
                  tag.toLowerCase() === "hobby"
                    ? "#22c55e" // green
                    : tag.toLowerCase() === "work"
                      ? "#3b82f6" // blue
                      : "#e5e7eb", // default gray
                color:
                  tag.toLowerCase() === "work" || tag.toLowerCase() === "hobby"
                    ? "white"
                    : "black",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const Projects = () => {
  const projects = [
    {
      title: "TNB Technology Safety Information System 2.0 (TSIS2.0)",
      image: Safe,
      tags: [".NET", "Azure", "MsSQL", "Work"],
    },
    {
      title: "SIRIM Digitalisation",
      image: Digital,
      tags: ["Java", "MERN", "Docker", "Work"],
    },
    {
      title: "Aster Edu Learning Management System",
      image: LMS,
      tags: ["MERN", "MySQL", "Work"],
    },
    {
      title: "AI-Tarot",
      image: AI,
      tags: ["Next.js", "Gemini", "Hobby"],
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        margin: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "80%",
          }}
        >
          <p style={{ letterSpacing: "2px", fontSize: "2vw" }}>
            Nora Athira Yasmin
          </p>
          <p>Fullstack Engineer | 2026</p>
          <Image
            src={MainImage}
            alt='Nora Athira Yasmin'
            width={400}
            height={580}
          />
        </Box>

        <Box
          sx={{
            placeContent: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "90%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "9vw", whiteSpace: "nowrap", margin: 0 }}>
              Projects
            </h1>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {projects.slice(2, 4).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
