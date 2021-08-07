import * as THREE from "three";

class Planet {
        scene;
        camera;

    constructor(){
        console.log("Planetes en creation..")
    }
    
    init = ()=> {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 )
    }
}


export default Planet;