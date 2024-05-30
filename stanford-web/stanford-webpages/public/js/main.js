//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position, so we can make the stanford move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'stanford';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Slider elements and value displays
const var1 = document.getElementById('myRange_J1');
const val1 = document.getElementById('valueDisplay_J1');

const var2 = document.getElementById('myRange_J2_Plane003');
const val2 = document.getElementById('valueDisplay_J2');

const var3 = document.getElementById('myRange_J3_Cube');
const val3 = document.getElementById('valueDisplay_J3');

const var4 = document.getElementById('myRange_J4');
const val4 = document.getElementById('valueDisplay_J4');

const var5 = document.getElementById('myRange_J5');
const val5 = document.getElementById('valueDisplay_J5');

const var6 = document.getElementById('myRange_J6');
const val6 = document.getElementById('valueDisplay_J6');

//Load the file
loader.load(
  `models/${objToRender}/stanford.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    object.scale.setScalar(4);
    object.position.y=-10;
    object.position.y=-10;
    object.position.z=-10;

    scene.add(object);

    let obj1 = gltf.scene.getObjectByName("Cylinder");
    var1.addEventListener("input", function (event) {
      let value = event.target.value;
      obj1.rotation.y = value*(22/7)/180; // Adjust as needed
      val1.textContent = value;
    });

    let obj2 = gltf.scene.getObjectByName("Cylinder001");
    var2.addEventListener("input", function (event) {
      let value = event.target.value;
      obj2.rotation.y = value*(22/7)/180; // Adjust as needed
      val2.textContent = value;
    });

    let obj3 = gltf.scene.getObjectByName("Cube");
    var3.addEventListener("input", function (event) {
      let value = event.target.value;
      obj3.position.x = value; // Adjust as needed
      val3.textContent = value;
    });

    let obj4 = gltf.scene.getObjectByName("Circle001");
    var4.addEventListener("input", function (event) {
      let value = event.target.value;
      obj4.rotation.x = value*(22/7)/180; // Adjust as needed
      val4.textContent = value;
    });

    let obj5 = gltf.scene.getObjectByName("Plane");
    var5.addEventListener("input", function (event) {
      let value = event.target.value;
      obj5.rotation.z = value*(22/7)/180; // Adjust as needed
      val5.textContent = value;
    });

    let obj6 = gltf.scene.getObjectByName("Cylinder005");
    var6.addEventListener("input", function (event) {
      let value = event.target.value;
      obj6.rotation.y = value*(22/7)/180; // Adjust as needed
      val6.textContent = value;
    });


  },

 


  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "stanford" ? 25 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "stanford" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "stanford") {
  controls = new OrbitControls(camera, renderer.domElement);
}

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  //Here we could add some code to update the scene, adding some automatic movement

  //Make the stanford move
  if (object && objToRender === "stanford") {
    //I've played with the constants here until it looked good 
    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//add mouse position listener, so we can make the stanford move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

//Start the 3D rendering
animate();