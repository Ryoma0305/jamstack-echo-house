import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useFetchArray = (url: string) => {
  const router = useRouter();

  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://api.echo-house-osaka.com/wp-json/wp/v2";

export const usePosts = () => {
  return useFetchArray(`${API_URL}/blog?_embed/`);
};

export const useReviews = () => {
  return useFetchArray(`${API_URL}/review?_embed/`);
};
