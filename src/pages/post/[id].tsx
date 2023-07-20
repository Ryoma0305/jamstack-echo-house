import { useRouter } from "next/router";
import useSWR from "swr";

export const PostId = () => {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());

  const router = useRouter();

  const { data, error } = useSWR(
    "https://api.echo-house-osaka.com/wp-json/wp/v2/blog?_embed/",
    fetcher
  );

  console.log({ data, error });

  return <div>{router.query.id}</div>;
};

export default PostId;
