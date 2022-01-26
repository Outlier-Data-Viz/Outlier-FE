import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useActiveStates } from '../../../../../context/State/StateCtx';
import { useFrame } from '@react-three/fiber';

export default function HI({ ...props }) {  
  const mesh = useRef();
  const group = useRef();
  const [positionY, setPositionY] = useState(0);
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setActiveStates } = useActiveStates([]);

  const { nodes, materials } = useGLTF('/models/states/usa.glb')

  const onHover = useCallback((e, v) => {
    e.stopPropagation(); //stop ref at first intersection
    e.target;
    setIsHovered(v);
  }, [setIsHovered]);

  useFrame(({clock}) => {
    mesh.current.rotation.y = clock.getElapsedTime() / 3
  });

  function handleClick() {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(2);
    setActiveStates((prevState) => {
      return [ ...prevState, 'HI' ];
    });
  }

  return (
  <group ref={group} {...props} dispose={null}>
    //--------- HI ---------//
      <mesh
        ref={mesh}
        name='HI'
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[-12.91, positionY, 4.66]}
        scale={[1, 1.29, 1]}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
        onClick={() => handleClick()}
      >
        <meshStandardMaterial
            color = {isHovered? '#fff' : 'limegreen'}
        />
      </mesh>
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb')