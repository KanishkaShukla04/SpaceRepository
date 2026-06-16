"use client";

import * as THREE from "three";
import { Line } from "@react-three/drei";
import { Star } from "../data/stars";

export default function ConstellationLines3D({
  stars,
}: {
  stars: Star[];
}) {
  if (stars.length < 2) return null;

  const points = stars.map(
    (s) => new THREE.Vector3(...s.position)
  );

  return (
    <Line
      points={points}
      color="#88ccff"
      lineWidth={1}
      transparent
      opacity={0.4}
    />
  
  );
}