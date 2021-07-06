import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

import wood from "./textures/wood.jpg";

const Desk = ({ position }) => (
  <group position={position}>
    <DeskLeg position={[-5, 0, 0]} />
    <DeskLeg position={[5, 0, 0]} />
    <DeskTop position={[0, 2.5, 0]} />
  </group>
);

const DeskLeg = ({ position }) => (
  <group position={position}>
    <DeskLegSide position={[0, 0, -2.5]} />
    <DeskLegSide position={[0, 0, 2.5]} />
    <DeskLegSide position={[0, -2.4, 0]} rotation={[Math.PI / 2, 0, 0]} />
  </group>
);

const DeskLegSide = ({ position, rotation }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={[0.2, 5, 0.2]} />
    <meshStandardMaterial color="#333" />
  </mesh>
);

const DeskTop = ({ position }) => {
  const woodTexture = useLoader(THREE.TextureLoader, wood);

  return (
    <mesh position={position}>
      <boxGeometry args={[10.5, 0.2, 5.5]} />
      <meshStandardMaterial attach="material" map={woodTexture} />
    </mesh>
  );
};

export default Desk;
