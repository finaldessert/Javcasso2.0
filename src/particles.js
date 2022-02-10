import * as THREE from 'three';

const particlematerial1 = new THREE.PointsMaterial({
    size: 0.0001    ,
    color: 'red'
})
const sphereparticlegeo1 = new THREE.SphereGeometry( 1.2, 32, 16 );
const outerparticle1 = new THREE.Points( sphereparticlegeo1, particlematerial1 );

const particlematerial2 = new THREE.PointsMaterial({
    size: 0.0001    ,
    color: 'red'
})
const sphereparticlegeo2 = new THREE.SphereGeometry( 1, 31, 15 );
const outerparticle2 = new THREE.Points( sphereparticlegeo2, particlematerial2 );

export {outerparticle1, outerparticle2};