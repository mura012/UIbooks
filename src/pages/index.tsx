import Head from "next/head";
import { Main } from "src/components/Main";
import { Layout } from "src/Layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホームページ</title>
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
