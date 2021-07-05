import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Camera = ({ position, rotation }) => {
  const ref = useRef();
  const set = useThree((state) => state.set);

  // Make the camera known to the system
  useEffect(() => void set({ camera: ref.current }), [set]);

  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());

  return <perspectiveCamera ref={ref} position={position} rotation={rotation} />;
}

export default Camera;
