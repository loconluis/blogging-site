import { Environment, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    // @ts-ignore
    meshRef.current.rotation.x += delta * 0.2;
    // @ts-ignore
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <>
      {/* @ts-ignore*/}
      <RoundedBox
        position={[0, 1, 0]}
        args={[2, 2, 2]}
        radius={0.2}
        smoothness={4}
        // @ts-ignore
        ref={meshRef}
      >
        <meshStandardMaterial
          color="#4a00e0"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </RoundedBox>
    </>
  );
}

const index = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingCube />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default index;
