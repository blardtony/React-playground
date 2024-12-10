import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./components/router/BrowserRouter.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={browserRouter} />
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
