import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class BasicDemoWorld {

	constructor()
	{
		this._Initialize();
	}

	_Initialize() {
		this._threeJS = new THREE.WebGLRenderer();
		this._threeJS.shadowMap.enabled = true;
		this._threeJS.shadowMap.type = THREE.PCFSoftShadowMap;
		this._threeJS.setPixelRatio(window.devicePixelRatio);
		this._threeJS.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this._threeJS.domElement);

		window.addEventListener("resize", () => {
            this._OnWindowResize();
        }, false);

		const fov = 60;
		const aspect = window.innerWidth / window.innerHeight;
		const near = 0.1;
		const far = 1000;
		this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		this._camera.position.set(75,20,0);

		this._scene = new THREE.Scene();

		let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(20, 100, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 100;
        light.shadow.camera.right = -100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        this._scene.add(light);

        light = new THREE.AmbientLight(0x101010);
        this._scene.add(light);

		// Orbit Controls
		const controls = new OrbitControls(this._camera, this._threeJS.domElement);
		controls.target.set(0, 20, 0);
		controls.update();

		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load([
			'/image/bluecloud_ft.jpg',
            '/image/bluecloud_bk.jpg',
            '/image/bluecloud_up.jpg',
            '/image/bluecloud_dn.jpg',
            '/image/bluecloud_rt.jpg',
            '/image/bluecloud_lf.jpg',
		]);

		this._scene.background = texture;

		this._RAF();
	}

	_OnWindowResize() {
		this._camera.aspect = window.innerWidth / window.innerHeight;
		this._camera.updateProjectionMatrix();
		this._threeJS.setSize(window.innerWidth, window.innerHeight);
	}

	_RAF() {
        requestAnimationFrame(() => {
            this._threeJS.render(this._scene, this._camera);
            this._RAF();
        });
    }
}

let _APP = null;

window.addEventListener("DOMContentLoaded", () => {
	_APP = new BasicDemoWorld();
})