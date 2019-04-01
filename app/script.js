if ( WEBGL.isWebGLAvailable() === false ) {
  document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
var container, stats, controls, jointControl;
var camera, scene, renderer, light;
var childObjects = [];
var clock = new THREE.Clock();
var mixer;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var activeModel;

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.set( 100, 200, 300 );


  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, 100, 0 );
  controls.update();
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xa0a0a0 );
  scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

  // ground
  var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  mesh.rotation.x = - Math.PI / 2;
  mesh.receiveShadow = true;
  scene.add( mesh );
  var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add( grid );

  loadModel('IdleM.FBX');

  // Light
  light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
  light.position.set( 0, 200, 0 );
  scene.add( light );
  light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 200, 100 );
  light.castShadow = true;
  light.shadow.camera.top = 90;
  light.shadow.camera.bottom = - 50;
  light.shadow.camera.left = - 60;
  light.shadow.camera.right = 60;
  scene.add( light );

  lightControl = new THREE.TransformControls( camera, renderer.domElement );
  lightControl.addEventListener( 'change', render );
  lightControl.addEventListener( 'dragging-changed', function ( event ) {
    controls.enabled = ! event.value;
  } );
  lightControl.attach( light );
  lightControl.setMode( "translate" );
  scene.add( lightControl );
}

function loadModel(model) {
    if(activeModel){
      scene.remove(activeModel);
      childObjects.forEach(child => scene.remove(child));
      childObjects = [];
    }
    // model
    var joints = ["mixamorigHips", "mixamorigSpine", "mixamorigNeck", "mixamorigHead", "mixamorigLeftShoulder", "mixamorigLeftArm", "mixamorigLeftForeArm", "mixamorigLeftHand", "mixamorigRightShoulder", "mixamorigRightArm", "mixamorigRightForeArm", "mixamorigRightHand", "mixamorigRightUpLeg", "mixamorigRightLeg", "mixamorigRightFoot", "mixamorigRightToeBase", "mixamorigLeftUpLeg", "mixamorigLeftLeg", "mixamorigLeftFoot", "mixamorigLeftToeBase"];
    var loader = new THREE.FBXLoader();
    loader.load( model, function ( object ) {
  
      object.traverse( function ( child ) {
        if ( child.isMesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
        // child.material =  new THREE.MeshPhongMaterial();

        if (child.isObject3D && child.name != "Alpha_Surface" && child.name != "Alpha_Joints"){
          // !joints.includes(child.name) && !/\d/.test(child.name) && joints.push(child.name);
          
          if(joints.includes(child.name)){
            
            var material = new THREE.MeshPhongMaterial( { side: THREE.DoubleSide, depthTest: false } );
            var geometry = new THREE.SphereGeometry( 3, 5, 5 );
            var sphere = new THREE.Mesh( geometry, material );
  
            sphere.material.color.set( 0xffffff );
            sphere.material.wireframe = true;
            sphere.renderOrder = 0;
  
            childObjects.push(sphere);
            child.add( sphere );
          }
        }
      } );
      activeModel = object;
      scene.add( object );
    } );
}
//
function onWindowResize() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
//
function animate() {
  requestAnimationFrame( animate );
  render();
}
function render() {
  renderer.render( scene, camera );
}

function onDocumentMouseDown(event) {
    event.preventDefault();
    once = true;
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    
    var intersects = raycaster.intersectObjects(childObjects);

    if (intersects.length > 0) {
      if(!jointControl){
        jointControl = new THREE.TransformControls( camera, renderer.domElement );
        jointControl.addEventListener( 'change', render );
        jointControl.attach( intersects[0].object.parent );
        jointControl.setMode( "rotate" );
        jointControl.setSpace( "local" );
        jointControl.addEventListener( 'dragging-changed', function ( event ) {
          controls.enabled = ! event.value;
        } );
        scene.add( jointControl );
      } else {
        jointControl.attach( intersects[0].object.parent );
      }
    } else {
      if(controls.enabled && jointControl){
        jointControl.detach();
      }
      
    }

}

function toggleJoints () {
  childObjects.forEach(child => child.visible = !child.visible);
}

window.addEventListener( 'keydown', function ( event ) {
    switch ( event.keyCode ) {
      case 81: // Q
        toggleJoints();
        break;
    }
});

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('touchstart', onDocumentMouseDown, false);

