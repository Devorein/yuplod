import { Typography } from "@material-ui/core";
import { IPost } from "../../types";
import "./style.scss";

export default function PostCard(prop: IPost) {
  return <div className="PostCard">
    <div className="PostCard-image">
      <img src={prop.image_url} alt={`${prop.id}`} />
    </div>
    <Typography className="PostCard-caption">{prop.caption}</Typography>
    <div className="flex ai-c jc-sb">
      <div className="flex flex-1">
        <Typography>Created At</Typography>
        <Typography>{prop.created_at}</Typography>
      </div>

      <div className="flex flex-1">
        <Typography>Updated At</Typography>
        <Typography>{prop.updated_at}</Typography>
      </div>
    </div>
  </div>
}