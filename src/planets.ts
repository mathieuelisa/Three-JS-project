import * as THREE from "three";

class Planet {
        scene;
        camera;
        renderer;
        geometry;
        material;
        mesh;
        pointLight;
        ambientLight;

        speed:number

    constructor(){
        console.log("Planetes en creation..")
        this.init()
    }
    
    init = ()=> {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 )
        this.camera.position.z = 5;
        
        this.scene.add(this.camera)

        // Moteur de rendu
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio(window.devicePixelRatio)

        
        // const texture = new THREE.TextureLoader().load( 'images/earthmap1k.jpg' );

        // On choisi notre forme à rendre
        this.geometry = new THREE.SphereGeometry(0.6, 32, 32);
        this.material = new THREE.MeshPhongMaterial( { 
            roughness:1,
            metalness:0,
            // map: texture
          } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
            this.scene.add( this.mesh );

        // On ajoute de la lumiere
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        this.scene.add(this.ambientLight)

        this.pointLight = new THREE.PointLight(0xffffff, 1);
        this.pointLight.position.set( 30, -30, 30);
        this.scene.add( this.pointLight );

        
  
        document.body.appendChild( this.renderer.domElement )
    
        this.animate()

        this.renderer.render(this.scene, this.camera);

    }


    animate = () =>{
    
        this.mesh.rotation.x -= 0.010;
        this.mesh.rotation.z -= 0.010;
        
        this.renderer.render(this.scene, this.camera);
        
        requestAnimationFrame( this.animate );
    }

    
}


export default Planet;