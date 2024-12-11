import { PrimeReactPTOptions } from "primereact/api";
import { classNames } from "primereact/utils";

export type PtType = PrimeReactPTOptions;

export const Pt: PtType = {
  toast: {
    root: {
      className: classNames("w-96", "opacity-90", "mt-8"),
    },
    message: ({ state, index }: { state: any; index: number }) => ({
      className: classNames("my-4 rounded-md w-full", {
        "bg-info/10 border-solid border-0 border-l-4 border-info text-info":
          state.messages[index] &&
          state.messages[index].message.severity == "info",
        "bg-success/10 border-solid border-0 border-l-4 border-success text-success":
          state.messages[index] &&
          state.messages[index].message.severity == "success",
        "bg-warning/10 border-solid border-0 border-l-4 border-warning text-warning":
          state.messages[index] &&
          state.messages[index].message.severity == "warn",
        "bg-error/10 border-solid border-0 border-l-4 border-error text-error":
          state.messages[index] &&
          state.messages[index].message.severity == "error",
      }),
    }),
    content: {
      className: classNames("flex items-center py-5 px-7"),
    },
    icon: {
      className: classNames("w-6 h-6", "text-lg mr-2"),
    },
    text: {
      className: "text-base font-normal flex flex-col flex-1 grow shrink ml-4",
    },
    summary: {
      className: "font-bold block",
    },
    detail: {
      className: "mt-1 block",
    },
    closeButton: {
      className: classNames(
        "w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out",
        "ml-auto overflow-hidden relative",
        "flex items-center justify-center",
        "hover:bg-white/30",
      ),
    },
    transition: {
      timeout: { enter: 300, exit: 300 },
      classNames: {
        enter: "opacity-0 max-h-0 translate-x-0 translate-y-2/4 translate-z-0",
        enterActive:
          "!max-h-40 !opacity-90 !translate-y-0 transition-transform transition-opacity duration-300",
        exit: "max-h-40 opacity-90",
        exitActive:
          "!max-h-0 !opacity-0 !mb-0 overflow-hidden transition-all duration-500 ease-in",
      },
    },
  },
};