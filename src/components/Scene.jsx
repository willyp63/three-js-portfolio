import { useThree } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";

import Camera from "./Camera";
import CameraControls from "./CameraControls";
import Desk from "./Desk";
import Laptop from "./Laptop";
import Papers from "./Papers";
import RubikCube from "./RubikCube";

import {
  AppStateContext,
  useWindowSize,
  useAnimationTuple,
  CAMERA_FOCUS_POINTS,
} from "../utils";

const CAMERA_POSITIONS = {
  [CAMERA_FOCUS_POINTS.DESK]: [0, 9, 8],
  [CAMERA_FOCUS_POINTS.LAPTOP]: [-0.815, 5.5, 1.75],
  [CAMERA_FOCUS_POINTS.RUBIK]: [-4, 4.1, 2.4],
  [CAMERA_FOCUS_POINTS.PAPERS]: [2.98, 6, 0.18],
};

const CAMERA_ROTATIONS = {
  [CAMERA_FOCUS_POINTS.DESK]: [-Math.PI / 4, 0, 0],
  [CAMERA_FOCUS_POINTS.LAPTOP]: [-Math.PI / 6, 0.1, 0.05],
  [CAMERA_FOCUS_POINTS.RUBIK]: [-0.33, 0, 0],
  [CAMERA_FOCUS_POINTS.PAPERS]: [-Math.PI / 2, 0, -0.15],
};

const GET_CAMERA_POSITION = (focusPoint) => CAMERA_POSITIONS[focusPoint];

const GET_CAMERA_ROTATION = (focusPoint) => CAMERA_ROTATIONS[focusPoint];

const Scene = () => {
  const { setSize } = useThree();
  const { width, height } = useWindowSize();

  useEffect(() => {
    setSize(width, height);
  }, [width, height, setSize]);

  const { focusPoint, setFocusPoint } = useContext(AppStateContext);

  const cameraPosition = useAnimationTuple(focusPoint, GET_CAMERA_POSITION);
  const cameraRotation = useAnimationTuple(focusPoint, GET_CAMERA_ROTATION);

  return (
    <>
      <Camera position={cameraPosition} rotation={cameraRotation} />
      {/* <CameraControls /> */}
      <pointLight position={[10, 8, 0]} intensity={2} />
      <ambientLight intensity={0.2} />

      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      <mesh position={[0, 0, -4]} rotation={[0, 0, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#f0ead6" />
      </mesh>

      <mesh position={[-12, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#f0ead6" />
      </mesh>

      <mesh position={[12, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#f0ead6" />
      </mesh>

      <Desk position={[0, 0, 0]} />
      {/* <CoffeeCup
        position={[-4.3, 2.95, 1.3]}
        rotation={[0, Math.PI + 0.33, 0]}
      /> */}
      <RubikCube
        position={[-4, 2.6, 0.8]}
        rotation={[0, Math.PI / 3, 0]}
        isActive={focusPoint === CAMERA_FOCUS_POINTS.RUBIK}
        setIsActive={(isActive) => {
          setFocusPoint(
            isActive ? CAMERA_FOCUS_POINTS.RUBIK : CAMERA_FOCUS_POINTS.DESK
          );
        }}
      />
      <Laptop
        position={[-1, 2.6, 0.5]}
        rotation={[0, 0.1, 0]}
        isOpen={focusPoint === CAMERA_FOCUS_POINTS.LAPTOP}
        setIsOpen={(isOpen) => {
          setFocusPoint(
            isOpen ? CAMERA_FOCUS_POINTS.LAPTOP : CAMERA_FOCUS_POINTS.DESK
          );
        }}
      />
      <Papers
        position={[3, 2.62, 0.33]}
        rotation={[0, -0.15, 0]}
        isExpanded={focusPoint === CAMERA_FOCUS_POINTS.PAPERS}
        setIsExpanded={(isExpanded) => {
          setFocusPoint(
            isExpanded ? CAMERA_FOCUS_POINTS.PAPERS : CAMERA_FOCUS_POINTS.DESK
          );
        }}
      />
    </>
  );
};

export default Scene;
