import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import {
  CAMERA_FOCUS_POINTS,
  OBJECT_STATES,
  useAnimationValue,
  useObjectState,
} from "../../utils";

import rubik from "./textures/rubik.jpg";

const Y_POSITIONS = {
  [OBJECT_STATES.ACTIVE]: 1,
  [OBJECT_STATES.HOVERED]: 0.3,
  [OBJECT_STATES.RESTING]: 0.25,
};

const GET_Y_POSITION = (objectState) => Y_POSITIONS[objectState];

const RubikCube = ({ position, rotation }) => {
  const mesh = useRef();
  const rubikTexture = useLoader(THREE.TextureLoader, rubik);

  const { onEnter, onExit, onClick, objectState } = useObjectState(
    CAMERA_FOCUS_POINTS.RUBIK
  );

  const yPosition = useAnimationValue(objectState, GET_Y_POSITION);

  useFrame((_, delta) => {
    if (objectState !== OBJECT_STATES.RESTING) {
      if (objectState === OBJECT_STATES.ACTIVE) {
        mesh.current.rotation.y -= 1.33 * delta;
      } else {
        mesh.current.rotation.y += 0.66 * delta;
      }
    }
  });

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
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
