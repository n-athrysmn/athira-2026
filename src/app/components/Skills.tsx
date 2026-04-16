"use client";

import { Box, Chip } from "@mui/material";
import Image from "next/image";
import MainImage from "../assets/MainImage.png";

function SkillCard({ skill }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f0f0",
        p: 1,
        borderRadius: 2,
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <p style={{ color: "#171717", margin: 0 }}>{skill.title}</p>

      <Box
        sx={{
          backgroundColor: "#171717",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          {skill.items.map((tag: string) => (
            <Chip
              key={tag}
              label={tag}
              sx={{
                fontFamily: "Boldonse",
                letterSpacing: "1px",
                fontSize: "10px",
                backgroundColor: "#e5e7eb",
                color: "black",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SCSS",
        "Material UI",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Java (Spring Boot, JSP, Thymeleaf)",
        "Laravel",
        "RESTful APIs",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Docker",
        "AWS",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "CI/CD",
      ],
    },
    {
      title: "Database Management",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "MsSQL",
        "Firebase (Firestore)",
      ],
    },
    {
      title: "Tools & Collaboration",
      items: [
        "Git (GitHub, GitLab)",
        "Bitbucket",
        "Jira (Agile/Scrum)",
        "Confluence",
        "Trello",
        "ClickUp",
      ],
    },
    {
      title: "Languages",
      items: [
        "English (Fluent)",
        "Malay (Native)",
        "Bahasa Indonesia (Intermediate)",
        "Korean (Basic)",
      ],
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
      <Box sx={{ m: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {skills.slice(0, 3).map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </Box>
        <h1
          style={{
            fontSize: "9vw",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
            textAlign: "center",
          }}
        >
          Skills
        </h1>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {skills.slice(3, 6).map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </Box>
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

export default Skills;
