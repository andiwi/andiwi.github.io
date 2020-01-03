import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const palette = {
  primary: {
    main: "#cce4f7",
    light: "#ffffff",
    dark: "#9bb2c4",
    contrastText: "#08121b"
  },
  secondary: {
    main: "#303841",
    light: "#5a626c",
    dark: "#08121b",
    contrastText: "#ffffff"
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
      root: {
        color: palette.secondary.dark
      },
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "bold",
        fontSize: "3.5rem",
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
        [breakpoints.up("md")]: {
          fontSize: "3rem"
        },
        [breakpoints.up("xl")]: {
          fontSize: "4rem"
        }
      },
      body1: {
        fontSize: "1.1rem"
      }
    },
    MuiCardHeader: {
      title: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
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
