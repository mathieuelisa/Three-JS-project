import * as THREE from "three";

class Planet {
        scene;
        camera;
        renderer;
        geometry;
        material;
        mesh;

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

        // On choisi notre forme à rendre
        this.geometry = new THREE.SphereGeometry();
        this.material = new THREE.MeshDepthMaterial();
        this.mesh = new THREE.Mesh( this.geometry, this.material );
            this.scene.add( this.mesh );

            this.camera.position.z = 4;

            this.animate()
    }

    animate = () =>{
        // Animation du rendu
        requestAnimationFrame( this.animate );

        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;

        this.renderer.render( this.scene, this.camera );
    }
}


export default Planet;