import Head from "next/head";
import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Layout as Props } from "src/types/layout";

export const Layout = ({ title, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="flex min-h-[88vh]">{children}</div>
      <Footer />
    </div>
  );
};
