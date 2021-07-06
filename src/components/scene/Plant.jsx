import React from "react";

const Plant = ({ position, rotation }) => (
  <group position={position} rotation={rotation} scale={0.5}>
    <group position={[0, 1, 0]} scale={0.75}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.33, 1.1, 2, 20]} />
        <meshStandardMaterial color="#914521" />
      </mesh>
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[1.5, 1.45, 0.5, 20]} />
        <meshStandardMaterial color="#914521" />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.33, 1, 2.02, 20]} />
        <meshStandardMaterial color="#2F1F18" />
      </mesh>
    </group>

    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[0, 2.9, 0.15]} rotation={[0.33, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[-0.15, 3.75, 0.3]} rotation={[0, 0, 0.33]}>
        <cylinderGeometry args={[0.14, 0.16, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
    </group>

    <group position={[-0.3, 3.2, 0.3]} rotation={[0, 0, 0]} scale={0.66}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[0, 2.9, 0.15]} rotation={[0.33, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.18, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[-0.15, 3.75, 0.3]} rotation={[0, 0, 0.33]}>
        <cylinderGeometry args={[0.1, 0.14, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
    </group>

    <group position={[-0.7, 3.5, 0.15]} rotation={[0.33, 0, -0.66]} scale={0.5}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[0, 2.9, 0.15]} rotation={[0.33, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[-0.15, 3.75, 0.3]} rotation={[0, 0, 0.33]}>
        <cylinderGeometry args={[0.14, 0.16, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
    </group>

    <group position={[0.5, 2.85, 0]} rotation={[-0.33, 0.66, 1.2]} scale={0.5}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[0, 2.9, 0.15]} rotation={[0.33, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
      <mesh position={[-0.15, 3.75, 0.3]} rotation={[0, 0, 0.33]}>
        <cylinderGeometry args={[0.14, 0.16, 1, 10]} />
        <meshStandardMaterial color="#5F2915" />
      </mesh>
    </group>

    <group position={[1.66, 0.33, 0]} rotation={[0, 0, 0.3]}>
      <mesh position={[-0.6, 6, -0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0.2, 5.5, 0.5]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="#206B1E" />
      </mesh>
      <mesh position={[-0.7, 5.5, 0.5]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-0.4, 5.8, 0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#164816" />
      </mesh>
    </group>

    <group
      position={[-2, 1.8, -0.1]}
      scale={0.7}
      rotation={[0.4, Math.PI, 0.6]}
    >
      <mesh position={[-0.6, 6, -0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#206B1E" />
      </mesh>
      <mesh position={[0.2, 5.5, 0.5]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-0.7, 5.5, 0.5]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-0.4, 5.8, 0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#164816" />
      </mesh>
    </group>

    <group position={[-1, 0.66, 0.66]} scale={0.6} rotation={[0, 0, 0]}>
      <mesh position={[-0.6, 6, -0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#164816" />
      </mesh>
      <mesh position={[0.2, 5.5, 0.5]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="#206B1E" />
      </mesh>
      <mesh position={[-0.7, 5.5, 0.5]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[-0.4, 5.8, 0.3]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  </group>
);

export default Plant;
