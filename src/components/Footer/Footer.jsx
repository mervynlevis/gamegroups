import React, { useState } from "react";
import Dialog from "./Dialog";

const Footer = () => {
  let year = new Date().getFullYear();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // eslint-disable-next-line
  const handleClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line
  const [signedIn, setSignedIn] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <div className="footer">
      {signedIn ? (
        <div
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ fontSize: ".6em" }}
        >
          <Dialog />
        </div>
      ) : null}
      <div className="copyright" style={{float:'right', marginTop: '5%'}}>Mervyn Levis {year}</div>
    </div>
  );
};

export default Footer;
