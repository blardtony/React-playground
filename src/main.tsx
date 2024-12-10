import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./components/router/BrowserRouter.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ModalProvider>
        <RouterProvider router={browserRouter} />
      </ModalProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
