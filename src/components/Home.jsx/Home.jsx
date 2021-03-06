import React, { useState, useEffect } from "react";
import Groups from "../Groups/Groups";
import Form from "../Form/Form";
import { Container, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getGroups } from "../../actions/groups";

import useStyles from "./styles";

function Home() {

    
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroups());
  }, [currentId, dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Groups setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
