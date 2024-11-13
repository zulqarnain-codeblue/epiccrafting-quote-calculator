import React from "react";

export default function Form({ children }) {
  return (
    <form className="flex flex-col gap-4 justify-between text-start">
      {children}
    </form>
  );
}
