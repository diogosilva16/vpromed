import logo from "./logo.svg";
import "./App.scss";
import "./style/sass/styles.scss";
import Panorama from "./components/Panorama";
import TesteDiv from "./components/TesteDiv";
import { useRef } from "react";

function App() {
  const resultRef = useRef(null);
  return (
    <>
      <div className="navbar">
        <p>Hey</p>
      </div>
      <Panorama resultRef={resultRef} />
      <TesteDiv ref={resultRef} />
    </>
  );
}

export default App;
