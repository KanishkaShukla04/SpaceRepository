"use client";
import React, { useState } from "react";
import StarField from "./StarField";
import ConstellationStar from "./ConstellationStar";
import ConstellationLines from "./ConstellationLines";
import InfoPanel from "./InfoPanel";
import HeroText from "./HeroText";
import NavMenu from "./NavMenu";
import StatsBar from "./StatsBar";
import { STARS } from "../data/stars";

export default function Universe() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <StarField />

      <ConstellationLines stars={STARS} />

      {STARS.map((s) => (
        <ConstellationStar key={s.id} star={s} onClick={() => setSelected(s.id)} />
      ))}

      <HeroText />
      <NavMenu />
      <StatsBar />

      <InfoPanel
        star={selected ? STARS.find((s) => s.id === selected) ?? null : null}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
