import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFD700",
    },
  },
  typography: {
    h1: {},
    h2: {
      color: "#CEC568",
      fontFamily: "Times New Roman",
    },
    h3: {},
    h4: {},
    body1: {},
    body2: {},
    subtitle1: {
        color: "#fff",
    },
    subtitle2: {},
    caption: {},
    button: {},
  },
});

export default Theme;
