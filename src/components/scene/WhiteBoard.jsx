import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

import whiteboard from "./textures/whiteboard.jpg";

const WhiteBoard = ({ position }) => {
  const whiteboardTexture = useLoader(THREE.TextureLoader, whiteboard);

  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.2, 4, 8]} />
        <meshStandardMaterial color="#aaa" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.24, 3.8, 7.8]} />
        <meshStandardMaterial attach="material" map={whiteboardTexture} />
      </mesh>
    </group>
  );
};

export default WhiteBoard;
