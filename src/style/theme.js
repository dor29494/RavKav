import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: "#ffffff",
      background: "#898F9C",
      badge: "#4267B2",
    },
    paper: {
      main: "#8e8e8e",
    },
  },
  appBackground: {
    default: "#001440",
  },
  typography: {
    h2: {
      fontFamily: 'Gochi Hand',
      fontSize: "30px",
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Varela Round',
      fontSize: "30px",
    }, 
    body1:{
        fontFamily: 'Raleway',
        fontSize: "24px",
    },
  },
});

export default theme;
