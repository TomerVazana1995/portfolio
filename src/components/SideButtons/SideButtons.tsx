import "./SideButtons.css";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";


function SideButtons() {

  return (
    <div className="side-buttons">
      <a
      href="https://www.facebook.com/tomer.vazana.7"
        target="_blank"
        rel="noreferrer"
        className="side-icons facebook"
      >
        <FaFacebookF color="#453bcd"/>
      </a>
      <a
        href="https://github.com/TomerVazana1995?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="side-icons github"
      >
        <FiGithub color="#453bcd"/>
      </a>
      <a
        href="https://www.linkedin.com/in/tomer-vazana-a8b06323a/"
        target="_blank"
        rel="noreferrer"
        className="side-icons linkedin"
      >
        <BiLogoLinkedin color="#453bcd" />
      </a>
    </div>
  );
}

export default SideButtons;
