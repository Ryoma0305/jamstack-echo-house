import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useReview = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `https://api.echo-house-osaka.com/wp-json/wp/v2/review/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
