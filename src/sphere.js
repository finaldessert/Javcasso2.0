// sphere attributes
import * as THREE from 'three';

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
    color: 'red',
    wireframe: true,
    wireframeLinewidth: 1
});


const insidesphere = new THREE.Mesh( geometry1, material1 );
const outersphere = new THREE.Mesh( geometry2, material2 );

export {insidesphere, outersphere};

