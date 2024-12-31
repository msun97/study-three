'use client'

import Content from '@/sections/Content';
import Tp from '@/sections/Tp';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


export default function Home() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      // 큐브 회전 추가 (애니메이션 효과)
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // 씬 렌더링
      renderer.render(scene, camera);
    }
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup 함수
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);


  return (
    <>
      <div ref={containerRef} className="content-wrapper h-[953px] w-screen relative">
        <Content />
        <Tp />
      </div>
    </>

  );
}