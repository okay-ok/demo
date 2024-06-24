
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { color } from 'three/examples/jsm/nodes/Nodes.js'
import * as THREE from 'three'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/rack-2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={new THREE.MeshBasicMaterial({     ...props })}
        position={[0, 4, 0]}
        scale={[1, 0.041, 1]}
      />
    </group>
  )
}

useGLTF.preload('/rack.glb')