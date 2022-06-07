import React from "react";
import { Pannellum } from "pannellum-react";
import myImage from "../img/pano.jpg";

export default function Panorama() {
  return (
    <>
      <Pannellum
        autoLoad
        width="100vw"
        height="100vh"
        image={myImage}
        pitch={0 }
        yaw={180}
        hfov={130}
        showControls={false}
        // hotspotDebug={true}
        disableKeyboardCtrl={true}
        mouseZoom={false}
      >
        <Pannellum.Hotspot
        type="info"
        pitch={6.716376550525631}
        yaw={130.75239204883815}
        text="Hotspot com informação dramática e muito mais! Queres saber mais? Clica aqui ;)"
        URL="https://hubduction.com"
      />
      <Pannellum.Hotspot
        type="info"
        pitch={9.798938389637957}
        yaw={154.68298369503444}
        text="Hotspot com informação dramática"
        URL="https://hubduction.com"
      />
      </Pannellum>
    </>
  );
}
