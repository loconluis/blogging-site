import { Center } from "@react-three/drei";

const Model = () => {
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
    </Center>
  );
};

export default Model;
