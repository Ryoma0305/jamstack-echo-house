import Review from "@/components/Review";
import { useReview } from "@/hooks/useReview";

export const ReviewSlug = () => {
  const { review, reviewError, isLoading } = useReview();

  return (
    <div>
      <Review />
    </div>
  );
};

export default ReviewSlug;
