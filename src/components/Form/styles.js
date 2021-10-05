import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
    },
  },
  paper: {
    padding: theme.spacing(1.5),
    // background: "rgb(196, 196, 199)",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
