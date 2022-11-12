import React, { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
