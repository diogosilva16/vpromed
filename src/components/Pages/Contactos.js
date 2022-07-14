import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  Box,
  Container,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery
} from "@mui/material";
import Form from "./MainPage/Form";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Loader from "../Loader";
import { useTheme } from "@emotion/react";
import {  } from "../contexts/CompanyInfoCounter"; 

const Contactos = () => {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const [companyInfo, setCompanyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getCompanyInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/company/${API_KEY}`
      );
      const data = await response.json();
      setCompanyInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCompanyInfo();
  }, [isLoading]);

  console.log(companyInfo);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
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
                        // "&:hover": {
                        //   color: "#CEC568",
                        // },
                      }}
                    >
                      <AccordionSummary>
                        <Typography
                          variant={isMobile ? "h4" : "h2"}
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
                          <Typography>{companyInfo[6].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[10].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[8].VALUE}</Typography>
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
                        // "&:hover": {
                        //   background:
                        //     "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(96,96,96,1) 85%, rgba(255,255,255,0) 100%)",
                        // },
                      }}
                    >
                      <AccordionSummary>
                        <Typography
                          variant={isMobile ? "h4" : "h2"}
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
                          <Typography>{companyInfo[7].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[11].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[9].VALUE}</Typography>
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
      )}
    </>
  );
};

export default Contactos;
