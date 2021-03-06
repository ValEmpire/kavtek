import { createTheme } from "@mui/material/styles";

/**
 * This will modify and create custom theme
 */
const customTheme = createTheme({
  /**
   * Primary color
   */
  palette: {
    primary: {
      main: "#5A98FE",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#979797",
    },
  },

  /**
   * Components goes here
   */
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        text: {
          color: "#C9C9C9",
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          border: `1px solid #000000`,
          borderRadius: `4px`,
        },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        text: {
          fontSize: "12px",
        },
        root: {
          width: "30px",
          height: "30px",
        },
      },
    },
  },

  /**
   * We can change the typography here, font size and font family
   */
  typography: {
    allVariants: {
      fontFamily: "'Open Sans', sans serif",
      color: "#000",
    },

    h1: {},

    h2: {},

    h3: {},

    h4: {},

    h5: {},

    h6: {},

    subtitle1: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "33px",
    },

    subtitle2: {
      lineHeight: "22px",
      fontSize: "16px",
      fontWeight: 700,
    },

    body1: {
      fontSize: "12px",
      lineHeight: "16px",
    },

    body2: {
      fontSize: "14px",
      lineHeight: "19px",
    },

    dob: {
      fontSize: "16px",
      lineHeight: "22px",
    },

    details: {
      fontSize: "10px",
    },
  },
});

/**
 * This will make sure that typography fonts will be responsive in all screen sizes
 */
export const theme = customTheme;
