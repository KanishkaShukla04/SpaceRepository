"use client";
import React from "react";
import type { Star } from "../data/stars";

export default function ConstellationStar({
  star,
  onClick,
}: {
  star: Star;
  onClick?: (id: string) => void;
}) {
  const left = `${star.x * 100}%`;
  const top = `${star.y * 100}%`;

  return (
    <button
      onClick={() => onClick && onClick(star.id)}
      title={star.name}
      aria-label={star.name}
      style={{
        position: "absolute",
        left,
        top,
        transform: "translate(-50%,-50%)",
        width: 12,
        height: 12,
        borderRadius: 999,
        background: "white",
        boxShadow: "0 0 8px rgba(255,255,255,0.8)",
        zIndex: 3,
        border: "none",
        cursor: "pointer",
      }}
    />
  );
}
