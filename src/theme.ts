import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const palette = {
  //primary: { main: "#96DACD", contrastText: "#1E2226" },
  primary: {
    main: "#b9e8e8",
    light: "#ecffff",
    dark: "#88b6b6",
    contrastText: "#000000"
  },
  secondary: {
    main: "#d06162",
    light: "#ff918f",
    dark: "#9b3238",
    contrastText: "#000000"
  },
  background: {
    default: "#FFFFFF"
  }
};

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette,
  breakpoints,
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold",
        fontSize: "4.5rem",
        [breakpoints.up("md")]: {
          fontSize: "5rem"
        },
        [breakpoints.up("xl")]: {
          fontSize: "6rem"
        }
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "normal",
        fontSize: "2.5rem",
        [breakpoints.up("sm")]: {
          fontSize: "5rem"
        }
      },
      body1: {
        fontSize: "1.5rem",
        [breakpoints.up("sm")]: {
          fontSize: "2.5rem"
        }
      }
    },
    MuiCardHeader: {
      title: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold",
        fontSize: "1.9rem"
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: palette.primary.dark,

        "&:hover": {
          backgroundColor: palette.primary.main
        }
      }
    }
  }
});
export default theme;
