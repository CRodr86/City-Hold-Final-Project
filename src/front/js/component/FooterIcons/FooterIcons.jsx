import React from "react";
import { ImFacebook2, ImInstagram, ImTwitter } from "react-icons/im";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { SiEnvato } from "react-icons/si";

const FooterIcons = () => {
  return (
    <li className="nav-item mb-2">
      <ImFacebook2 height={40} /> <ImInstagram /> <ImTwitter />{" "}
      <AiFillDribbbleCircle /> <SiEnvato />
    </li>
  );
};

export default FooterIcons;
