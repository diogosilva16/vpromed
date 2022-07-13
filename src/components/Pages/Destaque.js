import React, {useEffect, useState} from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";

const Destaque = () => {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const { id } = useParams();

  const [destaqueInfo, setDestaqueInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getDestaqueInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/article/${API_KEY}/${id}/1`
      );
      const data = await response.json();
      setDestaqueInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDestaqueInfo();
  }, [id, isLoading]);

  console.log(destaqueInfo);

  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contactos");
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={20}>
            <Box sx={{ width: "100vw" }}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ color: "white" }}>
                  Destaque
                </Typography>
              </Grid>
              <Grid item xs={12} pt={2} pb={5}>
                <Typography
                  sx={{
                    color: "#CEC568",
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                  }}
                  variant="h3"
                >
                  {destaqueInfo.NAME_SEO}
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ width: "100vw", height: "200px", background: "black" }}>
              <Grid item xs={12}></Grid>
            </Box>
            <Box>
              <Grid item xs={12} p={5}>
                <Typography
                  pl={2}
                  sx={{
                    color: "#CEC568",
                    borderLeft: "1px solid #CEC568",
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                  }}
                  variant="h5"
                >
                  Conheça as características do {destaqueInfo.NAME_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "white" }} variant="body1">
                  {destaqueInfo.TEXT_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12} pt={5}>
                <Typography
                  sx={{ color: "#CEC568", textTransform: "uppercase" }}
                >
                  SED ALIQUAM
                </Typography>
              </Grid>
              <Grid item xs={12} pt={5}>
                <Typography sx={{ color: "white" }} variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Fermentum et sollicitudin ac orci phasellus egestas tellus
                  rutrum. Massa tincidunt dui ut ornare lectus sit. Nunc congue
                  nisi vitae suscipit. Eu ultrices vitae auctor eu. Quis blandit
                  turpis cursus in hac habitasse. Quam lacus suspendisse
                  faucibus interdum posuere lorem ipsum dolor sit. Auctor neque
                  vitae tempus quam pellentesque nec nam aliquam. Commodo
                  viverra maecenas accumsan lacus vel facilisis volutpat est
                  velit.
                </Typography>
              </Grid>
            </Box>
            <Grid item xs={12} pt={5} textAlign="center">
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                  border: "1px solid #CEC568",
                  width: "250px",
                  "&:hover": {
                    color: "#CEC568",
                  },
                }}
                onClick={goToContact}
              >
                Contacte-nos
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Destaque;
