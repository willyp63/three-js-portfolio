import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

import {
  CAMERA_FOCUS_POINTS,
  OBJECT_STATES,
  useAnimationTuple,
  useObjectState,
} from "../../utils";

import resume from "./textures/resume.jpg";

const PAPER_WIDTH = 8.5 / 5;
const PAPER_HEIGHT = 11 / 5;

const PAPER_0_POSITIONS = {
  [OBJECT_STATES.ACTIVE]: [-PAPER_WIDTH / 3, 0, 0],
  [OBJECT_STATES.HOVERED]: [-0.2, 0, 0],
  [OBJECT_STATES.RESTING]: [-0.1, 0, 0],
};

const PAPER_1_POSITIONS = {
  [OBJECT_STATES.ACTIVE]: [PAPER_WIDTH / 3, 0.02, 0],
  [OBJECT_STATES.HOVERED]: [0.2, 0.02, 0],
  [OBJECT_STATES.RESTING]: [0.1, 0.02, 0],
};

const GET_PAPER_0_POSITION = (objectState) => PAPER_0_POSITIONS[objectState];
const GET_PAPER_1_POSITION = (objectState) => PAPER_1_POSITIONS[objectState];

const Papers = ({ position, rotation }) => {
  const { onEnter, onExit, onClick, objectState } = useObjectState(
    CAMERA_FOCUS_POINTS.PAPERS
  );

  const paper0Position = useAnimationTuple(objectState, GET_PAPER_0_POSITION);
  const paper1Position = useAnimationTuple(objectState, GET_PAPER_1_POSITION);

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={onEnter}
      onPointerOut={onExit}
    >
      <Paper position={paper0Position} rotation={[0, 0.1, 0]} />
      <Paper position={paper1Position} rotation={[0, -0.1, 0]} />
    </group>
  );
};

const Paper = ({ position, rotation }) => {
  const resumeTexture = useLoader(THREE.TextureLoader, resume);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[PAPER_WIDTH, PAPER_HEIGHT]} />
        <meshStandardMaterial attach="material" map={resumeTexture} />
      </mesh>
    </group>
  );
};

export default Papers;
