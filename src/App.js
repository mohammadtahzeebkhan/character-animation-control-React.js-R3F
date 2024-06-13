import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import useSound from 'use-sound';
import footstepSound  from './footStep.mp3'
function Soldier({ model, animations }) {
  const group = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const actions = useRef({});
  const [activeAction, setActiveAction] = useState(null);
  const [playFootstepSound, { stop: stopFootstepSound }] = useSound(footstepSound);
  useEffect(() => {
    if (animations) {
      animations.forEach((clip, index) => {
        const action = mixer.clipAction(clip, group.current);
        actions.current[index] = action;
      });
    }
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    let index,newPosition,newRotation;
    switch (key) {
      case '1':
        stopFootstepSound()
        index = 0;
        newPosition = new THREE.Vector3(0, 0, 0);
        newRotation = new THREE.Vector3(0, Math.PI , 0);
        
        break;
      case '2':
        index = 1;
        newPosition = new THREE.Vector3(0, 0, 0);
        newRotation = new THREE.Vector3(0, 0 , 0);
        break;
        case '3':
          index = 2;
          newPosition = new THREE.Vector3(0, 0, 0);
          newRotation = new THREE.Vector3(0, Math.PI , 0);
          break;
          case '4':
            index = 3;
            newPosition = new THREE.Vector3(0, 0, 0);
            newRotation = new THREE.Vector3(0, Math.PI , 0);
            break;
      default:
        return;
    }
    if (activeAction) activeAction.stop();
    const newAction = actions.current[index];
    newAction.play();
    setActiveAction(newAction);

    if (group.current) {
      group.current.position.copy(newPosition);
      group.current.rotation.set(newRotation.x, newRotation.y, newRotation.z);

      playFootstepSound();
    }
    
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      //window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeAction]);

  return <primitive ref={group} object={model} />;
}

function Scene() {
  const { scene, animations } = useGLTF('/Soldier.glb');
  return (
    <>
      <ambientLight intensity={1} />
      <Soldier model={scene} animations={animations} />
    </>
  );
}

function App() {
  return (
    <Canvas style={{height:"100vh"}} camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
