import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { usePosts } from "@/hooks/useFetchArray";
// import PostService from "../services/PostService";
// import PostType from "../types/PostType";

// const Home: NextPage<{
//   staticPostList: PostType[]; // 型の指定をする場所に注意！
// }> = ({ staticPostList }) => {
//   return (
//     <div>
//       {staticPostList.map((post) => {
//         return <p key={post.id}>{post.title}</p>; // 一個ずつ表示させる
//       })}
//     </div>
//   );
// };

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div>
      <Head>
        <title>タイトル</title>
      </Head>
      <ol>
        {data.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title.rendered}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// export async function getStaticProps() {
//   const staticPostList = await PostService.getList(); // postListをとってくる
//   return {
//     props: {
//       staticPostList,
//     },
//     revalidate: 10,
//   };
// }

export default Posts;
