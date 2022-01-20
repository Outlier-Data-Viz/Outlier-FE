/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NYNC({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/nc/nync.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane072.geometry}
        material={nodes.Plane072.material}
        position={[7.83, 0, 0]}
        scale={[1, 0.5, 1]}
      >
        <meshStandardMaterial color={'red'}/>
      </mesh>
      <mesh
        geometry={nodes.Plane085.geometry}
        material={nodes.Plane085.material}
        position={[8.4, 0, -4.85]}
        scale={[1, -3, 1]}
      >
      <meshStandardMaterial color={'red'}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/nc/nync.glb')