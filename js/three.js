

// =====================================
// CREATE SCENE
// =====================================


const scene = new THREE.Scene();





// =====================================
// CAMERA
// =====================================


const camera = new THREE.PerspectiveCamera(

    75,

    window.innerWidth /
    window.innerHeight,

    0.1,

    1000

);



camera.position.z = 6;








// =====================================
// RENDERER
// =====================================


const renderer =
new THREE.WebGLRenderer({

    alpha:true,

    antialias:true

});



renderer.setSize(

    window.innerWidth,

    window.innerHeight

);



renderer.setPixelRatio(
window.devicePixelRatio
);



renderer.domElement.style.position =
"fixed";


renderer.domElement.style.top =
"0";


renderer.domElement.style.left =
"0";


renderer.domElement.style.zIndex =
"-2";



document.body.appendChild(
renderer.domElement
);










// =====================================
// PARTICLE CREATION
// =====================================



const particlesGeometry =
new THREE.BufferGeometry();



const particleCount = 900;



const positions =
new Float32Array(
particleCount * 3
);



const colors =
new Float32Array(
particleCount * 3
);





for(
let i=0;
i<particleCount;
i++
){



const index =
i*3;



// spread particles


positions[index] =
(Math.random()-0.5)*18;


positions[index+1] =
(Math.random()-0.5)*18;


positions[index+2] =
(Math.random()-0.5)*18;





// colors


colors[index]=0.3;

colors[index+1]=0.1;

colors[index+2]=1;





}



particlesGeometry.setAttribute(

"position",

new THREE.BufferAttribute(
positions,
3
)

);



particlesGeometry.setAttribute(

"color",

new THREE.BufferAttribute(
colors,
3
)

);










// =====================================
// PARTICLE MATERIAL
// =====================================


const particlesMaterial =
new THREE.PointsMaterial({

size:0.035,

transparent:true,

opacity:.7,


vertexColors:true,


blending:
THREE.AdditiveBlending


});









// =====================================
// CREATE PARTICLES
// =====================================



const particles =
new THREE.Points(

particlesGeometry,

particlesMaterial

);



scene.add(particles);









// =====================================
// MOUSE INTERACTION
// =====================================


const mouse = {

x:0,

y:0

};



window.addEventListener(

"mousemove",

(event)=>{


mouse.x =
(event.clientX /
window.innerWidth)
-0.5;


mouse.y =
(event.clientY /
window.innerHeight)
-0.5;



}

);










// =====================================
// ANIMATION LOOP
// =====================================


const clock =
new THREE.Clock();



function animate(){


requestAnimationFrame(
animate
);



const elapsed =
clock.getElapsedTime();





// particle rotation


particles.rotation.y =
elapsed * .03;


particles.rotation.x =
elapsed * .015;





// mouse movement


particles.position.x +=

(
mouse.x * .05 -
particles.position.x
)
*.05;



particles.position.y +=

(
-mouse.y * .05 -
particles.position.y
)
*.05;







renderer.render(

scene,

camera

);



}



animate();









// =====================================
// RESPONSIVE
// =====================================


window.addEventListener(

"resize",

()=>{


camera.aspect =
window.innerWidth /
window.innerHeight;



camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,

window.innerHeight

);



}

);