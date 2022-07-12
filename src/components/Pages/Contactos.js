import React from "react";
import {
  Accordion,
  Box,
  Container,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Form from "./MainPage/Form";
import { red } from "@mui/material/colors";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Contactos = () => {
  return (
    <Container maxWidth="xl">
      <Grid container pt={20}>
        <Box sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ color: "white" }}>
              Contactos
            </Typography>
          </Grid>
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Grid item xs={12}>
                <Accordion
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                    color: "white",
                    "&:hover": {
                      color: "#CEC568",
                    },
                  }}
                >
                  <AccordionSummary>
                    <Typography
                      variant="h2"
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      Águeda
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <EventAvailableIcon />
                      <Typography>Rua 15 de Agosto, n.º76 R/C</Typography>
                      <Typography>3750-115 Águeda</Typography>
                    </Box>
                    <Box pt={3}>
                      <EventAvailableIcon />
                      <Typography>234 130 508</Typography>
                    </Box>
                    <Box pt={3}>
                      <EventAvailableIcon />
                      <Typography>09:30 - 12:30</Typography>
                      <Typography>14:00 - 19:30</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} pt={3}>
                <Accordion
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                    color: "white",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(96,96,96,1) 85%, rgba(255,255,255,0) 100%)",
                    },
                  }}
                >
                  <AccordionSummary>
                    <Typography
                      variant="h2"
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      Barrô
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <EventAvailableIcon />
                      <Typography>Rua 15 de Agosto, n.º76 R/C</Typography>
                      <Typography>3750-115 Águeda</Typography>
                    </Box>
                    <Box pt={3}>
                      <EventAvailableIcon />
                      <Typography>234 130 508</Typography>
                    </Box>
                    <Box pt={3}>
                      <EventAvailableIcon />
                      <Typography>09:30 - 12:30</Typography>
                      <Typography>14:00 - 19:30</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Container>
          </Box>
          <Form />
        </Box>
      </Grid>
    </Container>
  );
};

export default Contactos;
