import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', function(){
const container = document.getElementById('container')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

const light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

const geometry1 = new THREE.SphereGeometry( 1, 32, 16 );
const material1 = new THREE.MeshLambertMaterial ({
    color: 0x0095DD,
    wireframe: true,
    wireframeLinewidth: 1
});

const geometry2 = new THREE.SphereGeometry( 1.2, 32, 16 );
const material2 = new THREE.MeshLambertMaterial ({
    color: 0x0095DD,
    wireframe: true,
    wireframeLinewidth: 1
});

const material = new THREE.PointsMaterial({
    color: 0xffffcc,
});

const geometry = new THREE.BufferGeometry();
var x, y, z;
() => times(1000, function(n){
  x = (Math.random() * 800) - 400;
  y = (Math.random() * 800) - 400;
  z = (Math.random() * 800) - 400;

  geometry.vertices.push(new THREE.Vector3(x, y, z));
});

var pointCloud = new THREE.Points(geometry, material);
scene.add(pointCloud);

const insidesphere = new THREE.Mesh( geometry1, material1 );
const outersphere = new THREE.Mesh( geometry2, material2 );

scene.add( insidesphere );
scene.add( outersphere );


camera.position.z = 5;

function animate(){
    insidesphere.rotation.y += 0.001;
    insidesphere.rotation.x += 0.001;

    outersphere.rotation.y += 0.002;
    outersphere.rotation.x += 0.002;

    requestAnimationFrame ( animate );
    renderer.render ( scene, camera );
}
animate();
})