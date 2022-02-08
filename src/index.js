import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', function(){
const container = document.getElementById('container')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

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

// sphere attributes

const geometry1 = new THREE.SphereGeometry(1, 31, 15);
const material1 = new THREE.MeshLambertMaterial ({
    color: 'red',
    wireframe: true,
    wireframeLinewidth: 1,
    transparent: true,
    shininess: 0,
});

const geometry2 = new THREE.SphereGeometry( 1.2, 32, 16 );
const material2 = new THREE.MeshLambertMaterial ({
    color: 'lightred',
    wireframe: true,
    wireframeLinewidth: 1
});


const insidesphere = new THREE.Mesh( geometry1, material1 );
const outersphere = new THREE.Mesh( geometry2, material2 );

// particles

const particlematerial = new THREE.PointsMaterial({
    size: 0.0001    ,
    color: 'red'
})
const sphereparticlegeo = new THREE.SphereGeometry( 1.2, 32, 16 );
const outerparticle = new THREE.Points( sphereparticlegeo, particlematerial );

// background particles

const backgroundparticlegeo = new THREE.BufferGeometry;
const backgroundparticlecount = 3000;
const backgroundparticlematerial = new THREE.PointsMaterial({
    size: 0.0001,
})

const particlePos = new Float32Array(backgroundparticlecount * 3);
// xyz, xyz, xyz, xyz

for(let i = 0; i < backgroundparticlecount * 3; i++) {
    particlePos[i] = (Math.random() - 0.5) * 10  ;
}

backgroundparticlegeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
const particlesMesh = new THREE.Points(backgroundparticlegeo, backgroundparticlematerial);

// scene addition

scene.add( insidesphere );
scene.add( outersphere );
scene.add( outerparticle );
scene.add( particlesMesh );

camera.position.z = 5;

// mouse event listener

// document.addEventListener('mousemove', animatebackground)



//animate method

function animate(){
    insidesphere.rotation.y += 0.001;
    insidesphere.rotation.x += 0.001;

    outersphere.rotation.y += 0.002;
    outersphere.rotation.x += 0.002;

    particlesMesh.rotation.y -= 0.0005;

    requestAnimationFrame ( animate );
    renderer.render ( scene, camera );
}
animate();
})