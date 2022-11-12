import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>ホームページ</title>
      </Head>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
