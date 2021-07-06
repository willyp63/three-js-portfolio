import React, { useRef, useEffect, useMemo, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import {
  AppStateContext,
  CAMERA_FOCUS_POINTS,
  useAnimationTuple,
  useWindowSize,
} from "../../utils";

const MIN_ASPECT_RATIO = 6 / 5;

const CAMERA_POSITIONS = {
  [CAMERA_FOCUS_POINTS.DESK]: [0, 9, 8],
  [CAMERA_FOCUS_POINTS.LAPTOP]: [-0.815, 5.33, 1.4],
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

const Camera = () => {
  const ref = useRef();
  const set = useThree((state) => state.set);

  // Make the camera known to the system
  useEffect(() => {
    set({ camera: ref.current });
  }, [set]);

  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());

  const { width, height } = useWindowSize();

  const desiredHeight = useMemo(
    () => Math.min(height, width / MIN_ASPECT_RATIO),
    [height, width]
  );
  const cameraDistance = useMemo(
    () => height / desiredHeight,
    [height, desiredHeight]
  );

  const { focusPoint } = useContext(AppStateContext);
  const cameraPosition = useAnimationTuple(focusPoint, GET_CAMERA_POSITION);
  const adjustedCameraPosition = useMemo(
    () =>
      focusPoint === CAMERA_FOCUS_POINTS.DESK
        ? cameraPosition.map((val) => val * cameraDistance)
        : cameraPosition,
    [focusPoint, cameraPosition, cameraDistance]
  );
  const cameraRotation = useAnimationTuple(focusPoint, GET_CAMERA_ROTATION);

  return (
    <perspectiveCamera
      ref={ref}
      position={adjustedCameraPosition}
      rotation={cameraRotation}
    />
  );
};

export default Camera;
