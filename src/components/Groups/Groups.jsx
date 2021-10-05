import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Group from "./Group/Group";
import { useSelector } from "react-redux";

import useStyles from "./styles";

function Groups({ setCurrentId }) {
  const groups = useSelector((state) => state.groups);

  const classes = useStyles();

  return !groups.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {groups.map((group, index) => (
        <Grid key={index} item xs={12} sm={9} md={6}> {/*may need to change back*/}
          <Group group={group} setCurrentId={setCurrentId}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Groups;
