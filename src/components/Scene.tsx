"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STARS } from "../data/stars";
import  StarField  from "./StarField";
import ConstellationStar3D from "./ConstellationStar3D";
import ConstellationLines3D from "./ConstellationLines3D";
import CameraRig from "./CameraRig";

export default function Scene({
     enteredUniverse,
     currentStar,
     onStarSelect,
}: {
  enteredUniverse: boolean;
  currentStar: number;
   onStarSelect: (index: number) => void;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 75 }}
    gl={{ alpha: true }}
    style={{
    position: "absolute",
    inset: 0,
    background: "transparent",
    zIndex: 1
  }}>
      <ambientLight intensity={0.4} />
      <pointLight
      position={[0, 0, 0]}
      intensity={1}
      />
    {/*<CameraRig enteredUniverse={enteredUniverse} />*/}
      <StarField />
            <ConstellationLines3D stars={STARS} />

      {STARS.map((star,index) => (
        <ConstellationStar3D
          key={star.id}
          star={star}
          onClick={() => onStarSelect(index)}
        />
      ))}

      <OrbitControls
  enablePan={false}
  enableZoom={false}
  autoRotate={false}
  autoRotateSpeed={0.15}
/>
    </Canvas>
  );
}