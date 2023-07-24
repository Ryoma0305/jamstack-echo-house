import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePost = () => {
  const router = useRouter();

  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://api.echo-house-osaka.com/wp-json/wp/v2/blog/${router.query.id}`
      : null,
    fetcher
  );

  return {
    post,
    postError,
    isLoading: !post && !postError,
  };
};
