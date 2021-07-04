import { Typography } from "@material-ui/core";
import { IPost } from "../../types";
import { parseDate } from "../../utils";
import "./style.scss";

function PostCardDate(props: { label: string, date: string, className?: string }) {
  const { label, date, className = '' } = props;
  return <div className={`flex flex-1 bg-light p-10 jc-sb ${className}`}>
    <Typography className="fs-14 mr-5">{label}</Typography>
    <Typography className="fs-14 fw-500">{parseDate(date)}</Typography>
  </div>
}

export default function PostCard(prop: IPost) {
  return <div className="PostCard bg-base p-10 flex fd-c">
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