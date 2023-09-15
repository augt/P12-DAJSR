import React from "react";
import SideBar from "../../components/SideBar";
import DashboardCSS from "./Dashboard.module.css";
import { userPersonalData } from "../../utils/mockedData";

function Dashboard() {
  return (
    <main>
      <SideBar />
      <div className={DashboardCSS.margins}>
        <div className={DashboardCSS.welcome_message}>
          Bonjour{" "}
          <span className={DashboardCSS.user_firstname}>
            {userPersonalData.userInfos.firstName}
          </span>
        </div>
        <div className={DashboardCSS.cheering_message}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default Dashboard;
