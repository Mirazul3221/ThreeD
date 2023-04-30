const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('#test');
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias:true
});
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);



var texture = new THREE.TextureLoader().load('./image3D/istockphoto-1404349453-170667a-Recovered.jpg');
const backMatry = new THREE.SphereGeometry(20, 100, 100, 100);
var textured = new THREE.TextureLoader().load('./image3D/back.jpg');
    const backmaterial = new THREE.MeshBasicMaterial({
        // color: 0xf00000,
        // wireframe: true,
        side:THREE.BackSide,
    map: textured
       
    });
    const galaxy = new THREE.Mesh( backMatry, backmaterial );
scene.add(galaxy);


// ========================add moon around the earth==========================

var moonGeo = new THREE.SphereBufferGeometry(.2, 66, 66);
var moonImg = new THREE.TextureLoader().load('./image3D/moon.jpg');
var moonMat = new THREE.MeshBasicMaterial({
map: moonImg,
//     color: 0xff0000,
//  wireframe: true
 });
var moon = new THREE.Mesh(moonGeo, moonMat);
moon.position.x = 2;
const moonObj = new THREE.Object3D();
moonObj.add(moon)
scene.add(moonObj);

var moonGeo1 = new THREE.SphereBufferGeometry(1, 66, 66);
var moonImg1 = new THREE.TextureLoader().load('./image3D/marse.jpg');
var moonMat1 = new THREE.MeshBasicMaterial({
map: moonImg1,
    // color: 0xff0000,
//  wireframe: true
 });
var moon1 = new THREE.Mesh(moonGeo1, moonMat1);
moon1.position.x = 3.2;
const moonObj1 = new THREE.Object3D();
moonObj1.add(moon1)
scene.add(moonObj1);



var texture = new THREE.TextureLoader().load('./image3D/istockphoto-1404349453-170667a-Recovered.jpg');
var sphereGeo = new THREE.SphereBufferGeometry(1, 100,100 );
var sphereMat = new THREE.MeshBasicMaterial({
map: texture,
    // color: 0xff0000,
//  wireframe: true
 });
var sphere = new THREE.Mesh(sphereGeo, sphereMat);
scene.add(sphere);


camera.position.z = 5;
// controls = new THREE.OrbitControls(camera);
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 001;
    // controls.update();
    sphere.rotation.y += 0.01;
    galaxy.rotation.y += -0.001;
    sphere.position.z += 0.001; 
    if( sphere.position.z  > 5){
        sphere.position.z = -21; 
    }
    moon.rotation.y += 0.1;
    moonObj.position.z += 0.001; 
    moonObj.rotation.y += -0.03;
    if ( moonObj.position.z  > 5) {
        moonObj.position.z = -21; 
    }
    
    moonObj1.position.z += 0.001;
    moon1.rotation.y += -0.05;
    moonObj1.rotation.y += 0.01;
    if ( moonObj1.position.z  > 5) {
        moonObj1.position.z = -21; 
    }
    renderer.render(scene, camera);
};

animate();