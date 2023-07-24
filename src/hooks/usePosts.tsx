import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePosts = () => {
  const { data, error } = useSWR(
    "https://api.echo-house-osaka.com/wp-json/wp/v2/blog?_embed/",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
