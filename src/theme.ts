import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const palette = {
  primary: {
    main: "#cce4f7",
    light: "#F8FBFE",
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
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontWeight: "normal",
        fontSize: "2rem",
        [breakpoints.up("md")]: {
          fontSize: "2.5rem"
        },
        [breakpoints.up("xl")]: {
          fontSize: "3rem"
        }
      },
      body1: {
        fontSize: "1.1rem",
        [breakpoints.up("md")]: {
          fontSize: "1.3rem"
        },
        [breakpoints.up("xl")]: {
          fontSize: "1.5rem"
        }
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
    },
    MuiPaper: {
      root: {
        color: palette.primary.contrastText
      },
      elevation1: {
        boxShadow: "0px 2px 5px 2px rgba(204, 228, 247, 0.7)",
        borderRadius: "4px"
      }
    },
    MuiExpansionPanel: {
      root: {
        "&:before": {
          backgroundColor: "transparent"
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        backgroundColor: palette.primary.main
      }
    }
  }
});
export default theme;
