import { useRouter } from "next/router";
import React from "react";
import { BackButton } from "src/components/BackButton";
import { Sidebar } from "src/components/Sidebar";
import { Layout } from "src/Layouts/Layout";
import { blogData } from "src/Mock/blogData";

const BlogPage = () => {
  const router = useRouter();
  let pageId = Number(router.query.id);
  const item = blogData[pageId - 1];
  console.log(pageId);
  return (
    <Layout title={item.title}>
      <Sidebar />
      <div className="flex w-full flex-col items-center justify-center">
        <h1>{item.title}</h1>
        <p className="max-w-xl">{item.text}</p>
        <BackButton href="/blog" />
      </div>
    </Layout>
  );
};

export default BlogPage;
