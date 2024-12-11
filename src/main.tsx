import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./components/router/BrowserRouter.tsx";
import { PrimeReactProvider } from "primereact/api";
import { Pt } from "./components/common/Prime/Passthrough.ts";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <PrimeReactProvider value={{ unstyled: true, pt: Pt }}>
        <RouterProvider router={browserRouter} />
      </PrimeReactProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
