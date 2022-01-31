import { createTheme } from "@material-ui/core/styles";

const mainBlack = "#000";
const mainWhite = "#fafafa";
const blue = "#757ce8";

const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    fontFamily:  "'Poppins', 'Regular'",
    h1: {
      fontSize: 50,
      fontWeight: 600,
      color: "#bfc500",
      '@media (max-width:1274px)': {
        fontSize: 50,
      },
      '@media (max-width:960px)': {
        fontSize: 40,
        // align: 'center'
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#fff",
      '@media (max-width:960px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    h3: {
      fontSize: 18,
      fontWeight: 400,
      color: "#fff",
      '@media (max-width:1230px)': {
        fontSize: '1rem',
      },
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#fff",
      '@media (max-width:1230px)': {
        fontSize: '0.8rem',
      },
    },
    subtitle1: {
      fontSize: 28,
      fontWeight: 400,
      color: "#fff",
      lineHeight: 1,
      marginTop: 30,
      marginBottom: 10
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 400,
      color: "#fff",
    },
    subtitle3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    a: {
      color: mainBlack,
    },
  },
});

export default theme;
