import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

import { useWindowSize } from "../../utils";

import Camera from "./Camera";
import CameraControls from "./CameraControls";
import Desk from "./Desk";
import Laptop from "./Laptop";
import Papers from "./Papers";
import Room from "./Room";
import RubikCube from "./RubikCube";
import Plant from "./Plant";
import TrashCan from "./TrashCan";
import WhiteBoard from "./WhiteBoard";
import NamePlate from "./NamePlate";

const Scene = () => {
  const { setSize } = useThree();
  const { width, height } = useWindowSize();

  useEffect(() => {
    setSize(width, height);
  }, [width, height, setSize]);

  return (
    <>
      <Camera />
      {/* <CameraControls /> */}

      <pointLight castShadow position={[-4, 10, -8]} intensity={1.5} />
      <ambientLight intensity={0.2} />

      <Room position={[6, 0, 15]} />

      <Desk position={[0, 0, 0]} />
      <NamePlate position={[-3.6, 2.6, -1.85]} rotation={[0, 0.1, 0]} />
      <Plant position={[4, 2.6, -1.5]} />
      <TrashCan position={[7.5, -1.2, -0.5]} />
      <WhiteBoard position={[-6, 5, 4]} />

      <RubikCube position={[-4, 2.6, 0.8]} rotation={[0, Math.PI / 3, 0]} />
      <Laptop position={[-1, 2.6, 0.5]} rotation={[0, 0.1, 0]} />
      <Papers position={[3, 2.62, 0.33]} rotation={[0, -0.15, 0]} />
    </>
  );
};

export default Scene;
