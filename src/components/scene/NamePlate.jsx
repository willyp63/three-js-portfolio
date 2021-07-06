import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import React from "react";

import namePlate from "./textures/name-plate.png";

const RATIO = 966 / 242;

const NamePlate = ({ position, rotation }) => {
  const namePlateTexture = useLoader(THREE.TextureLoader, namePlate);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.33, 0.125]} rotation={[-Math.PI / 8, 0, 0]}>
        <planeGeometry args={[0.66 * RATIO, 0.66]} />
        <meshStandardMaterial color="#aaa" />
      </mesh>
      <mesh position={[0, 0.33, -0.125]} rotation={[Math.PI / 8, 0, 0]}>
        <planeGeometry args={[0.66 * RATIO, 0.66]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      <mesh position={[0, 0.33, 0.127]} rotation={[-Math.PI / 8, 0, 0]}>
        <planeGeometry args={[0.66 * RATIO - 0.1, 0.66 - 0.1]} />
        <meshStandardMaterial attach="material" map={namePlateTexture} />
      </mesh>
    </group>
  );
};

export default NamePlate;
