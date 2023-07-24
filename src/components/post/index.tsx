import { usePost } from "@/hooks/usePost";
import Head from "next/head";

export const Post = () => {
  const { post, postError, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (postError) {
    return <div>{postError.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title.rendered}</title>
      </Head>
      <h1>{post?.title.rendered}</h1>
      <p>{post?.content.rendered}</p>
    </div>
  );
};

export default Post;
