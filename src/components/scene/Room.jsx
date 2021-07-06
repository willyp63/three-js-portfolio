import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import React from "react";

import mountains from "./textures/mountains.jpg";

const Room = ({ position }) => {
  const mountainsTexture = useLoader(THREE.TextureLoader, mountains);
  return (
    <group position={position}>
      <mesh
        position={[0, -2.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow={true}
      >
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      <group position={[0, 0, -18]}>
        <mesh position={[-11, 0, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[2, 36]} />
          <meshStandardMaterial color="#f0ead6" />
        </mesh>
        <mesh position={[6, 0, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[12, 36]} />
          <meshStandardMaterial color="#f0ead6" />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[24, 7]} />
          <meshStandardMaterial color="#f0ead6" />
        </mesh>
        <mesh position={[0, 13.5, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[24, 7]} />
          <meshStandardMaterial color="#f0ead6" />
        </mesh>

        <mesh position={[-5, 3.5, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[10, 0.2, 0.5]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
        <mesh position={[-5, 10, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[10, 0.2, 0.5]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
        <mesh position={[-10, 6.75, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.2, 6.7, 0.5]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
        <mesh position={[0, 6.75, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.2, 6.7, 0.5]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      </group>

      <mesh position={[0, 0, -35]} rotation={[0, 0.1, 0]}>
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial attach="material" map={mountainsTexture} />
      </mesh>

      <mesh position={[-12, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#f0ead6" />
      </mesh>

      <mesh position={[12, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial color="#f0ead6" />
      </mesh>
    </group>
  );
};

export default Room;
