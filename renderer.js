import * as Three from './three.module.js'
import { OrbitControls } from './OrbitControls.js'
import Plane from './Plane.js'

// Type your NFT edition here
const edition = 4

// define the rendering quality / higher = better looking / lower =  better performance
const quality = 1500


let camera, scene, controls, renderer, NFT
// get the HTML canvas
const canvas = document.getElementById('mainCanvas')
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}

// create the scene
scene = new Three.Scene()

// create and position the camera
camera = new Three.PerspectiveCamera(
  45,
  size.width / size.height,
  1,
  10000,
)
camera.position.z = 18
camera.position.y = 5
camera.rotateX = Math.PI / 2
scene.add(camera)


// fetch your NFT data - we will do it locally here
fetch(`./${edition}.json`).then(response => response.json())
  .then(data => {
    const attributes = data.attributes
    NFT = new Plane(
      attributes[0].value,
      attributes[1].value,
      attributes[2].value,
      attributes[3].value,
      attributes[4].value,
      attributes[5].value,
      attributes[6].value,
      attributes[7].value,
      quality,
      attributes[8].value
    )
    NFT.movePlane(0,5.1,0)
    NFT.addPlane(scene)
  })
  .catch(error => console.log(error));

//create the canvas renderer and start rendering
renderer = new Three.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = Three.sRGBEncoding;
document.body.appendChild(renderer.domElement)

// controls
controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.update()
controls.target.set(0, 5, 0)
camera.lookAt(0, 5, 0)

// here we update the renderer each frame to animate the NFT
const DELTA0 = Date.now()
const animate = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
  let current = Date.now()
  let elapsedTime = current - DELTA0;
  if(NFT !== undefined) NFT.update(elapsedTime)
}
animate()


// This is an extra step to make the canvas responsive 
window.addEventListener('resize', () => {
  size.width = window.innerWidth
  size.heigth = window.innerHeight
  camera.aspect = size.width / size.heigth
  camera.updateProjectionMatrix()
  renderer.setSize(size.width, size.heigth)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})