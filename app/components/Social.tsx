import { FaLinkedinIn, FaGithub, FaTwitter, FaRegFileAlt } from "react-icons/fa";

export default function Social({ info }) {
  return (
    <div className={info ? "sidebar-main-social__info" : "sidebar-main-social"}>
      <ul className="sidebar-main-social-list">
        <li className="sidebar-main-social-list-item">
          <a href="https://www.linkedin.com/in/loconluis/" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="sidebar-main-social-list-item">
          <a href="https://github.com/loconluis/" target="_blank" aria-label="Github">
            <FaGithub />
          </a>
        </li>
        <li className="sidebar-main-social-list-item" aria-label="Twitter">
          <a href="https://twitter.com/LoconLuis" target="_blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
}
