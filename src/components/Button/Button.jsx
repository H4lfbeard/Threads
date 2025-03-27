"use client";

export default function Button({ children, alertOnClick }) {
  return (
    <button
      onClick={alertOnClick}
      className="bg-white rounded-3xl border-threads-gray-light w-full mt-4 p-4 hover:bg-gray-200 duration-200"
    >
      {children}
    </button>
  );
}
