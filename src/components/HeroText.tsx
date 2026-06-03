"use client";
import React from "react";

export default function HeroText() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "20%",
        transform: "translateX(-50%)",
        zIndex: 5,
        pointerEvents: "none",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "clamp(24px,6vw,64px)", margin: 0, letterSpacing: 4 }}>KANISHKA SHUKLA</h1>
      <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Full‑stack developer • Visual thinker</p>
    </div>
  );
}
