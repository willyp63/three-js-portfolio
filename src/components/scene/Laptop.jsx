import * as THREE from "three";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";

import {
  CAMERA_FOCUS_POINTS,
  OBJECT_STATES,
  useAnimationValue,
  useObjectState,
} from "../../utils";

import laptopBack from "./textures/laptop-back.jpg";
import keyboard from "./textures/keyboard.jpg";
import screen from "./textures/screen.jpg";
import screenLit from "./textures/screen-lit.jpg";

const SCREEN_ROTATION_VALUES = {
  [OBJECT_STATES.ACTIVE]: (-Math.PI * 2) / 3,
  [OBJECT_STATES.HOVERED]: -0.066,
  [OBJECT_STATES.RESTING]: 0,
};

const GET_SCREEN_ROTATION_VALUE = (objectState) =>
  SCREEN_ROTATION_VALUES[objectState];

const Laptop = ({ position, rotation }) => {
  const { onEnter, onExit, onClick, objectState } = useObjectState(
    CAMERA_FOCUS_POINTS.LAPTOP
  );

  const screenRotation = useAnimationValue(
    objectState,
    GET_SCREEN_ROTATION_VALUE
  );

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={onEnter}
      onPointerOut={onExit}
    >
      <group position={[0, 0, -1.25]}>
        <LaptopScreen
          position={[0, 0.08, 0]}
          rotation={[screenRotation, 0, 0]}
          objectState={objectState}
        />
        <LaptopBase position={[0, 0.04, 0]} />
      </group>
    </group>
  );
};

const LaptopScreen = ({ position, rotation, objectState }) => {
  const laptopBackTexture = useLoader(THREE.TextureLoader, laptopBack);
  const screenTexture = useLoader(THREE.TextureLoader, screen);
  const screenLitTexture = useLoader(THREE.TextureLoader, screenLit);

  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    if (objectState === OBJECT_STATES.ACTIVE) {
      setTimeout(() => setIsLit(true), 300);
    } else {
      setTimeout(() => setIsLit(false), 200);
    }
  }, [objectState]);

  return (
    <group position={position} rotation={rotation}>
      <group position={[0, 0, 1.25]}>
        <mesh position={[0, -0.044, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.3, 2.3]} />
          <meshStandardMaterial
            attach="material"
            map={isLit ? screenLitTexture : screenTexture}
          />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.5, 0.08, 2.5]} />
          <meshStandardMaterial color="#dcdcdc" />
        </mesh>
        <mesh position={[0, 0.042, 0]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <planeGeometry args={[3.5, 2.5]} />
          <meshStandardMaterial attach="material" map={laptopBackTexture} />
        </mesh>
        <mesh position={[0, -0.042, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.45, 2.45]} />
          <meshStandardMaterial color="black" />
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
