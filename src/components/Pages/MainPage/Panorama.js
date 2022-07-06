import React, { useRef } from "react";
import { Pannellum } from "pannellum-react";
import myImage from "../../../img/pano.jpg";

const Panorama = ({ resultRef }) => {

  const handleClick = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Pannellum
        autoLoad
        width="100vw"
        height="100vh"
        image={myImage}
        pitch={0}
        yaw={180}
        hfov={130}
        showControls={false}
        // hotspotDebug={true}
        disableKeyboardCtrl={true}
        mouseZoom={false}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={6.716376550525631}
          yaw={130.75239204883815}
          text="Hotspot com informação dramática e muito mais! Queres saber mais? Clica aqui ;)"
          handleClick={() => {
            handleClick();
          }}
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={9.798938389637957}
          yaw={154.68298369503444}
          text="Hotspot com informação dramática"
          URL="https://hubduction.com"
        />
      </Pannellum>
    </>
  );
}

export default Panorama;
