"use client";

export default function Button({ children, alertOnClick, withoutMarginTop }) {
  return (
    <button
      onClick={alertOnClick}
      className={`bg-white rounded-3xl border-threads-gray-light w-full ${
        !withoutMarginTop && "mt-4"
      } p-4 hover:bg-gray-200 duration-200`}
    >
      {children}
    </button>
  );
}
