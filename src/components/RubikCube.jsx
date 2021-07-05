import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import { useAnimationValue, useHoverCursor } from "../utils";

import rubik from "../textures/rubik.jpg";

const GET_Y_POSITION = (isActive) => (isActive ? 1 : 0.25);

const RubikCube = ({ position, rotation, isActive, setIsActive }) => {
  const mesh = useRef();

  const [onEnter, onExit] = useHoverCursor(!isActive);

  const rubikTexture = useLoader(THREE.TextureLoader, rubik);
  const yPosition = useAnimationValue(isActive, GET_Y_POSITION);

  useFrame((state, delta) => {
    if (isActive) {
      mesh.current.rotation.y += 0.033;
    }
  });

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={isActive ? null : () => setIsActive(!isActive)}
      onPointerOver={onEnter}
      onPointerOut={onExit}
    >
      <mesh ref={mesh} position={[0, yPosition, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial attach="material" map={rubikTexture} />
      </mesh>
    </group>
  );
};

export default RubikCube;
