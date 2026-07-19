"use client";

import { Sphere } from "@react-three/drei";
import { Star } from "../data/stars";

export default function ConstellationStar3D({
  star,
  onClick,
  selected,
}: {
  star: Star;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <Sphere
      args={[star.size, 16, 16]}
      position={star.position}
      onClick={() => {
        console.log(star.name);
        onClick?.();
      }}
    >
      <meshStandardMaterial
        color={star.color}
        emissive={star.color}
        emissiveIntensity={
          selected
            ? 4
            : star.id === "helios"
            ? 2
            : 0.4
        }
      />
    </Sphere>
  );
}