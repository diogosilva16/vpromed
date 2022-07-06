import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Contactos = () => {
  return (
    <Container maxWidth="xl">
      <Grid container pt={15}>
        <Box sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ color: "white" }}>
              Contactos
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Contactos;
