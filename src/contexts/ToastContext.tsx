import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react";
import { SeverityType, ToastContextType } from "../types/toast.type";
import { Toast } from "primereact/toast";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const toastRef = useRef<Toast>(null);
  const createToast = useCallback(
    (severity: SeverityType, title: string, detail: string = "") => {
      if (toastRef.current) {
        toastRef.current.show({ severity, summary: title, detail });
      }
    },
    [],
  );
  return (
    <ToastContext.Provider value={{ createToast }}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
