import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./ListItem.scss";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="ListItem"
      style={{ left: isHovered ? index * 255 - 50 + index * 2.5 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGwFJQ4Q5e_Z2041c6tHrq9ZsVHfoh2aHmQ&usqp=CAU" alt="" />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop={true} muted={true} controls={true} />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Qui eiusmod ut eiusmod adipisicing nostrud eiusmod
              occaecat anim minim culpa non laboris culpa.
            </div>
            <div className="genre">Romance</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
