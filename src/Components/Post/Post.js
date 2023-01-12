/** @format */

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import image1 from "../../images/1.jpg";
import image2 from "../../images/6.jpg";
import image3 from "../../images/6 - Copy.jpg";
import "./Post.css";

const postText =
  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";

export default function Post() {
  //////////////////////////////// States & Handles

  const [likeAction, setLikeAction] = React.useState(false);

  const handleLikeAction = () => {
    setLikeAction(!likeAction);
  };

  const [bookmarkAction, setBookmarkAction] = React.useState(false);

  const handleBookmarkAction = () => {
    setBookmarkAction(!bookmarkAction);
  };

  const [showMore, setShowMore] = React.useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  //////////////////////////////// Render

  return (
    <div className="posts">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src={image1}
              sx={{ cursor: "pointer" }}
              aria-label="recipe"
            />
          }
          title="Sanaz Irani"
        />
        <div className="d-flex flex-row">
          <div>
            <CardMedia
              component="img"
              height="100%"
              image={image1}
              alt="Sanaz Irani"
              sx={{ borderRadius: "30px" }}
            />
            <div className="cardBottom">
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
                sx={{ height: "70px" }}
              >
                <Chip
                  label="Ad"
                  sx={{ backgroundColor: "#cdcdcd", color: "white" }}
                />
                <Chip
                  label="Buy (10.000 Giv)"
                  sx={{ backgroundColor: "#04f100", color: "white" }}
                  clickable="true"
                />
                <div className="lastChip">
                  <Chip
                    label="10 Giv"
                    sx={{ backgroundColor: "#0000cd", color: "white" }}
                    icon={<LocalAtmIcon color="inherit" />}
                  />
                </div>
              </Stack>
            </div>
          </div>
          <div className="postActions">
            <span className="actionItems">
              {bookmarkAction ? (
                <BookmarkOutlinedIcon
                  fontSize="inherit"
                  className="actionBookmarkClicked"
                  onClick={handleBookmarkAction}
                />
              ) : (
                <BookmarkBorderIcon
                  fontSize="inherit"
                  onClick={handleBookmarkAction}
                />
              )}
            </span>
            <span className="actionItems">
              <SendOutlinedIcon fontSize="inherit" />
            </span>
            <span className="actionItems">
              <ModeCommentOutlinedIcon fontSize="inherit" />
              <span class="d-block badge badge-light">51</span>
            </span>
            <span className="actionItems">
              {likeAction ? (
                <FavoriteIcon
                  fontSize="inherit"
                  className="actionLikeClicked"
                  onClick={handleLikeAction}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  fontSize="inherit"
                  onClick={handleLikeAction}
                />
              )}
              <span class="d-block badge badge-light">2.1 K</span>
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-baseline px-1"
          style={{ width: "88%" }}
        >
          <div class="postDotted-line">
            <hr className="dotted-line" style={{ width: "40px" }} />
            <hr className="dotted-line" />
            <hr className="dotted-line" />
            <hr className="dotted-line" />
          </div>
          <Typography class="postTime">8 minutes ago</Typography>
        </div>

        <CardContent>
          <Typography
            variant="body1"
            color="text.inherit"
            class={showMore ? "" : "postText"}
            onClick={handleShowMore}
          >
            {showMore ? postText : `${postText.substring(0, 250)}`}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src={image2}
              sx={{ cursor: "pointer" }}
              aria-label="recipe"
            />
          }
          title="Sam R"
        />
        <div className="d-flex flex-row">
          <div>
            <CardMedia
              component="img"
              height="100%"
              image={image3}
              alt="Sam R"
              sx={{ borderRadius: "30px" }}
            />
            <div className="cardBottom">
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
                sx={{ height: "70px" }}
              >
                <Chip
                  label="Ad"
                  sx={{ backgroundColor: "#cdcdcd", color: "white" }}
                />
                <Chip
                  label="Buy (10.000 Giv)"
                  sx={{ backgroundColor: "#04f100", color: "white" }}
                  clickable="true"
                />
                <div className="lastChip">
                  <Chip
                    label="10 Giv"
                    sx={{ backgroundColor: "#0000cd", color: "white" }}
                    icon={<LocalAtmIcon color="inherit" />}
                  />
                </div>
              </Stack>
            </div>
          </div>
          <div className="postActions">
            <span className="actionItems">
              {bookmarkAction ? (
                <BookmarkOutlinedIcon
                  fontSize="inherit"
                  className="actionBookmarkClicked"
                  onClick={handleBookmarkAction}
                />
              ) : (
                <BookmarkBorderIcon
                  fontSize="inherit"
                  onClick={handleBookmarkAction}
                />
              )}
            </span>
            <span className="actionItems">
              <SendOutlinedIcon fontSize="inherit" />
            </span>
            <span className="actionItems">
              <ModeCommentOutlinedIcon fontSize="inherit" />
              <span class="d-block badge badge-light">51</span>
            </span>
            <span className="actionItems">
              {likeAction ? (
                <FavoriteIcon
                  fontSize="inherit"
                  className="actionLikeClicked"
                  onClick={handleLikeAction}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  fontSize="inherit"
                  onClick={handleLikeAction}
                />
              )}

              <span class="d-block badge badge-light">2.1 K</span>
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-baseline px-1"
          style={{ width: "88%" }}
        >
          <div class="postDotted-line">
            <hr className="dotted-line" style={{ width: "40px" }} />
            <hr className="dotted-line" />
            <hr className="dotted-line" />
            <hr className="dotted-line" />
          </div>
          <Typography class="postTime">8 minutes ago</Typography>
        </div>

        <CardContent>
          <Typography
            variant="body1"
            color="text.inherit"
            class={showMore ? "" : "postText"}
            onClick={handleShowMore}
          >
            {showMore ? postText : `${postText.substring(0, 250)}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
