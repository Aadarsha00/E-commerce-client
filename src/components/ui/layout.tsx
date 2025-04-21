"use client";
import React from "react";
import Header from "../header";
import { usePathname } from "next/navigation";
import Footer from "../footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const pathName = usePathname();
  const hideNav = pathName === "/login" || pathName === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && <Header />}

      <main className="flex-grow mb-10">{children}</main>

      {!hideNav && <Footer />}
    </div>
  );
};

export default Layout;
