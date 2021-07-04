import { Typography } from "@material-ui/core";
import { ReactNode } from "react";
import { useGetAllPosts } from "../../api";
import { PostCard } from "../../components";
import "./style.scss";

export default function Home() {
  const { isLoading, isError, data } = useGetAllPosts();
  let content: ReactNode = null;
  if (isLoading) {
    content = <Typography>Loading posts</Typography>
  } else if (isError) {
    content = <Typography>Error fetching posts</Typography>
  } else if (data) {
    content = <div className="Home-postsContainer">
      {data.data.data.map(post => <PostCard {...post} key={post.id} />)}
    </div>
  }

  return <div className="Home page p-10">{content}</div>
}