//declare global variables
var scene, camera, renderer;
var step = 0;
var sun, mercury, venus, earth, mar, jupiter, saturn, uranus, neptune;
var titan, iapetus;
var controls;
var gui;

function init() {
    //initStats();
    //initGuiControl();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a render and set the size
    renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(0x111111, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);
}

function setupCameraAndLights() {
    camera = new THREE.PerspectiveCamera(
        75,                                        //angle
        window.innerWidth / window.innerHeight,    //aspect
        0.1,                                        //inner plane
        1000                                        //far plane
        );
    camera.position.z = 5;
	
	/* camera.position.x = 5;
    camera.position.y = 5; */
    camera.position.z = 5;
    camera.lookAt(scene.position);
}

function createGeometry() {

    //var sunGeometry = new THREE.SphereGeometry(.1, 8, 6, 0, Math.PI * 2, 0, Math.PI);
	var sunGeometry = new THREE.SphereGeometry(.1, 8, 6);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xffffcc });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);

	var mercuryGeometry = new THREE.SphereGeometry(.01, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x993300 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
	
	var venusGeometry = new THREE.SphereGeometry(.02, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var venusMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
	
    var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x0033CC });
    earth = new THREE.Mesh(venusGeometry, earthMaterial);
	
    var marsMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    mars = new THREE.Mesh(mercuryGeometry, marsMaterial);
	
	var jupiterGeometry = new THREE.SphereGeometry(.05, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var jupiterMaterial = new THREE.MeshLambertMaterial({ color: 0xFF3300 });
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
	
	var saturnGeometry = new THREE.SphereGeometry(.04, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var saturnMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
	
	var uranusGeometry = new THREE.SphereGeometry(.03, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var uranusMaterial = new THREE.MeshLambertMaterial({ color: 0x00CC66 });
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
	
    var neptuneMaterial = new THREE.MeshLambertMaterial({ color: 0x003366 });
    neptune = new THREE.Mesh(uranusGeometry, neptuneMaterial);
	
	titan = new THREE.Mesh(mercuryGeometry,marsMaterial);
	iapetus = new THREE.Mesh(mercuryGeometry,jupiterMaterial);
	
    // position the spher
    // add the sphere to the scene
    scene.add(sun);
	scene.add(mercury);
	scene.add(venus);
	scene.add(earth);
	scene.add(mars);
	scene.add(jupiter);
	scene.add(saturn);
	scene.add(uranus);
	scene.add(neptune);
	
	scene.add(titan);
	scene.add(iapetus);
	
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0,0,5000);
	scene.add(spotLight);
}

// call the render function
function animate() {
    //stats.update();
	step++;	
	var normDistance = .5;
	if(controls.goOrbit)
	{
		mercury.position.x = .3*normDistance*((Math.cos(step*controls.normSpeed/(.240))));
		mercury.position.y = .3*normDistance*((Math.sin(step*controls.normSpeed/(.240)))); 
		venus.position.x = .6*normDistance*((Math.cos(step*controls.normSpeed/(.615))));
		venus.position.y = .6*normDistance*((Math.sin(step*controls.normSpeed/(.615)))); 
		earth.position.x = 1*normDistance*((Math.cos(step*controls.normSpeed/1)));
		earth.position.y = 1*normDistance*((Math.sin(step*controls.normSpeed/1))); 
		mars.position.x = 1.5*normDistance*((Math.cos(step*controls.normSpeed/(1.88))));
		mars.position.y = 1.5*normDistance*((Math.sin(step*controls.normSpeed/(1.88)))); 
		jupiter.position.x = 2.5*normDistance*((Math.cos(step*controls.normSpeed/(11.862))));
		jupiter.position.y = 2.5*normDistance*((Math.sin(step*controls.normSpeed/(11.862))));
		saturn.position.x = 3.5*normDistance*((Math.cos(step*controls.normSpeed/(29.457))));
		saturn.position.y = 3.5*normDistance*((Math.sin(step*controls.normSpeed/(29.457))));
		uranus.position.x = 5.5*normDistance*((Math.cos(step*controls.normSpeed/(84.017))));
		uranus.position.y = 5.5*normDistance*((Math.sin(step*controls.normSpeed/(84.017)))); 	 	
		neptune.position.x = 8.5*normDistance*((Math.cos(step*controls.normSpeed/(164.8))));
		neptune.position.y = 8.5*normDistance*((Math.sin(step*controls.normSpeed/(164.8))));
		
		titan.position.x = saturn.position.x + .2*normDistance*((Math.cos(step*controls.normSpeed/(1))));
		titan.position.y = saturn.position.y// + .2*normDistance*((Math.sin(step*controls.normSpeed/(1))));
		titan.position.z = saturn.position.z + .2*normDistance*((Math.sin(step*controls.normSpeed/(1))));
		iapetus.position.x = saturn.position.x + .4*normDistance*((Math.cos(step*controls.normSpeed/(2))));
		iapetus.position.y = saturn.position.y //+ .4*normDistance*((Math.sin(step*controls.normSpeed/(2))));
		iapetus.position.z = saturn.position.z + .4*normDistance*((Math.sin(step*controls.normSpeed/(2))));
	}

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function initGuiControl() {
	controls = new function(){
		this.normSpeed = 1;
		this.goOrbit = true;
	}
	gui = new dat.GUI();
	gui.add(controls, 'normSpeed', 0, 2.0);
	gui.add(controls, 'goOrbit');
}

window.onload = function () {
    init();
	setupCameraAndLights();
    createGeometry();
	initGuiControl();
    animate();
};