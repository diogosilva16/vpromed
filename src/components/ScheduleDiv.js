import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import Form from "./Pages/MainPage/Form";
import MobileForm from "./Pages/MainPage/MobileForm";

const ScheduleDiv = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        bottom: 20,
        zIndex: 99,
        height: "50vh",
        width: "40vw",
        background:
          "linear-gradient(180deg, hsla(160, 34%, 29%, 1) 0%, hsla(158, 43%, 18%, 1) 100%)",
        color: "white",
      }}
    >
      <Grid container>
        {isMobile ? <MobileForm /> : <Form />}
      </Grid>
    </Box>
  );
};

export default ScheduleDiv;
