import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const Players = (group) => {
  group = group.group;
  const [joinedGroup, setJoinedGroup] = useState(group.playersJoined);
  console.log(joinedGroup);

  useEffect(() => {
    setJoinedGroup(group.playersJoined);
  }, [group.playersJoined])


  return (
    <Typography variant="body2">
      {joinedGroup.map((player) => `${player} \n`)}
    </Typography>
  );
};

export default Players;
