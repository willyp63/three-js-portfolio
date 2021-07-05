import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

import { useAnimationTuple, useHoverCursor } from "../utils";

import skillsPaper from "../textures/skills-paper.jpg";

const GET_PAPER_0_POSITION = (isExpanded) =>
  !isExpanded ? [-0.1, 0, 0] : [-PAPER_WIDTH / 2, 0, 0];

const GET_PAPER_1_POSITION = (isExpanded) =>
  !isExpanded ? [0.1, 0.02, 0] : [PAPER_WIDTH / 2, 0.02, 0];

const Papers = ({ position, rotation, isExpanded, setIsExpanded }) => {
  const [onEnter, onExit] = useHoverCursor(!isExpanded);

  const paper0Position = useAnimationTuple(isExpanded, GET_PAPER_0_POSITION);
  const paper1Position = useAnimationTuple(isExpanded, GET_PAPER_1_POSITION);

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={isExpanded ? null : () => setIsExpanded(!isExpanded)}
      onPointerOver={onEnter}
      onPointerOut={onExit}
    >
      <Paper
        position={paper0Position}
        rotation={[0, 0.1, 0]}
        isExpanded={isExpanded}
      />
      <Paper
        position={paper1Position}
        rotation={[0, -0.1, 0]}
        isExpanded={isExpanded}
      />
    </group>
  );
};

const Paper = ({ position, rotation, isExpanded }) => {
  const skillsPaperTexture = useLoader(THREE.TextureLoader, skillsPaper);

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[PAPER_WIDTH, PAPER_HEIGHT]} />
        <meshStandardMaterial attach="material" map={skillsPaperTexture} />
      </mesh>
    </group>
  );
};

const PAPER_WIDTH = 8.5 / 5;
const PAPER_HEIGHT = 11 / 5;

export default Papers;
