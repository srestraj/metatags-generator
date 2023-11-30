"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type ToastProps = {
  duration: number;
  message: string;
  type: "success" | "warning" | "error" | "info";
};

const Toast = ({ duration, message, type }: ToastProps) => {
  let backgroundColor = "bg-brand";
  const toast = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  switch (type) {
    case "error":
      backgroundColor = "bg-red-300";
      break;
    case "info":
      backgroundColor = "bg-blue-300";
      break;
    case "warning":
      backgroundColor = "bg-amber-300";
      break;
    default:
      backgroundColor = "bg-brand";
      break;
  }

  useEffect(() => {
    if (toast && duration) {
      setTimeout(() => {
        toast.current?.classList.remove("bottom-0", "md:bottom-5");
        toast.current?.classList.add("-bottom-full", "opacity-0");
      }, duration);
    }
  }, [duration]);

  return (
    <div
      ref={toast}
      className={`
        md:max-w-xs
        w-full
        md:rounded-xl
        p-6
        text-neutral-800
        text-base
        fixed
        md:right-5
        right-0
        z-[999]
        inline-flex
        items-center
        justify-center
        transition-all
        md:bottom-5
        bottom-0
        md:shadow-xl
        ${backgroundColor}
      `}
    >
      <span>{message}</span>
    </div>
  );
};

export default Toast;
