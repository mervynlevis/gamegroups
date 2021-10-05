import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import Players from './Players';

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  deleteGroup,
  likeGroup,
  joinGroup,
  leaveGroup,
} from "../../../actions/groups";

import useStyles from "./styles";

function Group({ group, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));


  // get joined user and use state
  

  // check if user has joined this group 
  // eslint-disable-next-line
  const [userJoined, setUserJoined] = useState(false);

  const Likes = () => {
    if (group.likes.length > 0) {
      return group.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {group.likes.length > 2
            ? `You and ${group.likes.length - 1} others`
            : `${group.likes.length} like${group.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{group.likes.length}{" "}
          {group.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
  };

  const Joined = () => {
    return (
      <p style={{ marginLeft: "40%" }}>
        {group.playersJoined.length} /{group.playersNeeded}{" "}
      </p>
    );
  };


  // const Players = () => {
  //   setJoinedGroup(group.playersJoined);
  //   return (
  //     <Typography variant="body2">
  //       {joinedGroup.map((player) => `${player} \n`)}
  //     </Typography>
  //   );
  // };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        title={group.title}
        image={
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{group.name}</Typography>
        <Typography variant="body1">{group.game}</Typography>
        <Typography variant="body2">
          {moment(group.createdAt).fromNow()}
        </Typography>
        <br></br>
        <div className="joinedPlayers">
          <Players group={group} />
        </div>
      </div>
      {(user?.result?.googleId === group?.creator ||
        user?.result?._id === group?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(group._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textPrimary">
          {group.platforms.map((platform) => `#${platform} `)}
        </Typography>
      </div>

      <CardContent style={{ padding: "5% 0% 5% 0%" }}>
        <Typography className={classes.title} variant="h5" color="textPrimary">
          {group.title}
        </Typography>
        <Typography
          className={classes.title}
          variant="body2"
          component="p"
          gutterBottom
          color="textSecondary"
        >
          {group.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likeGroup(group._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === group?.creator ||
          user?.result?._id === group?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteGroup(group._id))}
          >
            <DeleteIcon fontSize="small" />
            &nbsp;Delete
          </Button>
        )}
      </CardActions>
      <CardActions>
        <Button
          className="joinBtn"
          size="small"
          color="primary"
          style={{ textAlign: "left" }}
          onClick={() => dispatch(joinGroup(group._id, user?.result.name))}
        >
          <AddIcon fontSize="medium" />
          &nbsp;Join
        </Button>
        <Button
          className="joinBtn"
          size="small"
          color="primary"
          style={{ textAlign: "left" }}
          disabled={userJoined}
          onClick={() => dispatch(leaveGroup(group._id, user?.result.name))}
        >
          <RemoveIcon fontSize="medium" />
          &nbsp;Leave
        </Button>
        <Joined />
      </CardActions>
    </Card>
  );
}

export default Group;
