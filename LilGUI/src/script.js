import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui'; 
import gsap from 'gsap';


// Canvas
const canvas = document.querySelector("canvas.webgl");
const gui = new GUI();

// Scene
const scene = new THREE.Scene();
const colorFormats = {
  color: '#ffff00',
  spin: ()=>{
    gsap.to(mesh.rotation,{
      duration:2,
      y:mesh.rotation.y + 10,
    })
  }
};

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: colorFormats.color });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Debug GUI
gui.add(mesh.position, "x", -3, 3, 0.1);
gui.add(mesh.position, "y", -3, 3, 0.1);
gui.add(mesh.position, "z", -3, 3, 0.1);
gui.add(mesh, 'visible');
gui.add(material, 'wireframe');

gui.addColor(colorFormats, 'color').onChange((value) => {
  material.color.set(value);
});
gui.add(colorFormats,'spin')



// Get Client Values

const cursorValues = {
  x: 0,
  y: 0,
};

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize',()=>{
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.height/sizes.width;
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height);
})


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
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

window.addEventListener('dblclick',()=>{
  if(document.fullscreenElement){
    canvas.requestFullscreen()
  }
  
})

const animation = () => {
  window.requestAnimationFrame(animation)
  renderer.render(scene, camera);
  controls.update()
};
animation();
