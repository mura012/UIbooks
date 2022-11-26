import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sidebar } from "src/components/Sidebar";
import { Layout } from "src/Layouts/Layout";
import { blogData } from "src/Mock/blogData";

const Blog = () => {
  return (
    <Layout title="ブログページ">
      <Sidebar />
      <div className="flex w-full justify-center">
        <ul>
          {blogData.map((item) => {
            if (!item.img) {
              item.img = "/noimage.jpeg";
            }
            return (
              <li key={item.id}>
                <Link href={`/blog/${item.id}`}>
                  <div className="mb-4 max-w-xl border border-solid p-3 shadow-lg">
                    <p className="font-bold">{item.title}</p>
                    <p className="line-clamp-3">{item.text}</p>
                    <div className="mt-2 flex items-center">
                      <p className="mr-2"> 著者：{item.author}</p>
                      <Image
                        src={item.img}
                        width={30}
                        height={30}
                        alt="画像"
                        className="rounded-full	"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
