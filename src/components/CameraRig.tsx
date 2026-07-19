"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Star } from "../data/stars";

export default function CameraRig({
  enteredUniverse,
  selectedStar,
}: {
  enteredUniverse: boolean;
  selectedStar: Star | null;
}) {
  const { camera } = useThree();

  useFrame(() => {
    let targetX = 0;
    let targetY = 0;
    let targetZ = enteredUniverse ? 18 : 30;

    if (selectedStar) {
      targetX = selectedStar.position[0];
      targetY = selectedStar.position[1];
      targetZ = 8;
    }

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetX,
      0.03
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY,
      0.03
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      0.03
    );

    if (selectedStar) {
      camera.lookAt(
        selectedStar.position[0],
        selectedStar.position[1],
        selectedStar.position[2]
      );
    } else {
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}