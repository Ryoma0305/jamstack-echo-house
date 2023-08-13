import Head from "next/head";
import { Posts as PostsComponent } from "@/components/Posts";

const Posts = () => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <PostsComponent />
    </>
  );
};

export default Posts;
