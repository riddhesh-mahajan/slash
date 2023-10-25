"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [selectedTab, setselectedTab] = useState("dashboard");

  useEffect(() => {
    console.log(pathname);

    if (window.location.href.includes("dashboard")) {
      setselectedTab("dashboard");
    }

    if (window.location.href.includes("questions")) {
      setselectedTab("questions");
    }
  }, [pathname]);

  return (
    <section className="p-8">
      <div className="flex justify-between align-middle mb-6">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-center">
          <span className="text-blue-600">/</span>Slash
        </h1>

        {/* Navigation */}
        <div className="flex align-middle">
          <Link href="/dashboard" className="me-2">
            <button
              className={
                selectedTab == "dashboard"
                  ? "w-full text-black font-semibold py-3 px-8 rounded-full border-white bg-white border-2"
                  : "w-full text-white font-semibold py-3 px-8 rounded-full border-white border-2"
              }
            >
              Dashboard
            </button>
          </Link>

          <Link href="/questions">
            <button
              className={
                selectedTab == "questions"
                  ? "w-full text-black font-semibold py-3 px-8 rounded-full border-white bg-white border-2"
                  : "w-full text-white font-semibold py-3 px-8 rounded-full border-white border-2"
              }
            >
              Questions
            </button>
          </Link>
        </div>

        {/* Profile Picture */}
        <div className="flex align-middle ps-14">
          <div className="w-12 h-12 rounded-full text-white flex items-center justify-center border-white border-2">
            <span className="text-2xl font-semibold">J</span>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
