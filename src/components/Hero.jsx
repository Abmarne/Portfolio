import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Stage,
  ContactShadows,
  Html,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TechModel() {
  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb",
  );
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(t) * 0.05;

      // Pulse scale smoothly on hover
      const targetScale = hovered ? 1.1 : 1.0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1,
      );

      // Subtile mouse follow (reduced range to prevent glitching)
      const targetRotationX = (state.mouse.y * Math.PI) / 20;
      const targetRotationY = (state.mouse.x * Math.PI) / 20;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05,
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05,
      );
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} scale={2.8} />
    </group>
  );
}

// Improved High-Quality "Cyber-Core" fallback generated entirely with code
function TechVisual() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Moving outer rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 128]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.8, 0.04, 16, 128]} />
        <meshStandardMaterial
          color="#0088ff"
          emissive="#0088ff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Central Pulsing Geometric Core */}
      <Float speed={5} rotationIntensity={2} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={1}
            roughness={0.1}
            emissive="#00ff88"
            emissiveIntensity={0.5}
          />
          <mesh>
            <icosahedronGeometry args={[1.22, 1]} />
            <meshStandardMaterial
              color="#00ff88"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </mesh>
      </Float>

      {/* Atmospheric Particles */}
      <points>
        <sphereGeometry args={[2.5, 32, 32]} />
        <pointsMaterial size={0.02} color="#0088ff" transparent opacity={0.5} />
      </points>
    </group>
  );
}

function FloatingParticles() {
  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.position.x =
        Math.sin(t * 0.5) * 0.2 + state.mouse.x * 0.1;
      pointsRef.current.position.y =
        Math.cos(t * 0.5) * 0.2 + state.mouse.y * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <sphereGeometry args={[10, 64, 64]} />
      <pointsMaterial
        size={0.015}
        color="#00ff88"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ff88" />

      <FloatingParticles />

      <PresentationControls
        global
        config={{ mass: 1, tension: 200 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Stage environment="city" intensity={0.6} contactShadow={false}>
          <Suspense fallback={<TechVisual />}>
            <TechModel />
          </Suspense>
        </Stage>
      </PresentationControls>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={20}
        blur={2.4}
        far={4.5}
      />
    </>
  );
}

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hero-content" style={{ zIndex: 2, maxWidth: "600px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", marginBottom: "1rem", lineHeight: 1.1 }}
        >
          Hi, I'm <span className="gradient-text">Abhiraj</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "1.5rem",
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          Full Stack Developer & Open Source Contributor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "1.1rem",
            maxWidth: "500px",
            marginBottom: "2.5rem",
            opacity: 0.8,
          }}
        >
          Building scalable apps, refining backend features, and creating
          open-source tools like <strong>regulated-form-validator</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
          style={{ display: "flex", gap: "20px" }}
        >
          <button
            style={{
              background: "var(--accent-gradient)",
              padding: "12px 30px",
              borderRadius: "30px",
              fontWeight: "600",
              color: "black",
            }}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          <button
            style={{
              border: "1px solid var(--accent-blue)",
              padding: "12px 30px",
              borderRadius: "30px",
              fontWeight: "600",
              color: "white",
            }}
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume
          </button>
        </motion.div>
      </div>

      <div
        className="hero-visual"
        style={{
          width: "50%",
          height: "100vh",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: "transparent", touchAction: "none" }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <Suspense
            fallback={
              <mesh>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color="#00ff88" wireframe />
              </mesh>
            }
          >
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
