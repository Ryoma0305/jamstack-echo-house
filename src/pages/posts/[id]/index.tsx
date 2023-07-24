import Post from "@/components/Post";
import { usePost } from "@/hooks/usePost";

export const PostId = () => {
  const { post, postError, isLoading } = usePost();

  return (
    <div>
      <Post />
    </div>
  );
};

export default PostId;
