import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createGroup, updateGroup } from "../../actions/groups";

function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [groupData, setGroupData] = useState({
    // creator: "",
    title: "",
    message: "",
    game: "",
    platforms: "",
    playersNeeded: "",
    playersJoined: [""],
    likeCount: 0,
  });

  const group = useSelector((state) =>
    currentId ? state.groups.find((group) => group._id === currentId) : ""
  );

  useEffect(() => {
    if (group) setGroupData(group);
  }, [group]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(group);
    // add creator name to players needed here

    if (currentId === 0) {
      dispatch(updateGroup({ ...groupData, name: user?.result?.name }));
    } else {
      dispatch(createGroup({ ...groupData, name: user?.result?.name }));
    }

    clear();
  };

  const clear = () => {
    setCurrentId("");
    setGroupData({
      // creator: "",
      title: "",
      message: "",
      game: "",
      platforms: "",
      playersNeeded: "",
      playersJoined: "",
      likeCount: 0,
    });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create a group.
        </Typography>
      </Paper>
    );
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          // noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Edit" : "Create"} Group
          </Typography>
          <TextField
            name="game"
            required={true}
            variant="outlined"
            label="Game"
            fullWidth
            value={groupData.game}
            onChange={(e) =>
              setGroupData({ ...groupData, game: e.target.value })
            }
          />
          <TextField
            className={classes.formInput}
            name="title"
            required={true}
            variant="outlined"
            label="Title"
            fullWidth
            value={groupData.title}
            onChange={(e) =>
              setGroupData({ ...groupData, title: e.target.value })
            }
          />
          <TextField
            className={classes.formInput}
            name="message"
            required={true}
            variant="outlined"
            label="Message"
            fullWidth
            value={groupData.message}
            onChange={(e) =>
              setGroupData({ ...groupData, message: e.target.value })
            }
          />
          <TextField
            className={classes.formInput}
            name="platform"
            required={true}
            variant="outlined"
            label="Platforms"
            fullWidth
            value={groupData.platforms}
            onChange={(e) =>
              setGroupData({
                ...groupData,
                platforms: e.target.value.split(", "),
              })
            }
          />
          <TextField
            className={classes.formInput}
            name="playersNeeded"
            required={true}
            variant="outlined"
            label="Players needed"
            fullWidth
            value={groupData.playersNeeded}
            onChange={(e) =>
              setGroupData({ ...groupData, playersNeeded: e.target.value })
            }
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Form;
