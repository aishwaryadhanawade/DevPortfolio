"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const { scene } = useGLTF("https://models.readyplayer.me/68f28ca106dff28ec9341cfd.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function AvatarScene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls enableZoom={false} />
        <AvatarModel />
      </Canvas>
    </div>
  );
}
