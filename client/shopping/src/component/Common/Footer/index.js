import React, { memo } from "react";
import { FOOTERTEXT } from "../../../utils/APP";
import './Footer.scss';

const Footer = memo(() => {
  const footer = FOOTERTEXT.split(",");
  return (
    <footer className="app-footer">
      {footer[0]} &copy; {footer[1]}
    </footer>
  );
});

export default Footer;
