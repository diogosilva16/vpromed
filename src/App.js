import logo from "./logo.svg";
import "./App.scss";
import "./style/sass/styles.scss";
import Panorama from "./components/Panorama";
import TesteDiv from "./components/TesteDiv";
import MainPage from "./components/MainPage";
import Theme from "./components/Theme";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./components/NewPage";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const resultRef = useRef(null);
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teste" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
