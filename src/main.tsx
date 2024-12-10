import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./components/router/BrowserRouter.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import { ToastProvider } from "./contexts/ToastContext.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ToastProvider>
        <ModalProvider>
          <RouterProvider router={browserRouter} />
        </ModalProvider>
      </ToastProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
