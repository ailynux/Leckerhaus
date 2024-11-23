// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f" // Red color
    },
    secondary: {
      main: "#757575" // Grey color
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#d32f2f"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#757575",
          color: "#ffffff"
        }
      }
    }
  }
});

export default theme;
