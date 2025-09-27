/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react"; // or '@emotion/react'
import {theme} from "./theme"; // 위에서 만든 테마 객체
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
