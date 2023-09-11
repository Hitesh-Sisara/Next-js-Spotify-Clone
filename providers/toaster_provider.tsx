"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: { background: "#333", color: "#fff" },
      }}
    ></Toaster>
  );
};

export default ToasterProvider;
