import React from "react";
import Panorama from "./Panorama";
import TesteDiv from "./TesteDiv";
import { useRef } from "react";
import Navbar from "./Navbar/Navbar";

const MainPage = () => {
  const resultRef = useRef(null);

  return (
    <>
      <Navbar />
      <Panorama resultRef={resultRef} />
      <TesteDiv ref={resultRef} />
    </>
  );
};

export default MainPage;
