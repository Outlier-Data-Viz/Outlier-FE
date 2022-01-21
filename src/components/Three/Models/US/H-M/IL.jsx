import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useActiveStates } from '../../../../../context/State/StateCtx';

export default function IL({ ...props }) {  
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

  function handleClick() {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(2);
    setActiveStates((prevState) => {
      return [ ...prevState, 'IL' ];
    });
  }

  return (
  <group ref={group} {...props} dispose={null}>
    //---------IL---------//
    <mesh
      ref={mesh}
      name='IL'
      geometry={nodes.Plane062.geometry}
      material={nodes.Plane062.material}
      position={[2.07, positionY, -1.96]}
      scale={[1, 1.29, 1]}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      onClick={() => handleClick()}
    >
      <meshStandardMaterial
        color = {isHovered? '#fff' : 'steelblue'}
        />
    </mesh>
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');