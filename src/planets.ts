import * as THREE from "three";

class Planet {
        scene;
        camera;
        renderer;

    constructor(){
        console.log("Planetes en creation..")
        this.init()
    }
    
    init = ()=> {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 )

        this.scene.add(this.camera)
        
        // Moteur de rendu
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( this.renderer.domElement )

        // On rend notre scene disponible
        this.renderer.render(this.scene, this.camera);
    }
}


export default Planet;