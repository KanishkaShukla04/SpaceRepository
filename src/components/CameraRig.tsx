"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig({
  enteredUniverse,
}: {
  enteredUniverse: boolean;
}) {
  const { camera } = useThree();

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  useFrame(() => {
    const targetZ = enteredUniverse ? 5 : 30;

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZ,
      0.02
    );

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.current.x * 2,
      0.03
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -mouse.current.y * 2,
      0.03
    );

    camera.lookAt(0, 0, 0);
  });

  if (typeof window !== "undefined") {
    window.onmousemove = (e) => {
      mouse.current.x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      mouse.current.y =
        (e.clientY / window.innerHeight - 0.5) * 2;
    };
  }

  return null;
}