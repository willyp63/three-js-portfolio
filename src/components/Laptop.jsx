import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

import { useAnimationValue, useHoverCursor } from "../utils";

import pearLogo from "../textures/pear-logo.jpg";
import keyboard from "../textures/keyboard.jpg";
import screen from "../textures/screen.jpg";

const GET_SCREEN_ROTATION_VALUE = (isOpen) => (isOpen ? (-Math.PI * 2) / 3 : 0);

const Laptop = ({ position, rotation, isOpen, setIsOpen }) => {
  const [onEnter, onExit] = useHoverCursor(!isOpen);

  const screenRotation = useAnimationValue(isOpen, GET_SCREEN_ROTATION_VALUE);

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={isOpen ? null : () => setIsOpen(!isOpen)}
      onPointerOver={onEnter}
      onPointerOut={onExit}
    >
      <group position={[0, 0, -1.25]}>
        <LaptopScreen
          position={[0, 0.08, 0]}
          rotation={[screenRotation, 0, 0]}
        />
        <LaptopBase position={[0, 0.04, 0]} />
      </group>
    </group>
  );
};

const LaptopScreen = ({ position, rotation }) => {
  const pearLogoTexture = useLoader(THREE.TextureLoader, pearLogo);
  const screenTexture = useLoader(THREE.TextureLoader, screen);

  return (
    <group position={position} rotation={rotation}>
      <group position={[0, 0, 1.25]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.5, 0.08, 2.5]} />
          <meshStandardMaterial color="#dcdcdc" />
        </mesh>
        <mesh position={[0, 0.042, 0]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <planeGeometry args={[3.5, 2.5]} />
          <meshStandardMaterial attach="material" map={pearLogoTexture} />
        </mesh>
        <mesh position={[0, -0.042, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.45, 2.45]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, -0.044, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.3, 2.3]} />
          <meshStandardMaterial attach="material" map={screenTexture} />
        </mesh>
      </group>
    </group>
  );
};

const LaptopBase = ({ position, rotation }) => {
  const keyboardTexture = useLoader(THREE.TextureLoader, keyboard);

  return (
    <group position={[0, 0, 1.25]}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[3.5, 0.08, 2.5]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>
      <mesh position={[0, 0.082, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.5, 2.5]} />
        <meshStandardMaterial attach="material" map={keyboardTexture} />
      </mesh>
    </group>
  );
};

export default Laptop;
