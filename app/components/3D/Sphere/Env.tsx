import { Environment } from "@react-three/drei";
import { PresetsType } from "@react-three/drei/helpers/environment-assets";
import { useState } from "react";

const Env = () => {
  return <Environment preset={"night"} background blur={0} encoding={3001} />;
};

export default Env;
