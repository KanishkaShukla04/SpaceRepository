"use client";
import React from "react";

export default function StatsBar() {
  return (
    <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, zIndex: 6, pointerEvents: "none" }}>
      <div style={{ width: "min(1100px,90%)", margin: "0 auto", display: "flex", gap: 6, alignItems: "end", justifyContent: "center" }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} style={{ width: 6, height: `${10 + Math.sin(i / 3 + Date.now() / 500) * 10}px`, background: "rgba(100,200,255,0.9)", borderRadius: 3, transition: "height 300ms ease" }} />
        ))}
      </div>
    </div>
  );
}
