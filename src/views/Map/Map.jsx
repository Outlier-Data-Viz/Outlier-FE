import { useEffect, useState } from "react";
import MapForm from "../../components/Forms/MapForm/MapForm";
import ThreeMap from "../../components/Three/Scenes/ThreeMap";
import { StateProvider } from "../../context/State/StateCtx";
import css from './Map.css';

export default function Map() {

  // useEffect(() => {
  //   const landscape = async () => {
  //     await screen.orientation.lock('landscape');
  //   }
  //   landscape()
  // }, [])

  return (
   <>
    <StateProvider>
   <section className={css.mapView}>
      <MapForm />
      {/* <div className={css.canvas}> */}
        <ThreeMap />
      {/* </div> */}
   </section>
    </StateProvider>
   </>
  );
}
