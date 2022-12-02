import Head from "next/head";
import { Layout } from "src/types/layout";

export const Center = ({ title, children }: Layout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};
