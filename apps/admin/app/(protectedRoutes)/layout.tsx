"use client";

import { useEffect } from "react";

export default function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("accessToken")) {
        window.open(`/login`, "_self");
      }
    }, 1000);
  }, []);

  return children;
}
