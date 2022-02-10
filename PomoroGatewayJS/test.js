import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import Stats from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/libs/stats.module.js';

var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var group1 = new THREE.Object3D();
var cubeGeometry = new THREE.CubeGeometry(50, 50, 50);

var cube1 = new THREE.Mesh(cubeGeometry);
cube1.position.set(0, 50, 50);
var cube2 = new THREE.Mesh(cubeGeometry);
cube2.position.set(0, 150, 50);

cube1.userData.parent = group1;
cube2.userData.parent = group1;
group1.add(cube1);
group1.add(cube2);
group1.name = "Group 1";

var group2 = new THREE.Object3D();
var cube3 = new THREE.Mesh(cubeGeometry);
cube3.position.set(300, 50, 50);
var cube4 = new THREE.Mesh(cubeGeometry);
cube4.position.set(300, 150, 50);

cube3.userData.parent = group2;
cube4.userData.parent = group2;
group2.add(cube3);
group2.add(cube4);
group2.name = "Group 2";

console.log(group1);

scene.add(group1);
scene.add(group2);

var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.z = 500;


render();
animate();


function animate() {
  requestAnimationFrame( animate );

}

function render() {
  renderer.render( scene, camera );
}


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();



function onMouseMove( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  // update the picking ray with the camera and mouse position
//   raycaster.setFromCamera( mouse, camera );

  // calculate objects intersecting the picking ray
//   var intersects = raycaster.intersectObjects( scene.children, true );
//   if(intersects && intersects[0]) {
//     console.log('GROUP IS ' + intersects[0].object.userData.parent.name)
//   }
}

document.addEventListener('mousemove', onMouseMove)