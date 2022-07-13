import { Grid, Typography, Paper, Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// const especialidades = [
//   { id: 1, title: "Medicina Dentária" },
//   { id: 2, title: "Periodontologia" },
//   { id: 3, title: "Prótese Dentária" },
//   { id: 4, title: "Higiene Oral" },
//   { id: 5, title: "Ortodontia" },
//   { id: 6, title: "Implantologia" },
//   { id: 7, title: "Branqueamento/Estética" },
// ];

const Especialidades = () => {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const [especialidades, setEspecialidades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getEspecialidades = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/3/1`
      );
      const data = await response.json();
      setEspecialidades(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEspecialidades();
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} pb={10} pt={5} sx={{ textTransform: "uppercase" }}>
          <Typography variant="subtitle1">Especialidades</Typography>
          <Typography variant="h2">Conheça-nos</Typography>
        </Grid>
        <Grid
          container
          spacing={5}
          columnSpacing={5}
          pb={10}
          sx={{ textTransform: "uppercase" }}
        >
          {especialidades.map((especialidade, key) => (
            <Grid item xs={6} md={3} key={key}>
              <Link to={`/especialidade/${especialidade.ARTICLE_ID}`}>
                <Paper
                  sx={{
                    textAlign: "center",
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                  }}
                  elevation={24}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Especialidade"
                  />
                </Paper>
                <Typography
                  sx={{ color: "white", textAlign: "center" }}
                  variant="subtitle2"
                >
                  {especialidade.NAME_SEO}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Especialidades;
