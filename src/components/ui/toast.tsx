import { convertDateFormat } from "@/lib/utils";
import React from "react";
import { createRoot } from "react-dom/client";

type ToastType = "success" | "error" | "info";

interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

let container: HTMLDivElement | null = null;
let root: ReturnType<typeof createRoot> | null = null;

const createContainer = () => {
  container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "1rem";
  container.style.right = "1rem";
  container.style.zIndex = "9999";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "0.5rem";
  document.body.appendChild(container);

  root = createRoot(container);
};

const ToastItem = ({ message, type }: { message: string; type: ToastType }) => {
  const now = new Date();
  return (
    <div
      className={`p-4 rounded shadow text-white font-bold animate-slide-in flex flex-col ${
        type === "success" ? "bg-green" : type === "error" ? "bg-red" : "bg-medium"
      }`}
    >
      {message}
      <span className="text-sm font-light">{convertDateFormat(now)}</span>
    </div>
  );
};

let toasts: { id: number; message: string; type: ToastType }[] = [];

export const toast = (message: string, options: ToastOptions = {}) => {
  if (!container) createContainer();
  const id = Date.now();
  const type = options.type ?? "info";
  toasts.push({ id, message, type });

  render();

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    render();
  }, options.duration ?? 3000);
};

const render = () => {
  if (root) {
    root.render(
      <>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </>,
    );
  }
};
