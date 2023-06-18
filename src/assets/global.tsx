import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#346dc5",
      dark: "#000",
      light: "#51544f",
    },
    secondary: {
      main: "#ffffff",
      dark: "#000",
      light: "#e3e3e3",
    },
    info: { main: "#31bcc2" },
    warning: { main: "rgba(182,14,14,0.71)" },
  },
});
