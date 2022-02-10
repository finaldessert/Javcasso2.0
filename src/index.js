import * as THREE from 'three';
import * as SPHERE from './sphere.js';
import * as PARTICLE from'./particles.js';
import * as BACKGROUND from './background.js';

document.addEventListener('DOMContentLoaded', function(){
const container = document.getElementById('container')
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
camera.position.z = 5;

//renderer 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// light 
const light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 0, 128, 128 );
scene.add( directionalLight );

//scene 
scene.add( SPHERE.insidesphere );
scene.add( SPHERE.outersphere );
scene.add( PARTICLE.outerparticle1 );
scene.add( PARTICLE.outerparticle2 );
// scene.add( BACKGROUND.backgroundparticles );

// mouse event listener

// document.addEventListener('mousemove', animatebackground)



//animate method

function animate(){
    SPHERE.insidesphere.rotation.y += 0.001;
    SPHERE.insidesphere.rotation.x += 0.001;

    SPHERE.outersphere.rotation.y += 0.002;
    SPHERE.outersphere.rotation.x += 0.002;

    PARTICLE.outerparticle1.rotation.y += 0.001;
    PARTICLE.outerparticle2.rotation.y += 0.001;
    // BACKGROUND.backgroundparticles.rotation.y -= 0.0005;

    requestAnimationFrame ( animate );
    renderer.render ( scene, camera );
}
animate();
})