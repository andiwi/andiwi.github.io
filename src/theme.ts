import { createMuiTheme } from "@material-ui/core";

const palette = {
  primary: { main: "#96DACD", contrastText: "#1E2226" },
  secondary: { main: "#d06162", contrastText: "#ffffff" },
  background: {
    default: "#F2F4F5"
  }
};

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold"
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold"
      }
    },
    MuiCardHeader: {
      title: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold",
        fontSize: "1.9rem"
      }
    }
  }
});
export default theme;
