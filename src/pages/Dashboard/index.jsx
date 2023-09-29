import React from "react";
import SideBar from "../../components/SideBar";
import UserInfoCard from "../../components/UserInfoCard";
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
        <div className={DashboardCSS.dashboard_layout}>
          <div className={DashboardCSS.left_column}>
            <DailyActivityGraph sessions={dailyActivity} />
          </div>
          <div className={DashboardCSS.user_key_data_cards_container}>
            {userData.keyData.map((dataPoint) => (
              <UserInfoCard dataPoint={dataPoint} key={dataPoint.name} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
