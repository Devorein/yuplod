import { Typography } from "@material-ui/core";
import { ReactNode } from "react";
import { useQueryClient } from "react-query";
import { useGetAllPosts } from "../../api";
import { PostCard } from "../../components";
import { IPostWithUserAndVotes } from "../../types";
import "./style.scss";

export default function Home() {
  const { isLoading, isError, data } = useGetAllPosts();
  const client = useQueryClient();
  let content: ReactNode = null;
  if (isLoading) {
    content = <Typography>Loading posts</Typography>
  } else if (isError) {
    content = <Typography>Error fetching posts</Typography>
  } else if (data) {
    const posts = data.data.data;
    content = <div className="Home-postsContainer">
      {posts.map((post, index) => <PostCard post={post} key={post.id} onUpdate={(data: IPostWithUserAndVotes) => {
        posts[index] = data;
        client.setQueryData('posts', {
          data: {
            data: posts
          }
        })
      }} />)}
    </div>
  }

  return <div className="Home page p-10">{content}</div>
}