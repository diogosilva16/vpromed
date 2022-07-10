import "./App.scss";
import "./style/sass/styles.scss";
import MainPage from "./components/Pages/MainPage/MainPage";
import Theme from "./components/utils/Theme";
import { useRef } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Especialidade from "./components/Pages/Especialidade";
import Destaque from "./components/Pages/Destaque";
import ScrollToTop from "./components/utils/ScrollToTop";
import Contactos from "./components/Pages/Contactos";
import FirstPage from "./components/Pages/FirstPage";

const LayoutWithNavFooter = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const resultRef = useRef(null);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route element={<LayoutWithNavFooter />}>
            <Route path="/inicio" element={<MainPage />} />
            <Route path="/especialidade" element={<Especialidade />} />
            <Route path="/destaque" element={<Destaque />} />
            <Route path="/contactos" element={<Contactos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
