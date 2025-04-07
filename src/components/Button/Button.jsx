"use client";

import { useFormStatus } from "react-dom";

export default function Button({
  children,
  alertOnClick,
  withoutMarginTop,
  formButton,
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={formButton && pending}
      onClick={alertOnClick}
      className={`bg-white rounded-3xl border-threads-gray-light w-full disabled:bg-gray-400 disabled:cursor-not-allowed ${
        !withoutMarginTop && "mt-4"
      } p-4 hover:bg-gray-200 duration-200`}
    >
      {children}
    </button>
  );
}
