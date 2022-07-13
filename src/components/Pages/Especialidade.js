import React, { useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import Form from "./MainPage/Form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../Loader";

const Especialidade = () => {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const { id } = useParams();

  const [especialidadeInfo, setEspecialidadeInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [teste, setTeste] = useState("");

  const getEspecialidadeInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/article/${API_KEY}/${id}/1`
      );
      const data = await response.json();
      setEspecialidadeInfo(data);
      setIsLoading(false);
      setTeste(especialidadeInfo.TEXT_SEO);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEspecialidadeInfo();
  }, [id, isLoading]);

  function convertToPlain(html) {
    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || "";
  }

  convertToPlain(teste);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Container maxWidth="xl">
          <Grid container pt={20} pb={5}>
            <Box sx={{ width: "100vw", background: "black" }}>
              <Grid item xs={12} pb={3} className="borderEspecialidade">
                <Typography variant="h5" style={{ color: "white" }}>
                  Especialidades
                </Typography>
              </Grid>
              <Grid item xs={12} pt={5} pb={5}>
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Times New Roman",
                  }}
                  variant="body1"
                >
                  <span style={{ color: "#CEC568" }}>
                    A {especialidadeInfo.NAME_SEO} divide-se em {""}
                  </span>
                  várias áreas de intervenção.
                </Typography>
              </Grid>
            </Box>
            <Grid container pt={3} sx={{ color: "white" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                  }}
                >
                  {especialidadeInfo.NAME_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12} pt={2}>
                {/* <Typography variant="body1">{convertToPlain(teste).replace(/<[^>]*>/g, "")} {id}</Typography> */}
                <Typography variant="body1">
                  {especialidadeInfo.TEXT_SEO}
                </Typography>
              </Grid>
            </Grid>
            <Form />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Especialidade;
