import * as THREE from "three";
import { ThisExpression } from "typescript";

class Planet {
        scene;
        camera;
        renderer;
        geometry;
        material;
        mesh;
        light;

        speed:number

    constructor(){
        console.log("Planetes en creation..")
        this.init()
    }
    
    init = ()=> {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 )
        this.scene.add(this.camera)
        
        this.camera.position.z = 5;

        // On choisi notre forme à rendre
        this.geometry = new THREE.SphereGeometry();
        this.material = new THREE.MeshLambertMaterial( { color: 0xDC0D0D  } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
            this.scene.add( this.mesh );

        // On ajoute un point de lumiere
        this.light = new THREE.PointLight();
        this.light.position.set( 30, 30, 30 );
        this.scene.add( this.light );

        // Moteur de rendu
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.setSize( window.innerWidth, window.innerHeight );
  
        document.body.appendChild( this.renderer.domElement )
        // On rend notre scene disponible
        this.renderer.render(this.scene, this.camera);

            this.animate()
    }


    animate = () =>{
        requestAnimationFrame( this.animate );
   
        this.camera.rotation.x = 25;
        this.camera.rotation.z = 25;
        
        
        this.camera.lookAt(this.mesh.position);
        
        this.renderer.render( this.scene, this.camera );

    }
}


export default Planet;