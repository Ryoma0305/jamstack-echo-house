import Head from "next/head";
import Link from "next/link";
import { Reviews as ReviewsComponent } from "@/components/Reviews";

const Reviews = () => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <ReviewsComponent />
    </>
  );
};

export default Reviews;
