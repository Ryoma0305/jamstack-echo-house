import Head from "next/head";
import Link from "next/link";
import Review from "@/components/Review";
import { useReview } from "@/hooks/useReview";

export const ReviewSlug = () => {
  const { review, reviewError, isLoading } = useReview();

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        <Review />
      </div>
    </>
  );
};

export default ReviewSlug;
