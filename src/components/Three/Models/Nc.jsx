/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/nc/nc.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane072.geometry}
        material={nodes.Plane072.material}
        position={[7.83, 1, 0]}
        scale={[1, 1.3, 1]}
      />
    </group>
  )
}

useGLTF.preload('/models/nc/nc.glb')
