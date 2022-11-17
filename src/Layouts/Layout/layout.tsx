import React, { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex min-h-[88vh]">{children}</div>
      <Footer />
    </div>
  );
};
