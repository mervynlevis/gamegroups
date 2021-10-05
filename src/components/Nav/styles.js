import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0",
    paddingLeft: "1vw",
    background: "rgb(74, 74, 79)",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    fontSize: "1.6em", //may need to remove or change for mobile
    width: "38vw",
    // fontSize: '1.75em',
    textAlign: "left",
  },
  headingLogo: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "45vw",
    marginRight: "0vw",
    fontSize: ".8em",
  },
  profile: {
    display: "flex",
    // justifyContent: "space-between",
    marginRight: "0vw",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    margin: "0vw 2vw",
    fontSize: "1.1em",
    marginLeft: "1vw",
    color: '#fff',
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  logBtn: {
    fontSize: ".75em",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
