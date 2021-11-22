import * as Three from './three.module.js'
import vertexShader from './vertex.js'
import fragmentShader from './fragment.js'

export default class Plane{
    constructor(distortion,distortionStrength,frequency,strength,red,green,blue,speed,segments,gen){
        this.distortion = distortion
        this.distortionStrength = distortionStrength
        this.frequency = frequency
        this.strength = strength
        this.red = red
        this.green = green
        this.blue = blue
        this.speed = speed
        this.gen = gen
        this.setGeometry(segments)
        this.setMaterial()
        this.setMesh()
    }
    setGeometry(segments){
        this.geometry = new Three.PlaneGeometry(3,3,parseInt(segments),parseInt(segments))//3,3,1500,1500
    }
    setMaterial(){
        this.material = new Three.ShaderMaterial({
            uniforms:{
                uTime:{value: 0}
            },
            vertexShader:vertexShader(this.distortion,this.distortionStrength,this.frequency,this.strength),
            fragmentShader:fragmentShader(this.red,this.green,this.blue,this.gen),
            side:Three.DoubleSide
        })
    }
    setMesh(){
        this.mesh = new Three.Mesh(this.geometry, this.material)
    }
    movePlane(x,y,z){
        this.mesh.position.set(x,y,z)
    }
    disable(){
        this.mesh.visible = false;
    }
    enable(){
        this.mesh.visible = true;
    }
    addPlane(scene){
        scene.add(this.mesh)
    }
    update(time){
        this.material.uniforms.uTime.value = time * (this.speed)
    }
    delete(scene){
        this.material.dispose()
        this.geometry.dispose()
        scene.remove(this.mesh)
    }
}