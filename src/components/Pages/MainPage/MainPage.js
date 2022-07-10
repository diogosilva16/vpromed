import React from "react";
import Panorama from "./Panorama";
import Destaques from "./Destaques";
import { useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { Container, Box } from "@mui/material";
import Especialidades from "./Especialidades";
import Form from "./Form";

const MainPage = () => {
  const resultRef = useRef(null);

  return (
    <Box pt={10} sx={{background: "#2A2A2A"}}>
      <Panorama resultRef={resultRef} />
      <Container maxWidth="xl">
        <Destaques ref={resultRef} />
        <Especialidades />
        <Form />
      </Container>
    </Box>
  );
};

export default MainPage;
