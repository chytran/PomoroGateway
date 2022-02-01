import * as THREE from 'three';

class BasicDemoWorld {
    // Declaring each variable
    public _threeJS: any;

    public w: number = window.innerWidth;
    public h: number = window.innerHeight;

    constructor()
    {
        this._Initialize();
    }

    _Initialize() {
        this._threeJS = new THREE.WebGLRenderer();
        this._threeJS.shadowMap.enabled = true;
        this._threeJS.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threeJS.setPixelRatio(window.devicePixelRatio);
        this._threeJS.setSize(this.w / this.h);

        document.body.appendChild(this._threeJS.domElement);
    }
}

let _APP: any = null;

window.addEventListener("DOMContentLoaded", () => {
    _APP = new BasicDemoWorld();
})