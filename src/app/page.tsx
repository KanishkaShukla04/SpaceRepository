"use client";

import { useEffect, useState } from "react";
import Scene from "../components/Scene";
import PortfolioOverlay from "../components/PortfolioOverlay";
import { STARS } from "../data/stars";
import InfoPanel from "../components/InfoPanel";

export default function Home() {
  const [enteredUniverse, setEnteredUniverse] = useState(false);
  const [currentStar, setCurrentStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!enteredUniverse) return;

      if (e.deltaY > 0) {
        setCurrentStar((prev) =>
          Math.min(prev + 1, STARS.length - 1)
        );
      } else {
        setCurrentStar((prev) =>
          Math.max(prev - 1, 0)
        );
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () =>
      window.removeEventListener("wheel", handleWheel);
  }, [enteredUniverse]);
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.jpg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {selectedStar !== null && (
  <div
    style={{
      position: "absolute",
      top: 20,
      right: 20,
      color: "white",
      zIndex: 999,
      fontSize: "24px",
    }}
  >
    {STARS[selectedStar].name}
  </div>
)}

      {/* 3D Scene */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Scene
          enteredUniverse={enteredUniverse}
          currentStar={currentStar}
          selectedStar={selectedStar}
          onStarSelect={setSelectedStar}
        />
      </div>
      <InfoPanel
  selectedStar={selectedStar}
  onClose={() => setSelectedStar(null)}
/>

      {/* Text/UI */}
      <PortfolioOverlay
        onExplore={() => setEnteredUniverse(true)}
        enteredUniverse={enteredUniverse}
      />
    </main>
  );
}