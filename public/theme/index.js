import { createTheme } from "@mui/material";

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 1200,
      desktop: 1450,
      monitor: 1600,
      large_monitor: 1800,
    },
  },
  palette: {
    mode: "light",
    primary: {
      contrastText: "#FFFFFF",
      main: "#E22A34",
    },
    secondary: {
      main: "#091F36",
      contrastText: "#FFFFFF",
      light: "#25354F",
    },
    success: {
      main: "#7F7F7F",
      light: "#D5D5D5",
      dark: "#5C5C5C",
    },
    custom: {
      main: "#FFFFFF",
      dark: "#D5D5D5",
    },
  },

  typography: {
    fontFamily: "'RedHat-Regular', sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedInfo: {
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 22,
          lineHeight: "normal",
          padding: "10px 63px",
          borderRadius: 12,
          fontFamily: "'Outfit-Regular', sans-serif",
        },
        sizeLarge: {
          fontSize: 22,
          lineHeight: "normal",
          padding: "18px 75px",
          borderRadius: 12,
          fontFamily: "'Outfit-Regular', sans-serif",
        },
        containedPrimary: {
          backgroundColor: theme.palette.secondary.main,

          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
        containedSecondary: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedInfo: {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
        outlinedSecondary: {
          color: theme.palette.primary.main,
          border: "2px solid",
          borderColor: theme.palette.primary.main,

          "&:hover": {
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            background: theme.palette.primary.main + 10,
          },
        },
        outlinedPrimary: {
          color: theme.palette.secondary.main,
          border: "2px solid",
          borderColor: theme.palette.secondary.main,

          ":hover": {
            border: "2px solid",
            borderColor: theme.palette.secondary.main,
            background: theme.palette.secondary.main + 10,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 43,
            lineHeight: "55px",
            fontFamily: "'RedHat-Bold', sans-serif",
            lineHeight: "125.199%",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 65,
            lineHeight: "67px",
            fontFamily: "'RedHat-Semibold', sans-serif",
            lineHeight: "125.199%",
          },
        },
        h2: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 43,
            lineHeight: "55px",
            fontFamily: "'RedHat-Semibold', sans-serif",
            lineHeight: "114.6%",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 65,
            lineHeight: "67px",
            fontFamily: "'RedHat-Semibold', sans-serif",
            lineHeight: "114.6%",
          },
        },
        h3: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 33,
            lineHeight: "35px",
            fontFamily: "'RedHat-Semibold', sans-serif",
            lineHeight: "114.6%",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 45,
            lineHeight: "47px",
            fontFamily: "'RedHat-Semibold', sans-serif",
            lineHeight: "114.6%",
          },
        },
        h4: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 30,
            lineHeight: "32px",
            fontFamily: "RedHat-Medium",
            lineHeight: "114.6%",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 40,
            lineHeight: "42px",
            fontFamily: "RedHat-Medium",
            lineHeight: "114.6%",
          },
        },
        h5: {
          fontSize: 35,
          lineHeight: "37px",
          fontFamily: "RedHat-Medium",
          lineHeight: "114.6%",
        },
        h6: {
          fontSize: 30,
          lineHeight: "32px",
          fontFamily: "'RedHat-Regular', sans-serif",
          lineHeight: "114.6%",
        },
        p: {
          fontFamily: "'RedHat-Regular', sans-serif",
          lineHeight: "22px",
          fontSize: "18px",
          [theme.breakpoints.down("desktop")]: {
            fontSize: 16,
          },
        },
      },
    },
  },
});
