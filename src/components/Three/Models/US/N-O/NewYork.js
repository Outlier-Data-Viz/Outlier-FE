/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/NewYork.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane085.geometry}
        material={materials.Material}
        position={[8.4, 0, -4.85]}
        scale={[1, -0.05, 1]}
      />
    </group>
  )
}

useGLTF.preload('/NewYork.glb')
