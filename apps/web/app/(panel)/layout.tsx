"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [selectedTab, setselectedTab] = useState("dashboard");
  const [showProfileMenu, setshowProfileMenu] = useState(false);
  const [accessToken, setaccessToken] = useLocalStorage("accessToken", "");
  const [email, setemail] = useLocalStorage("email", "");

  const searchParams = useSearchParams();
  const accessTokenVal = searchParams.get("accessToken");
  const emailVal = searchParams.get("email");

  useEffect(() => {
    if (accessTokenVal && accessTokenVal != "") {
      setaccessToken(accessTokenVal);
    }

    if (emailVal && emailVal != "") {
      setemail(emailVal);
    }
  }, [accessTokenVal, emailVal]);

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
    <section
      className="h-screen p-8"
      onClick={() => {
        setshowProfileMenu(false);
      }}
    >
      <div className="flex justify-between mb-6 align-middle">
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
        <div
          className="flex align-middle cursor-pointer ps-14"
          onClick={(e) => {
            e.stopPropagation();
            setshowProfileMenu(!showProfileMenu);
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 text-white border-2 border-white rounded-full">
            <span
              className="text-2xl font-semibold select-none"
              suppressHydrationWarning
            >
              {email && email != "" ? email[0].toUpperCase() : "*"}
            </span>
          </div>
        </div>

        <div
          onClick={(e) => {
            e.stopPropagation();
            setshowProfileMenu(!showProfileMenu);
          }}
          className={`absolute right-0 z-10 w-32 mt-14 me-10 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            showProfileMenu
              ? "transition ease-out duration-10 transform opacity-100 scale-100"
              : "transition ease-in duration-75 transform opacity-0 scale-95"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
            <a
              href={`${process.env.NEXT_PUBLIC_LANDINGG_BASE_URL}/login`}
              onClick={() => {
                localStorage.clear();
              }}
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
