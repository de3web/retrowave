// Easy to use Variables
var themePath = 'wp-content/themes/dustin2018/';

// RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
canvasContainer = document.getElementById('canvas-container');
canvasContainer.appendChild( renderer.domElement );

// CAMERA
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 3000 );
camera.position.set(0,100,400);

// SCENE
var scene = new THREE.Scene();

// LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 1);
scene.add(light1);

var fontLoader = new THREE.FontLoader();
var font = fontLoader.load(themePath + "fonts/helvetiker_regular.typeface.json", function(font){
    var textGeometry = new THREE.TextGeometry('Dustin', {
        font: font, 
        size: 160,
        height: 10,
        material: 1,
        bevelThickness: 1,
        extrudeMaterial: 1,
    });
    textGeometry.center();

    
    // Very Basic Neon Green
    // var material = new THREE.MeshLambertMaterial({color: 0x39FF14});

    // Spacey Space
    var textureLoader = new THREE.TextureLoader();
    var spaceTexture = textureLoader.load(themePath + 'img/bg-space-colours_texture.jpg' );
    var material = new THREE.MeshLambertMaterial({map: spaceTexture});

    var mesh = new THREE.Mesh(textGeometry, material);
    // position is (X,Y,Z);
    var posX = (window.innerWidth / 2);

    console.log(posX);
    mesh.position.set(0,0,-1000);
    
    scene.add(mesh);

    // create custom material from the shader code above
	// that is within specially labeled script tags
	var customMaterial = new THREE.ShaderMaterial({
        uniforms: { 
            "c": { type: "f", value: 0.2 },
            "p": { type: "f", value: 2.7 },
            glowColor: { type: "c", value: new THREE.Color(0x0fff00) },
            viewVector: { type: "v3", value: camera.position }
        },
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true
    });
    // probably breaks here?
    textGlow = new THREE.Mesh( textGeometry.clone(), customMaterial.clone() );
    textGlow.position.set(0,0,-1000);
    // var meshPosition = mesh.position;
    // console.log(meshPosition);

    textGlow.position = mesh.position;
    textGlow.scale.multiplyScalar(1.1);
    // console.log(textGlow);
    
    // scene.add( textGlow );

    var exampletextureLoader = new THREE.TextureLoader();
    var examplespaceTexture = exampletextureLoader.load(themePath + 'img/bg-space-colours_texture.jpg' );
    examplegeometry = new THREE.BoxGeometry(200, 200, 200);
    examplematerial = new THREE.MeshLambertMaterial({map: spaceTexture});

    examplemesh = new THREE.Mesh(examplegeometry, examplematerial);
    examplemesh.position.set(0,0,-1000);
    scene.add(examplemesh);
    
    requestAnimationFrame(render);
    function render() {
        mesh.rotation.x += 0.005;
        // textGlow.rotation.x += 0.005;
        examplemesh.rotation.y += 0.01;
        examplemesh.rotation.x += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
});