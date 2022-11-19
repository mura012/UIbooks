import { MainContent } from "src/components/MainContent";
import { Sidebar } from "src/components/Sidebar";
import { Layout } from "src/Layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout title="ホームページ">
        <Sidebar />
        <MainContent />
      </Layout>
    </>
  );
}
