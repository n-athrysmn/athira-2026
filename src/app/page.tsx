"use client";

import { Box } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Contents from "./components/Contents";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Action from "./components/Action";
import Feedbacks from "./components/Feedbacks";

export default function Home() {
  const [step, setStep] = useState(0);

  const pages = [
    <Hero />,
    <Contents />,
    <Intro />,
    <Experiences />,
    <Projects />,
    <Skills />,
    <Action />,
    <Feedbacks />,
  ];

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <Box
        sx={{
          height: "100vh",
          transform: `translateY(-${step * 100}vh)`,
          transition: "transform 0.7s ease",
        }}
      >
        {pages.map((Page, i) => (
          <Box key={i} sx={{ height: "100vh" }}>
            {Page}
          </Box>
        ))}
      </Box>

      {step > 0 && (
        <Box
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          sx={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <ExpandLessRoundedIcon sx={{ fontSize: 50 }} />
        </Box>
      )}
      {step < pages.length - 1 && (
        <Box
          onClick={() => {
            setStep((prev) => {
              if (prev === pages.length - 1) {
                return Math.max(prev - 1, 0);
              }
              return prev + 1;
            });
          }}
          sx={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <ExpandMoreRoundedIcon sx={{ fontSize: 50 }} />
        </Box>
      )}
    </Box>
  );
}
