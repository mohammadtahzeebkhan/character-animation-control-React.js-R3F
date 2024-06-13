
/*import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, controls, mixer,animations;

init();
animate();

function init() {
  scene = new THREE.Scene();
  const light = new THREE.AmbientLight(0xffffff, 1);
  
  light.position.set(0, 1, 0);
  scene.add(light);

  scene.background= new THREE.Color(0xffffff)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  function handleKeyUp(event) {
    // Handle key release events if needed
  }
  function handleKeyDown(event) {
    if (mixer && animations) {
      const key = event.key.toLowerCase();
      let index;
      switch (key) {
        case '1':
          index = 0; // Assuming '1' triggers the first animation
          break;
        case '2':
          index = 1; // Assuming '2' triggers the second animation
          break;
        // Add more cases for other animations as needed
        default:
          return;
      }
      mixer.stopAllAction(); // Stop all ongoing animations
      mixer.clipAction(animations[index]).play(); // Play the selected animation
    }
  }
  const loader = new GLTFLoader();

  loader.load(
    '/Soldier.glb',
    function (gltf) {
      const model = gltf.scene;
      console.log("modal",gltf.animations[0].play())
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      console.log("mixer")
       animations = gltf.animations;
      if (animations && animations.length) {
        animations.forEach((clip) => {

         // mixer.clipAction(clip).play();
        });
      }
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  camera.position.z = 5;
   // Event listeners for key presses
   window.addEventListener('keydown', handleKeyDown);
   window.addEventListener('keyup', handleKeyUp);
}

function animate() {
  requestAnimationFrame(animate);

  if (mixer) {
    mixer.update(0.01);
  }


  renderer.render(scene, camera);
}
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: For any global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 