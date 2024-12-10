export type SeverityType = "info" | "success" | "warn" | "error";

export type ToastType = {
  severity: SeverityType;
  summary: string;
  detail: string;
};

export type ToastContextType = {
  createToast: (severity: SeverityType, title: string, detail: string) => void;
};
