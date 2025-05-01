import './style.css'
import * as THREE from 'three'
import vertexShader from './shaders/NoiseMouse/vertex.glsl'
import fragmentShader from './shaders/NoiseMouse/fragment.glsl'

// Scene Setup
const scene = new THREE.Scene();
scene.fog= new THREE.Fog(0xffffff, 10 , 15);


const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff);


// Geometry and Shader Material
const geometry = new THREE.PlaneGeometry(2, 2, 200, 200);

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0.0 },
    uMouse: { value: new THREE.Vector2(0.0, 0.0) },
  uHover: { value: 0.0 },
  },
  wireframe:true,
  side: THREE.DoubleSide,
  transparent:true,
  
 
});


const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
plane.scale.x = 4
plane.scale.y = 1.6

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (event) => {
  // Convert to normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycast from camera to mouse
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    const uv = intersects[0].uv;
    material.uniforms.uMouse.value.copy(uv);
    material.uniforms.uHover.value = 1.0;
    material.uniforms.uMouseVelocity.value.copy(mouseVelocity);
  } else {
    material.uniforms.uHover.value = 0.0;
  }
});


// Animate
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value = clock.getElapsedTime();
  renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



