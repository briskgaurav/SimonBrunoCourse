import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");


// Scene
const loaderText = new THREE.TextureLoader();
const doorColor = loaderText.load("./textures/door/color.jpg");
const alpha = loaderText.load("./textures/door/alpha.jpg");
const AO = loaderText.load("./textures/door/ambientOcclusion.jpg");
const height = loaderText.load("./textures/door/height.jpg");
const metalNess = loaderText.load("./textures/door/metalness.jpg");
const normal = loaderText.load('./textures/door/normal.jpg')

const scene = new THREE.Scene();

const Plane = new THREE.PlaneGeometry(1, 1);
const Torus = new THREE.TorusGeometry(0.2, 0.2, 30, 30);
const Sphere = new THREE.SphereGeometry(0.5, 16, 32);

// const material = new THREE.MeshBasicMaterial();
// material.map = doorColor;
// material.side= THREE.DoubleSide;
// // material.map = alpha
// material.transparent = true
// // material.opacity = .5

// const material = new THREE.MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new THREE.Color('#ffffff')

const material = new THREE.MeshStandardMaterial();
material.map=doorColor;
material.alphaMap=alpha;
material.transparent=true
material.aoMap=AO;
// material.metalness=metalNess;
material.normalMap=normal;
material.side= THREE.DoubleSide;



const SphereMesh = new THREE.Mesh(Sphere, material);
const ToursMesh = new THREE.Mesh(Torus, material);
const PlaneMesh = new THREE.Mesh(Plane, material);
SphereMesh.position.x = -2;
ToursMesh.position.x = 2;

const aoLights = new THREE.AmbientLight('#ffffff', .5)
const pointLight = new THREE.PointLight('white', 5)
pointLight.position.y = 3;
scene.add(aoLights)
scene.add(pointLight)


scene.add(SphereMesh, ToursMesh, PlaneMesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect =  sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();
const animation = () => {
  window.requestAnimationFrame(animation);
  const delta = clock.getDelta();
ToursMesh.rotation.x += 0.5 * delta;
PlaneMesh.rotation.x += 0.5 * delta;
SphereMesh.rotation.x += 0.5 * delta;

ToursMesh.rotation.y += 0.5 * delta;
PlaneMesh.rotation.y += 0.5 * delta;
SphereMesh.rotation.y += 0.5 * delta;
  renderer.render(scene, camera);
  controls.update();
};
animation();
