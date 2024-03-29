import { Grid, Typography, Paper, Box } from "@mui/material";
import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { CompanySpecialitiesContext } from "../../../contexts/CompanySpecialitiesContext";

const Especialidades = () => {
  const {espec, especIsLoading, especHasError} = useContext(CompanySpecialitiesContext);
  
  const renderEspecialidades = () => {
    return espec.map((especialidade, key) => (
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
            <img src="https://via.placeholder.com/150" alt="Especialidade" />
          </Paper>
          <Typography
            sx={{ color: "white", textAlign: "center" }}
            variant="subtitle2"
          >
            {especialidade.NAME_SEO}
          </Typography>
        </Link>
      </Grid>
    ));
  };

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
          {especIsLoading && <Loader />}
          {!especIsLoading && !especHasError && renderEspecialidades()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Especialidades;
