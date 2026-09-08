"use client";

import { type TextareaHTMLAttributes } from "react";

type AreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hint: string;
  filled: boolean;
};

export function AreaField({ hint, filled, className, ...props }: AreaFieldProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {!filled ? (
        <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-8 text-center text-[0.95rem] text-[#8d8d8d]">
          {hint}
        </span>
      ) : null}
      <textarea {...props} className="rs-area relative z-0" />
    </div>
  );
}
