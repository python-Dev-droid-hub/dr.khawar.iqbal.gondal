"use client";

/**
 * 3D organ model: BodyParts3D subset via OrganUI stomach GLB
 * © The Database Center for Life Science — CC BY-SA 2.1 Japan
 */

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

const MODEL_PATH = "/models/organ.glb";

function OrganMesh({ paused }: { paused: boolean }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  const cloned = useMemo(() => {
    const copy = scene.clone(true);
    copy.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const materials = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];
          materials.forEach((material) => {
            material.side = THREE.FrontSide;
            if ("envMapIntensity" in material) {
              (material as THREE.MeshStandardMaterial).envMapIntensity = 0.85;
            }
          });
        }
      }
    });
    return copy;
  }, [scene]);

  useFrame((_, delta) => {
    if (paused || !group.current) return;
    group.current.rotation.y += delta * 0.28;
  });

  return (
    <Center>
      <group ref={group} scale={1.15}>
        <primitive object={cloned} />
      </group>
    </Center>
  );
}

function ModelReady({ onReady }: { onReady?: () => void }) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);
  return null;
}

type OrganModelProps = {
  className?: string;
  interactive?: boolean;
  onReady?: () => void;
};

export default function OrganModel({
  className,
  interactive = true,
  onReady,
}: OrganModelProps) {
  const [dragging, setDragging] = useState(false);

  return (
    <div
      className={className}
      role="img"
      aria-label="Interactive 3D digestive organ model"
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.15, 2.35], fov: 38, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          touchAction: "none",
        }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[3.5, 4, 2]}
          intensity={1.35}
          color="#fff6e8"
        />
        <directionalLight
          position={[-3, 1.5, -2]}
          intensity={0.45}
          color="#9fd0d8"
        />
        <spotLight
          position={[0, 4, 2]}
          angle={0.45}
          penumbra={0.7}
          intensity={0.65}
          color="#e6c98a"
        />

        <Suspense fallback={null}>
          <ModelReady onReady={onReady} />
          <OrganMesh paused={dragging} />
          <Environment preset="studio" environmentIntensity={0.35} />
          <ContactShadows
            position={[0, -0.85, 0]}
            opacity={0.28}
            scale={6}
            blur={2.4}
            far={3}
          />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={interactive}
          rotateSpeed={0.55}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.55}
          dampingFactor={0.08}
          enableDamping
          onStart={() => setDragging(true)}
          onEnd={() => setDragging(false)}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
