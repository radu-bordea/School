import React from 'react';
import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => (
  <ul className="footer">
    <li className="facebook">
      <a href="https://www.facebook.com/">
        <span>Facebook</span>
        <FaFacebook />
      </a>
    </li>
    <li className="github">
      <a href="https://github.com/">
        <span>Github</span>
        <FaGithub />
      </a>
    </li>
    <li className="linkedin">
      <a href="https://fi.linkedin.com/">
        <span>Linkedin</span>
        <FaLinkedin />
      </a>
    </li>
    <li className="gmail">
      <a href="https://www.gmail.com">
        <span>Gmail</span>
        <TfiEmail />
      </a>
    </li>
  </ul>
);


export default Footer;