import React, { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex min-h-[88vh]">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
