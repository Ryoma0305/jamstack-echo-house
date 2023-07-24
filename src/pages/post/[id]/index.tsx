import Post from "@/components/post";
import { usePost } from "@/hooks/usePost";
import { useRouter } from "next/router";
import useSWR from "swr";

export const PostId = () => {
  const { post, postError, isLoading } = usePost();

  return (
    <div>
      <Post />
    </div>
  );
};

export default PostId;
