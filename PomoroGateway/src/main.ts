import * as THREE from 'three';

class BasicDemoWorld {
    // Declaring each three.js variable
    public _threeJS: any;
    public _camera: any;
    public _scene: any;
    public _light: any;

    // Window dimension
    public w: number = window.innerWidth;
    public h: number = window.innerHeight;

    // Camera variables
    public fov: number = 60;
    public aspect: number = this.w / this.h;
    public near: number = 0.1;
    public far: number = 1000;

    constructor()
    {
        this._Initialize();
    }

    _Initialize() {
        // RENDERER
        this._threeJS = new THREE.WebGLRenderer();
        this._threeJS.shadowMap.enabled = true;
        this._threeJS.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threeJS.setPixelRatio(window.devicePixelRatio);
        this._threeJS.setSize(this.w / this.h);

        document.body.appendChild(this._threeJS.domElement);

        // CAMERA
        this._camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        this._camera.position.set(75, 20, 0); // x , y, z

        // SCENE
        this._scene = new THREE.Scene();

        // LIGHTING
        this._light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        this._light.position.set(20, 100, 0) // x, y, z
        this._light.target.position.set(0, 0, 0);
        this._light.castShadow = true;
        this._light.shadow.bias = -0.001;
        this._light.mapSize.width = 2048;
        this._light.mapSize.height = 2048;
        this._light.camera.near = 0.1;
        this._light.camera.far = 500.0;
        this._light.camera.near = 0.5;
        this._light.camera.left = 100;
        this._light.camera.right = -100;
        this._light.camera.top = 100;
        this._light.camera.bottom = -100;

        // add light to scene 
        this._scene.add(this._light);

        // Load
        // this._LoadAnimateModel();
        this._RAF();
    }

    _LoadAnimateModel() {

    }

    _RAF() {
        requestAnimationFrame(() => {
            this._threeJS.render(this._scene, this._camera);
            this._RAF();
        });
    }
}

let _APP: any = null;

window.addEventListener("DOMContentLoaded", () => {
    _APP = new BasicDemoWorld();
})