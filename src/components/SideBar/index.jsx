import React from "react";
import SideBarCSS from "./SideBar.module.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className={SideBarCSS.sidebar_container}>
      <nav>
        <ul>
          <li>
            <Link to="#">
              <img src="../yoga-icon.svg" alt="yoga" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="../swimming-icon.svg" alt="natation" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="../biking-icon.svg" alt="vélo" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="../weightlifting-icon.svg" alt="haltérophilie" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={SideBarCSS.copyright_info}>Copyright, SportSee 2020</div>
    </div>
  );
}

export default SideBar;
