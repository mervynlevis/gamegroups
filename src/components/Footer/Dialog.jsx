import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/auth";

export default function AlertDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    event.preventDefault();
    console.log("user ID: ", user.result._id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await dispatch(deleteUser(user.result._id, history));
    localStorage.clear();
    setOpen(false);
    history.push();
  };

  return (
    <div>
      <Button variant="outlined" onClick={(event) => handleClickOpen(event)}>
        Delete Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Account Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting your account will remove all your groups. You can sign up
            again at any time, but we'll be sad to see you go.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} autoFocus>
            Yes, delete my account
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
