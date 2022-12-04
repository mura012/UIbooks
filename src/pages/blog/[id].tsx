import Image from "next/image";
import { useRouter } from "next/router";
import { BackButton } from "src/components/BackButton";
import { Sidebar } from "src/components/Sidebar";
import { Layout } from "src/Layouts/Layout";
import { blogData } from "src/Mock/blogData";

const BlogPage = () => {
  const router = useRouter();
  let pageId = Number(router.query.id);
  const item = blogData[pageId - 1];

  return (
    <Layout title={item?.title}>
      <Sidebar />
      <div className="m-auto flex flex-col items-center justify-center">
        <h1>{item?.title}</h1>
        <p className="max-w-xl">{item?.text}</p>
        <BackButton href="/blog" />
        <div className="mt-2 flex items-center">
          <p className="mr-2"> 著者：{item?.author}</p>
          <Image
            src={item?.img || "/noimage.jpeg"}
            width={30}
            height={30}
            alt="画像"
            className="rounded-full	"
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
