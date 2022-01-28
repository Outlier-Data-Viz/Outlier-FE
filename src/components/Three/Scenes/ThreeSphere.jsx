import React, { Suspense, useEffect, useState } from 'react';
import Orb from '../Charts/Orb';
import FillLight from '../Lights/FillLight';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { DataProvider, useActiveData } from '../../../context/Data/DataCtx';
import { StateProvider } from '../../../context/State/StateCtx';
import { DataCtx } from '../../../context/Data/DataCtx';
import { StateCtx } from '../../../context/State/StateCtx';
import { useScreen } from '../../../context/Device/Device'
import KeyLight from '../Lights/KeyLight';
import RimLight from '../Lights/RimLight';
import SpotLights from '../Lights/SpotLight';
import css from './three.css';

export default function ThreeSphere() {
  const { mobile, midSize } = useScreen();
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  const { activeData, activePopulation, activeStats} = useActiveData();
  const [positionX, setPositionX] = useState([]);
  const [positionY, setPositionY] = useState([]);
  const [positionZ, setPositionZ] = useState([]);
  const [scale, setScale] = useState([]);
 

  useEffect(() => {
    const calcPercentages = async () => {
      const activeOne = (parseInt(activeData[0][activePopulation]) / parseInt(activeData[0].total));
      const totalOne = 1 - activeOne;
      const hateOne = parseInt(activeStats[0].value) * totalOne;
      const activeTwo = (parseInt(activeData[1][activePopulation]) / parseInt(activeData[1].total));
      const totalTwo = 1 - activeTwo;
      const hateTwo = parseInt(activeStats[1].value) * totalTwo;
      const zArr = [totalOne, activeOne, hateOne, hateTwo, activeTwo, totalTwo]
      const scaleMap = zArr.map((v) => v * 5 )
      setScale(scaleMap);
    }
    calcPercentages();
  }, [])


  return (
    <section className={css.canvas}>
      <Canvas
        camera={{ fov: 100, position: [-10, 75, 60] }}
        style={
          mobile ? {
            display: 'flex',
            height:'18.5rem', 
            width: '20.5rem',
            border: '0.35rem solid rgb(50, 68, 66)',
            marginLeft: '2.5%',
            backgroundColor: 'rgb(50, 68, 66)',
          }
          : midSize ? {
            height: '30rem',
            width: '34rem',
            border: '0.5rem solid rgb(50, 68, 66)',
            backgroundColor: 'rgb(50, 68, 66)'
          }
          : {
            height: '60rem', 
            width: '80rem',
            border: '0.5rem solid rgb(50, 68, 66)',
            backgroundColor: 'rgb(50, 68, 66)'
          }
        }
      >
        <ContextBridge>
          <FillLight brightness={20} color='#ffbdf4'/>
          <KeyLight brightness={3.6} color='#ffbdf4'/>
          <RimLight brightness={50} color='#fff'/>
          <SpotLights position={[3, 100, 0]}/>
          <Suspense fallback={null}>
            <StateProvider>
            <DataProvider>
              <Orb
                positionX={positionX} 
                positionY={positionY} 
                positionZ={positionZ} 
                scale={scale}
              />
            </DataProvider>
            </StateProvider>
          </Suspense>
          <OrbitControls />
        </ContextBridge>
      </Canvas>
    </section>
  );
}
