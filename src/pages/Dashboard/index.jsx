import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import UserInfoCard from "../../components/UserInfoCard";
import DashboardCSS from "./Dashboard.module.css";
import {
  getUser,
  getDailyActivity,
  getAverageSessions,
  getPerformance,
} from "../../utils/dataProvider";
import DailyActivityGraph from "../../components/Graphs/DailyActivityGraph";
import AverageSessionsGraph from "../../components/Graphs/AverageSessionsGraph";
import PerformanceGraph from "../../components/Graphs/PerformanceGraph";
import ScoreGraph from "../../components/Graphs/ScoreGraph";

function Dashboard() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    getUser(id).then((user) => setUser(user));
    getDailyActivity(id).then((activity) => setDailyActivity(activity));
    getAverageSessions(id).then((sessions) => setAverageSessions(sessions));
    getPerformance(id).then((perf) => setPerformance(perf));
  }, [id]);

  if (
    user === null ||
    dailyActivity === null ||
    averageSessions === null ||
    performance === null
  ) {
    return (
      <p>Une erreur s'est produite lors de la récupération de vos données</p>
    );
  }

  return (
    <main className={DashboardCSS.dashboard_container}>
      <SideBar />
      <div className={DashboardCSS.margins}>
        <div className={DashboardCSS.welcome_message}>
          Bonjour{" "}
          <span className={DashboardCSS.user_firstname}>
            {user.userInfos.firstName}
          </span>
        </div>
        <div className={DashboardCSS.cheering_message}>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </div>
        <div className={DashboardCSS.dashboard_layout}>
          <div className={DashboardCSS.left_column}>
            <DailyActivityGraph sessions={dailyActivity} />
            <div className={DashboardCSS.lower_graphs_group}>
              <AverageSessionsGraph sessions={averageSessions} />
              <PerformanceGraph performance={performance} />
              <ScoreGraph score={user.score} />
            </div>
          </div>
          <div className={DashboardCSS.user_key_data_cards_container}>
            {user.keyData.map((dataPoint) => (
              <UserInfoCard dataPoint={dataPoint} key={dataPoint.name} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
