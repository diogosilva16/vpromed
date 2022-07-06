import { Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const especialidades = [
  "Medicina Dentária",
  "Periodontologia",
  "Prótese Dentária Personalizada",
  "Higiene Oral",
  "Ortodontia",
  "Branqueamento estética",
  "Implantologia",
];

const Especialidades = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} pb={10} pt={5} sx={{textTransform: "uppercase"}}>
          <Typography sx={{ color: "white" }}>Especialidades</Typography>
          <Typography variant="h2"  sx={{ color: "#CEC568", fontFamily: "Times New Roman"}}>
            Conheça-nos
          </Typography>
        </Grid>
        <Grid container spacing={5} columnSpacing={5} pb={10} sx={{textTransform: "uppercase"}}>
          {especialidades.map((especialidade, key) => (
            <Grid item xs={6} md={3} key={key}>
              <Link to={`/especialidade/`}>
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
                  {especialidade}
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
