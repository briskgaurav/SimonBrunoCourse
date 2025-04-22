import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const sphere = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshStandardMaterial({ color: "white" });
material.roughness = .5
const SphereMesh = new THREE.Mesh(sphere, material);
SphereMesh.position.y = 0.5;
SphereMesh.rotation.x = Math.PI / 3;
SphereMesh.rotation.z = Math.PI / 3;
scene.add(SphereMesh);

const plane = new THREE.PlaneGeometry(3, 3);
const materialPlane = new THREE.MeshStandardMaterial({
  color: "white",
  side: THREE.DoubleSide,
});
materialPlane.roughness = .5
const planeMesh = new THREE.Mesh(plane, materialPlane);
scene.add(planeMesh);
planeMesh.rotation.x = Math.PI / 2;

//Lights
// const AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(AmbientLight);

const directionalLights = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLights.position.y =1.5
directionalLights.position.z =-1
scene.add(directionalLights);

// const Hemispherelight = new THREE.HemisphereLight(0x02C1C3, 0xFE305F, 1);
// scene.add(Hemispherelight);

const PointLight = new THREE.PointLight(0x00ffff,1, 5,20);
PointLight.position.x= 1
PointLight.position.y= .15
scene.add(PointLight)

const spotLight = new THREE.SpotLight(0x000000,.8,.5, 0, 20 , 0.5, 1)
spotLight.position.y = 1
scene.add(spotLight)


const rectLight = new THREE.RectAreaLight( 'blue', .5,  3, 3);
scene.add( rectLight )


//helpers
// const pointLightHelper = new THREE.PointLightHelper( PointLight, .2 );
// scene.add( pointLightHelper );
// const directionalLightsHelper = new THREE.DirectionalLightHelper( directionalLights, .2 );
// scene.add( directionalLightsHelper );

// const spotLightHelpers = new THREE.SpotLightHelper( spotLight, .1);
// scene.add( spotLightHelpers );


// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
let clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  SphereMesh.rotation.y = elapsedTime * Math.PI/4
  SphereMesh.rotation.z = elapsedTime * Math.PI/4
  SphereMesh.rotation.x = elapsedTime * Math.PI/4
  directionalLights.rotation.y = elapsedTime * Math.PI/4
  spotLight.rotation.y = elapsedTime * Math.PI/4
  spotLight.rotation.x = elapsedTime * Math.PI/4
  spotLight.rotation.z = elapsedTime * Math.PI/4
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
  controls.update();
};
tick();
