import Link from "next/link";
import { useReviews } from "@/hooks/useReviews";
import Head from "next/head";

export const Reviews = () => {
  const { data, error, isLoading, isEmpty } = useReviews();

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
              <Link href={`/reviews/${post.id}`}>{post.title.rendered}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Reviews;
