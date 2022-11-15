import Head from "next/head";
import { MainContent } from "src/components/MainContent";
import { Layout } from "src/Layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホームページ</title>
      </Head>
      <Layout>
        <MainContent />
      </Layout>
    </>
  );
}
