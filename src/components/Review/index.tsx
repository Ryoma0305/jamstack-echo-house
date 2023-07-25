import { useReview } from "@/hooks/useReview";
import Head from "next/head";

export const Review = () => {
  const { review, reviewError, isLoading } = useReview();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (reviewError) {
    return <div>{reviewError.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{review?.title?.rendered}</title>
      </Head>
      <h1>{review?.title?.rendered}</h1>
    </div>
  );
};

export default Review;
