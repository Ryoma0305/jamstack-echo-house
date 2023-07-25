import { useReview } from "@/hooks/useReview";
import Head from "next/head";

export const Review = () => {
  const { data, error, isLoading } = useReview();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title?.rendered}</title>
      </Head>
      <h1>{data?.title?.rendered}</h1>
    </div>
  );
};

export default Review;
