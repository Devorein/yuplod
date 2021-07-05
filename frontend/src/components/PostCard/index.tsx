import { Typography } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { useContext } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { useCreateVoteMutation, useDeleteVoteMutation, useUpdateVoteMutation } from "../../api";
import { RootContext } from "../../contexts";
import { IPostWithUserAndVotes } from "../../types";
import { parseDate } from "../../utils";
import "./style.scss";

function PostCardDate(post: { label: string, date: string, className?: string }) {
  const { label, date, className = '' } = post;
  return <div className={`flex flex-1 bg-light p-10 jc-sb ${className}`}>
    <Typography className="fs-14 mr-5">{label}</Typography>
    <Typography className="fs-14 fw-500">{parseDate(date)}</Typography>
  </div>
}

interface IPostCardProps {
  post: IPostWithUserAndVotes
  onUpdate: (post: IPostWithUserAndVotes) => void
}

export default function PostCard(props: IPostCardProps) {
  const { post, onUpdate } = props;
  const voted = post.voted ?? 0;
  const createVoteMutation = useCreateVoteMutation(), updateVoteMutation = useUpdateVoteMutation(), deleteVoteMutation = useDeleteVoteMutation();
  const { currentUser } = useContext(RootContext);
  const votes = (parseInt(post.votes ?? 0))
  return <div className="PostCard bg-base p-10 flex fd-c">
    <div className="PostCard-data flex jc-sb">
      <div className="flex fd-c bg-light p-10">
        <Typography className="fs-18 mb-5">{post.first_name} {post.last_name}</Typography>
        <Typography className="fs-16 fw-700">{post.username}</Typography>
      </div>
      <div className="flex p-10 ai-c bg-light jc-sb">
        <BiUpvote className="c-p" fill={(voted === 1) ? green[500] : 'white'} size={20} onClick={() => {
          if (currentUser) {
            try {
              if (voted === 1) {
                deleteVoteMutation.mutate({
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: null, votes: (parseInt(post.votes) - 1).toString() })
                  }
                })
              } else if (voted === 0) {
                createVoteMutation.mutate({
                  amount: 1,
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: 1, votes: (parseInt(post.votes) + 1).toString() })
                  }
                })
              } else if (voted === -1) {
                updateVoteMutation.mutate({
                  amount: 1,
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: 1, votes: (parseInt(post.votes) + 2).toString() })
                  }
                })
              }
            } catch (err) {
              console.log(err)
            }
          }
        }} />
        <Typography className="fw-700 ml-10 mr-10" style={{ color: votes < 0 ? red[500] : votes > 0 ? green[500] : 'white' }}>{votes}</Typography>
        <BiDownvote className="c-p" fill={voted === -1 ? red[500] : 'white'} size={20} onClick={() => {
          if (currentUser) {
            try {
              if (voted === 1) {
                updateVoteMutation.mutate({
                  amount: -1,
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: -1, votes: (parseInt(post.votes) - 2).toString() })
                  }
                })
              } else if (voted === 0) {
                createVoteMutation.mutate({
                  amount: -1,
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: -1, votes: (parseInt(post.votes) - 1).toString() })
                  }
                })
              } else if (voted === -1) {
                deleteVoteMutation.mutate({
                  post_id: post.id
                }, {
                  onSuccess() {
                    onUpdate({ ...post, voted: null, votes: (parseInt(post.votes) + 1).toString() })
                  }
                })
              }
            } catch (err) {
              console.log(err)
            }
          }
        }} />
      </div>
    </div>
    <div className="PostCard-image">
      <img src={post.image_url} alt={`${post.id}`} />
    </div>
    <Typography className="PostCard-caption mb-15 flex-1">{post.caption}</Typography>
    <div className="flex ai-c jc-sb">
      <PostCardDate label="Created" date={post.created_at} className={`mr-10`} />
      <PostCardDate label="Updated" date={post.updated_at} />
    </div>
  </div>
}