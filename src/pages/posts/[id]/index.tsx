import Head from "next/head";
import Link from "next/link";
import Post from "@/components/Post";
import { usePost } from "@/hooks/usePost";

export const PostId = () => {
  const { post, postError, isLoading } = usePost();

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        <Post />
      </div>
    </>
  );
};

export default PostId;
