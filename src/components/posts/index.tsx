import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api.echo-house-osaka.com/wp-json/wp/v2/blog?_embed/"
      );
      if (!res.ok) {
        throw new Error("エラーが発生しました");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title.rendered}</Link>
          </li>
        );
      })}
    </ol>
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
