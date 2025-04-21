import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Get Client Values

const cursorValues = {
  x: 0,
  y: 0,
};
// console.log(cursorValues.x)
window.addEventListener("mousemove", (e) => {
  cursorValues.x = e.clientX / 100 - 0.5;
  cursorValues.y = - (e.clientY / 100 -0.5);
});

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
// controls

const controls = new OrbitControls(camera,canvas)
controls.enableDamping=true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const animation = () => {
  window.requestAnimationFrame(animation)
  renderer.render(scene, camera);
  controls.update()
};
animation();
