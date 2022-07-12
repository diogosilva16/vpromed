import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { forwardRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Destaques = forwardRef((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const goToHighPage = (id) => {
    console.log(id);
    navigate(`/destaque/${id}`);
  };
  return (
    <div ref={ref} className="teste">
      <Grid container pt={5} pb={5}>
        <Typography sx={{ color: "white", textTransform: "uppercase" }} pb={2}>
          Destaques
        </Typography>
        <Box
          className={isMobile || isTablet ? "featureNoBg" : "feature1"}
          justifyContent="flex-end"
          display="flex"
          position={isMobile || isTablet ? "" : "relative"}
        >
          <Grid
            item
            md={4}
            p={isMobile || isTablet ? 0 : 10}
            sx={{
              position: { md: "absolute" },
              bottom: 0,
              backgroundColor: "#2A2A2A",
              color: "white",
              height: { md: "60%", lg: "60%", xl: "40%" },
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              Para empresas
            </Typography>
            <Typography
              variant="h2"
              sx={{ textTransform: "uppercase", fontFamily: "Times New Roman" }}
            >
              Dental work
            </Typography>
            <Typography variant="body1" pb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={() => goToHighPage(1)}
            >
              Saber mais
            </Button>
          </Grid>
        </Box>

        <Box
          className={isMobile || isTablet ? "featureNoBg" : "feature2"}
          display="flex"
          position={!isMobile || (!isTablet && "relative")}
          mt={10}
        >
          <Grid
            item
            md={4}
            p={isMobile || isTablet ? 0 : 10}
            sx={{
              backgroundColor: "#2A2A2A",
              color: "white",
              width: "100%",
              height: { md: "60%", lg: "60%", xl: "45%" },
            }}
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              Para particulares
            </Typography>
            <Typography
              variant="h2"
              sx={{ textTransform: "uppercase", fontFamily: "Times New Roman" }}
            >
              Dental sweet
            </Typography>
            <Typography variant="body1" pb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button variant="contained" color="success" fullWidth onClick={() => goToHighPage(2)}>
              Saber mais
            </Button>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
});

export default Destaques;
