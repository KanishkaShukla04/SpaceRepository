"use client";
import React from "react";
import type { Star } from "../data/stars";

export default function InfoPanel({ star, onClose }: { star: Star | null; onClose: () => void }) {
  return (
    <aside
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: star ? 320 : 0,
        background: "linear-gradient(180deg, rgba(10,10,20,0.95), rgba(6,6,12,0.95))",
        color: "white",
        zIndex: 4,
        overflow: "hidden",
        transition: "width 300ms ease",
      }}
      aria-hidden={!star}
    >
      {star ? (
        <div style={{ padding: 20 }}>
          <button onClick={onClose} style={{ marginBottom: 12 }}>
            Close
          </button>
          <h2 style={{ marginTop: 0 }}>{star.name}</h2>
          <p style={{ opacity: 0.9 }}>{star.description}</p>
        </div>
      ) : null}
    </aside>
  );
}
