/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();


/**
 * Uniforms
 */
const uniforms = {
    u_time: {type: "f", value: 1.0},
    u_resolution: {type: "v2", value: new THREE.Vector2()},
    u_mouse: {type: "v2", value: new THREE.Vector2()}
};

// Update uniform's mouse
document.onmousemove = function(e){
    uniforms.u_mouse.value.x = e.pageX
    uniforms.u_mouse.value.y = e.pageY
}

/**
 * Object
 */
const geometry = new THREE.PlaneBufferGeometry(2, 2);
const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const update = () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    //camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Update uniform's resolution
    uniforms.u_resolution.value.x = sizes.width;
    uniforms.u_resolution.value.y = sizes.height;
}

window.addEventListener('resize', update);

// full screen on double click
window.addEventListener('dblclick', () => {
    // webkit for safari
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

    if(!fullscreenElement){
        // go full screen
        if(canvas.requestFullscreen){
            canvas.requestFullscreen();
        }else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen();
        }
    }else{
        // leave full screen
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.webkitExitFullscreen()){
            document.webkitExitFullscreen();
        }
    }
});


/**
 * Camera
 */
// Base camera
const camera = new THREE.Camera();
camera.position.z = 1;
scene.add(camera);




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
//renderer.setPixelRatio(window.devicePixelRatio);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // for better performance

update();


/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    // Update uniform's time
    uniforms.u_time.value = clock.getElapsedTime();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();