import React from "react";
import SideBar from "../../components/SideBar";
import DashboardCSS from "./Dashboard.module.css";
import {
  getUserPersonalData,
  getDailyActivityData,
} from "../../utils/dataProvider";
import DailyActivityGraph from "../../components/Graphs/DailyActivityGraph";

function Dashboard() {
  const userData = getUserPersonalData();
  const dailyActivity = getDailyActivityData();
  return (
    <main>
      <SideBar />
      <div className={DashboardCSS.margins}>
        <div className={DashboardCSS.welcome_message}>
          Bonjour{" "}
          <span className={DashboardCSS.user_firstname}>
            {userData.userInfos.firstName}
          </span>
        </div>
        <div className={DashboardCSS.cheering_message}>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </div>
        <DailyActivityGraph sessions={dailyActivity} />
      </div>
    </main>
  );
}

export default Dashboard;
