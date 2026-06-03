"use client";
import React from "react";
import type { Star } from "../data/stars";

export default function ConstellationLines({ stars }: { stars: Star[] }) {
  const width = 1000;
  const height = 1000;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}
      aria-hidden
    >
      {stars.map((s) =>
        (s.connections || []).map((toId) => {
          const t = stars.find((x) => x.id === toId);
          if (!t) return null;
          const x1 = s.x * width;
          const y1 = s.y * height;
          const x2 = t.x * width;
          const y2 = t.y * height;
          return <line key={`${s.id}-${t.id}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(180,200,255,0.35)" strokeWidth={1} />;
        })
      )}
    </svg>
  );
}
