import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ContextProvider from "./context/contextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider />
  </StrictMode>
);
