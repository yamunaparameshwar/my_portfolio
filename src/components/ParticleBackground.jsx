import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../hooks/useTheme";

export default function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: {
            value: theme === "dark" ? ["#3b82f6", "#8b5cf6", "#22d3ee"] : ["#3b82f6", "#8b5cf6", "#22d3ee"],
          },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.15, max: 0.4 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === "dark" ? "#3b82f6" : "#6366f1",
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.5 },
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

