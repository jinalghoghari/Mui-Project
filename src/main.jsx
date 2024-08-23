import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { theme } from "./theme";

import { ThemeProvider } from "@mui/material";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
