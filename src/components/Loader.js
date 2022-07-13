import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", color: "red" }}>
      <Grid
        container
        pt={20}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100%" }}
      >
        <CircularProgress sx={{ color: "#CEC568" }} />
      </Grid>
    </Container>
  );
};

export default Loader;
