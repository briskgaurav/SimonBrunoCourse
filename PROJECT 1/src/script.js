import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import gsap from "gsap";
import { degToRad } from "three/src/math/MathUtils.js";
import { vertexShader } from "../shaders/vertex";
import { fragmentShader } from "../shaders/fragment";
// const vertexShader = `
//   varying vec2 vUv;

//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;
// const fragmentShader = `
//   varying vec2 vUv;

//   void main() {
//     gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
//   }
// `;
// Canvas
const canvas = document.querySelector("canvas.webgl");
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("./textures/matcaps/7.png");
const Background = new THREE.SphereGeometry(5, 50, 50);
const BackgroundMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  side: THREE.DoubleSide,
});
const bg = new THREE.Mesh(Background, BackgroundMaterial);

// Scene
const scene = new THREE.Scene();
scene.add(bg);

// Lights
const aoLight = new THREE.AmbientLight("#ffffff", 0.5);
const pointLight = new THREE.PointLight("white", 5);
pointLight.position.y = 3;
scene.add(aoLight, pointLight);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 5;
controls.minDistance = 1;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize Handling
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
});

// Font & Text
const fontLoader = new FontLoader();
let textMesh; // make it global so we can animate later

const textMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    uTime: {
      value: 0,
    },
  },
});

fontLoader.load("/font.json", (font) => {
  const textGeo = new TextGeometry("FIRST PROJECT", {
    font: font,
    size: 0.5,
    height: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
    curveSegments: 5,
  });
  textGeo.center();



  textMesh = new THREE.Mesh(textGeo, textMaterial);
  scene.add(textMesh);

  const donutGeo = new THREE.TorusGeometry(0.3, 0.14, 20, 45);
  // const donutGeo = new THREE.PlaneGeometry(1,1,100,100);
  for (let i = 0; i < 200; i++) {
    const donut = new THREE.Mesh(donutGeo, textMaterial);
    scene.add(donut);
    donut.position.x = (Math.random() - 0.5) * 10;
    donut.position.y = (Math.random() - 0.5) * 10;
    donut.position.z = (Math.random() - 0.5) * 10;
  }

  animate();
});

// Animation Loop
const clock = new THREE.Clock();
const animate = () => {

  textMaterial.uniforms.uTime.value += .1
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
