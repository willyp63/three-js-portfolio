import React from "react";

const TrashCan = ({ position }) => (
  <group position={position} scale={0.9}>
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[1.33, 1.1, 3, 20]} />
      <meshStandardMaterial color="#666" />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[1.25, 1, 2.02, 20]} />
      <meshStandardMaterial color="#000" />
    </mesh>
  </group>
);

export default TrashCan;
