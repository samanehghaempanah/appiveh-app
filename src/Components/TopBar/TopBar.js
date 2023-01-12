/** @format */

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image6 from "../../images/6.jpg";
import Typography from "@mui/material/Typography";
import "./TopBar.css";

export default function TopBar() {
  const [openInbox, setOpenInbox] = React.useState(false);

  const handleOpenInbox = () => {
    setOpenInbox(!openInbox);
  };

  return (
    <div class={openInbox ? "topBar topBarOpen" : "topBar"}>
      <div class="topBar-in">
        <div>
          <Avatar
            alt="+"
            src="./"
            sx={{
              width: 85,
              height: 85,
              color: "#ccc",
              backgroundColor: "white",
              borderRadius: "25px",
              border: "2px solid #ccc",
            }}
            variant="rounded"
          />
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Add Need
          </Typography>
        </div>
        <div>
          <div className="avatarBorder">
            <Avatar
              alt="image1"
              src={image1}
              class="avatar"
              variant="rounded"
            />
          </div>
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Sanaz Irani
          </Typography>
        </div>
        <div>
          <div className="avatarBorder">
            <Avatar
              alt="image2"
              src={image2}
              class="avatar"
              variant="rounded"
            />
          </div>
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Maryam Z
          </Typography>
        </div>
        <div>
          <div className="avatarBorder">
            <Avatar
              alt="image3"
              src={image3}
              class="avatar"
              variant="rounded"
            />
          </div>
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Alireza
          </Typography>
        </div>
        <div>
          <div className="avatarBorder">
            <Avatar
              alt="image4"
              src={image4}
              class="avatar"
              variant="rounded"
            />
          </div>
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Nava J
          </Typography>
        </div>
        <div>
          <div className="avatarBorder">
            <Avatar
              alt="image6"
              src={image6}
              class="avatar"
              variant="rounded"
            />
          </div>
          <Typography class="avatarText" color="text.secondary" gutterBottom>
            Sam R
          </Typography>
        </div>
      </div>
      <span class="badgeItem" onClick={handleOpenInbox}>
        Inbox <span class="badge badge-light">15</span>
      </span>
    </div>
  );
}
