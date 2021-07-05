import { Typography } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { useContext, useState } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { useCreateVoteMutation } from "../../api";
import { RootContext } from "../../contexts";
import { IPostWithUserAndVotes } from "../../types";
import { parseDate } from "../../utils";
import "./style.scss";

function PostCardDate(props: { label: string, date: string, className?: string }) {
  const { label, date, className = '' } = props;
  return <div className={`flex flex-1 bg-light p-10 jc-sb ${className}`}>
    <Typography className="fs-14 mr-5">{label}</Typography>
    <Typography className="fs-14 fw-500">{parseDate(date)}</Typography>
  </div>
}

export default function PostCard(prop: IPostWithUserAndVotes) {
  const [voteAmount, setVoteAmount] = useState(prop.voted !== null ? prop.voted : 0);
  const createVoteMutation = useCreateVoteMutation();
  const { currentUser } = useContext(RootContext);
  const votes = (parseInt(prop.votes ?? 0) + voteAmount)
  return <div className="PostCard bg-base p-10 flex fd-c">
    <div className="PostCard-data flex jc-sb">
      <div className="flex fd-c bg-light p-10">
        <Typography className="fs-18 mb-5">{prop.first_name} {prop.last_name}</Typography>
        <Typography className="fs-16 fw-700">{prop.username}</Typography>
      </div>
      <div className="flex p-10 ai-c bg-light jc-sb">
        <BiUpvote className="c-p" fill={(voteAmount === 1) ? green[500] : 'white'} size={20} onClick={() => {
          if (currentUser) {
            createVoteMutation.mutate({
              amount: 1,
              post_id: prop.id
            })
            setVoteAmount(voteAmount === 1 ? 0 : 1)
          }
        }} />
        <Typography className="fw-700 ml-10 mr-10" style={{ color: votes < 0 ? red[500] : votes > 0 ? green[500] : 'white' }}>{votes}</Typography>
        <BiDownvote className="c-p" fill={voteAmount === -1 ? red[500] : 'white'} size={20} onClick={() => {
          if (currentUser) {
            createVoteMutation.mutate({
              amount: -1,
              post_id: prop.id
            })
            setVoteAmount(voteAmount === -1 ? 0 : -1)
          }
        }} />
      </div>
    </div>
    <div className="PostCard-image">
      <img src={prop.image_url} alt={`${prop.id}`} />
    </div>
    <Typography className="PostCard-caption mb-15 flex-1">{prop.caption}</Typography>
    <div className="flex ai-c jc-sb">
      <PostCardDate label="Created" date={prop.created_at} className={`mr-10`} />
      <PostCardDate label="Updated" date={prop.updated_at} />
    </div>
  </div>
}