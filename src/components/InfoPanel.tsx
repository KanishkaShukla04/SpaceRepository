"use client";

import { STARS } from "../data/stars";

export default function InfoPanel({
  selectedStar,
  onClose,
}: {
  selectedStar: number | null;
  onClose: () => void;
}) {
  if (selectedStar === null) return null;

  const star = STARS[selectedStar];

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

      <h1>{star.name}</h1>

      <p>{star.section}</p>

      <p>
        {star.taglines.join(" • ")}
      </p>
    </div>
  );
}