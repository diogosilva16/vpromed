import "./App.scss";
import "./style/sass/styles.scss";
import MainPage from "./components/Pages/MainPage/MainPage";
import Theme from "./components/utils/Theme";
import { useRef, createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Especialidade from "./components/Pages/Especialidade";
import Destaque from "./components/Pages/Destaque";
import ScrollToTop from "./components/utils/ScrollToTop";
import Contactos from "./components/Pages/Contactos";
import FirstPage from "./components/Pages/FirstPage";
import ScheduleWidget from "./components/ScheduleWidget";
import { Context } from "./components/utils/Context";
import { CompanyInfoContextProvider } from "./contexts/CompanyInfoContext";

const LayoutWithNavFooter = () => (
  <>
    <Navbar />
    <Outlet />
    <ScheduleWidget />
    <Footer />
  </>
);

function App() {
  const resultRef = useRef(null);

  return (
    <CompanyInfoContextProvider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route element={<LayoutWithNavFooter />}>
              <Route path="/inicio" element={<MainPage />} />
              <Route path="/especialidade/:id" element={<Especialidade />} />
              <Route path="/destaque/:id" element={<Destaque />} />
              <Route path="/contactos" element={<Contactos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CompanyInfoContextProvider>
  );
}

export default App;
