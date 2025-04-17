"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import Dialogue from "./dialogue";
import Button from "./button";

type Props = {
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
};

const PopupAlert = ({ message, onClose, onConfirm }: Props) => {

  const handleConfirm = () => {
    onClose();
    onConfirm?.();
  };

  return (
    <Dialogue size="small">
      <p>{message}</p>
        {onConfirm ? (
          <div className="flex justify-between w-full gap-2">
            <Button onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button variant={"destructive"} onClick={handleConfirm} className="w-full">
              Confirm
            </Button>
          </div>
        ) : (
          <Button onClick={onClose} className="w-full">
            OK
          </Button>
        )}
    </Dialogue>
  );
};

// 🔥 Static show method
type ShowProps = {
  message: string;
  onConfirm?: () => void;
};

function showPopupAlert({ message, onConfirm }: ShowProps) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);

  const handleClose = () => {
    root.unmount();
    container.remove();
  };

  root.render(
    <PopupAlert message={message} onConfirm={onConfirm} onClose={handleClose} />
  );
}

// Add static method to component
(PopupAlert as typeof PopupAlert & { show: typeof showPopupAlert }).show =
  showPopupAlert;

export default PopupAlert as typeof PopupAlert & {
  show: typeof showPopupAlert;
};
