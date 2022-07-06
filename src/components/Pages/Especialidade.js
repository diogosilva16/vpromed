import React from "react";
import { Grid, Container, Typography, Box} from "@mui/material";
import Form from "./MainPage/Form";

const Especialidade = () => {
  return (
    <Container maxWidth="xl">
      <Grid container pt={15} pb={5}>
        <Box sx={{width: "100vw", background: "black"}}>
          <Grid item xs={12} pb={3} className="borderEspecialidade">
            <Typography variant="h5" style={{ color: "white" }}>
              Especialidades
            </Typography>
          </Grid>
          <Grid item xs={12} pt={5} pb={5}>
            <Typography sx={{color: "white", textTransform: "uppercase", fontFamily: "Times New Roman"}} variant="body1"><span style={{color: "#CEC568"}}>A Medicina dentária divide-se em </span>várias áreas de intervenção.</Typography>
            </Grid>
        </Box>
        <Grid container pt={3}sx={{color: "white"}}>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontFamily: "Times New Roman", textTransform: "uppercase"}}>Medicina Dentária</Typography>
            </Grid>
            <Grid item xs={12} pt={2}>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Massa tincidunt dui ut ornare lectus sit. Nunc congue nisi vitae suscipit. Eu ultrices vitae auctor eu. Quis blandit turpis cursus in hac habitasse. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Praesent semper feugiat nibh sed pulvinar proin. Sed libero enim sed faucibus turpis. Interdum consectetur libero id faucibus nisl. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque purus semper eget duis at tellus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Elit pellentesque habitant morbi tristique senectus. Sed sed risus pretium quam. Facilisi cras fermentum odio eu feugiat pretium nibh. Viverra suspendisse potenti nullam ac tortor vitae purus.</Typography>
            </Grid>
        </Grid>
        <Form />
      </Grid>
    </Container>
  );
};

export default Especialidade;
