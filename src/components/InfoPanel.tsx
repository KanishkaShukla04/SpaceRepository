"use client";

import { STARS } from "../data/stars";
import { useEffect, useState } from "react";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiGit,
} from "react-icons/si";

import {
  FaJava,
  FaNode,
} from "react-icons/fa6";
const iconMap: Record<string, any> = {
  Java: FaJava,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  "Node.js": FaNode,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  FastAPI: SiFastapi,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Docker: SiDocker,
  Git: SiGit,
};

export default function InfoPanel({
  selectedStar,
  onClose,
}: {
  selectedStar: number | null;
  onClose: () => void;
}) {
 const [githubProjects, setGithubProjects] =
  useState<any[]>([]);

const star =
  selectedStar !== null
    ? STARS[selectedStar]
    : null;

useEffect(() => {
  if (!star || star.id !== "bellatrix")
    return;

  fetch("/api/github")
    .then((res) => res.json())
    .then((data) => {
      setGithubProjects(data);
    });
}, [star]);

if (!star) return null;

const content = star.content as any;
const isDev =
  process.env.NEXT_PUBLIC_DEV_MODE === "true";

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        height: "100vh",
        width: "400px",
        background:
          "rgba(10,10,20,0.85)",
        backdropFilter: "blur(20px)",
        color: "white",
        zIndex: 1000,
        padding: "40px",
      }}
    >
      <button onClick={onClose}>
        Close
      </button>

      <button
        onClick={() => onClose()}
        style={{
          marginTop: "12px",
        }}
      >
        Return to Helios
      </button>

      <h1>{star.name}</h1>

      <p>{star.section}</p>

      <p>
        {star.taglines.join(" • ")}
      </p>
      <hr
  style={{
    margin: "20px 0",
    opacity: 0.2,
  }}
/>

{content.title && (
  <h2>{content.title}</h2>
)}

{content.description && (
  <p>{content.description}</p>
)}

{content.skills && (
  <>
    <h2 style={{ marginBottom: "20px" }}>Skills</h2>

    {content.skills.map((skill: string) => {
      const Icon = iconMap[skill];

      return (
        <div
          key={skill}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            padding: "18px",
            marginBottom: "14px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "52px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {Icon ? (
              <Icon
                size={36}
                color="#7dd3fc"
              />
            ) : (
              <span style={{ fontSize: 28 }}>⚙️</span>
            )}
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              {skill}
            </div>

            <div
              style={{
                opacity: 0.65,
                fontSize: "14px",
              }}
            >
              Technology Stack
            </div>
          </div>
        </div>
      );
    })}
  </>
)}

{star.id === "bellatrix" ? (
  githubProjects.map((project) => (
    <a
      key={project.name}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        padding: "14px",
        marginTop: "10px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        background:
          "rgba(255,255,255,0.03)",
        color: "white",
        textDecoration: "none",
      }}
    >
      <strong>{project.name}</strong>

      <div
        style={{
          opacity: 0.7,
          marginTop: "6px",
          fontSize: "14px",
        }}
      >
        {project.description}
      </div>
    </a>
  ))
) : (
  content.projects?.map((project: string) => (
    <div
      key={project}
      style={{
        padding: "12px",
        marginTop: "10px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        background:
          "rgba(255,255,255,0.03)",
      }}
    >
      {project}
    </div>
  ))
)}

{content.achievements && (
  <ul>
    {content.achievements.map(
      (achievement: string) => (
        <li key={achievement}>
          {achievement}
        </li>
      )
    )}
  </ul>
)}

{content.university && (
  <>
    <p>
      <strong>University:</strong>{" "}
      {content.university}
    </p>

    <p>
      <strong>Degree:</strong>{" "}
      {content.degree}
    </p>

    <p>
      <strong>CGPA:</strong>{" "}
      {content.cgpa}
    </p>

    <p>
      <strong>School:</strong>{" "}
      {content.school}
    </p>

    <p>
      <strong>Percentage:</strong>{" "}
      {content.percentage}
    </p>
  </>
)}
  {content.resume && (
  <div
    style={{
      marginTop: "20px",
      padding: "16px",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <h3>Resume</h3>

    <a
      href={content.resume}
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#88CCFF",
        textDecoration: "none",
      }}
    >
      Open Resume →
    </a>
  </div>
)}
    </div>
  );
}