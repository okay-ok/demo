import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model2(props) {
  const { nodes, materials } = useGLTF('/rack-2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.steel_frame_shelves_01.geometry}
        material={materials.steel_frame_shelves_01}
        position={[0.01 , 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/rack-2.glb')