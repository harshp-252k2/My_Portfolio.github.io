import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a rel="noreferrer"  target="_blank" href="https://www.instagram.com/harsh__225_"><InstagramIcon /></a>
        <a rel="noreferrer"  target="_blank" href="https://www.twitter.com/"><TwitterIcon /></a>
        <a rel="noreferrer"  target="_blank" href="https://www.facebook.com/profile.php?id=100013812621122"><FacebookIcon /></a>
        <a rel="noreferrer"  target="_blank" href="https://www.linkedin.com/in/harsh-patel-22b875244"><LinkedInIcon/></a>
      </div>
      {/* <p> &copy; 2022 pedrotech.com</p> */}
      <p> &copy; 2022 Created By Harsh Patel</p>
      <p>WWW.Harsh_Patel.Com</p>
    </div>
  );
}

export default Footer;
