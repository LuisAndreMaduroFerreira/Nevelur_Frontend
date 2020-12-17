import React, { Component } from 'react'
import * as THREE from "three";
import smoke_resource from '../../resource/smoke_resource/smoke_resource'

class BackgroundComponent extends React.Component{
    componentDidMount() {
        let scene, camera, renderer, cloudParticles = [];
        var image = smoke_resource();

        var init = function (mount) {
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,1000);
          camera.position.z = 1;
          camera.rotation.x = 1.16;
          camera.rotation.y = -0.12;
          camera.rotation.z = 0.27;
          let ambient = new THREE.AmbientLight(0x555555);
          scene.add(ambient);
          const light = new THREE.PointLight( 0xffffff, 1, 200 );
          light.position.set( 200, 450, 200 );
          scene.add( light );
          //setting alpha towards total transparency
          renderer = new THREE.WebGLRenderer({ alpha: true } );
          renderer.setSize(window.innerWidth,window.innerHeight);
          scene.fog = new THREE.FogExp2(0x072837, 0.001);
          //default value, 
          renderer.setClearColor(0x000000, 0 );
          mount.appendChild(renderer.domElement);

          let loader = new THREE.TextureLoader();
            loader.load(image, function(texture){
                let cloudGeo = new THREE.PlaneBufferGeometry(500,500);
                let cloudMaterial = new THREE.MeshLambertMaterial({
                map:texture,
                transparent: true
                });

                for(let p=0; p<140; p++) {
                    let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                    cloud.position.set(
                      Math.random()*900 -400,
                      500,
                      Math.random()*600-450
                    );
                    cloud.rotation.x = 1.16;
                    cloud.rotation.y = -0.12;
                    cloud.rotation.z = Math.random()*2*Math.PI;
                    cloud.material.opacity = 0.22;
                    cloudParticles.push(cloud);
                    scene.add(cloud);
                  }
            });
          window.addEventListener("resize", onWindowResize, false);
          render();
        }
        
        function onWindowResize () {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }

        var render =  function () {
          cloudParticles.forEach(p => {
              p.rotation.z -= 0.001;
          })
          renderer.render(scene,camera);
          requestAnimationFrame(render);
        }
        init(this.mount);
      }

      render() {
        return (       
        <div className="background-pane"
        ref={mount => { this.mount = mount}}>
            {}
        </div>
        )}


}

export default BackgroundComponent;