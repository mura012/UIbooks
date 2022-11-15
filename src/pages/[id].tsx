import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "src/Layouts/Layout";
import { blogData } from "src/Mock/blogData";

const BlogPage = () => {
  const router = useRouter();
  let pageId = Number(router.query.id);
  const item = blogData[pageId - 1];
  console.log(pageId);
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center">
        <h1>{item.title}</h1>
        <p className="max-w-xl">{item.text}</p>
        <Link href="/blog">もどる</Link>
      </div>
    </Layout>
  );
};

export default BlogPage;
