import { useRouter } from "next/router";

export const PostId = () => {
  const router = useRouter();
  console.log(router.query.id);

  return <div>{router.query.id}</div>;
};

export default PostId;
