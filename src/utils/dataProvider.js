import { mockedUserPersonalData } from "./mockedData";
import { mockedAverageSessions } from "./mockedData";
import { mockedDailyActivity } from "./mockedData";
import { mockedPerformance } from "./mockedData";

export async function getUser(id) {
  function formatKeyUserData(userData) {
    return [
      {
        name: "Calories",
        icon: "calories-icon",
        amount:
          [
            userData.keyData.calorieCount.toString().slice(0, 1),
            ",",
            userData.keyData.calorieCount.toString().slice(1),
          ].join("") + "kCal",
      },
      {
        name: "Protéines",
        icon: "protein-icon",
        amount: userData.keyData.proteinCount.toString() + "g",
      },
      {
        name: "Glucides",
        icon: "carbs-icon",
        amount: userData.keyData.carbohydrateCount.toString() + "g",
      },
      {
        name: "Lipides",
        icon: "fat-icon",
        amount: userData.keyData.lipidCount.toString() + "g",
      },
    ];
  }

  let userData;

  if (process.env.REACT_APP_IS_MOCKED_VERSION === "false") {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${id}`
      );
      const { data } = await response.json();
      if (!data) return null;
      userData = data;
    } catch {
      return null;
    }
  } else {
    userData = mockedUserPersonalData;
  }
  return {
    userInfos: userData.userInfos,
    keyData: formatKeyUserData(userData),
    score: (userData.todayScore ? userData.todayScore : userData.score) * 100,
  };
}

export async function getDailyActivity(id) {
  let activityData;
  if (process.env.REACT_APP_IS_MOCKED_VERSION === "false") {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${id}/activity`
      );
      const { data } = await response.json();
      if (!data) return null;
      activityData = data;
    } catch {
      return null;
    }
  } else {
    activityData = mockedDailyActivity;
  }
  const formatedDailyActivityData = activityData.sessions.map((session) => ({
    day: session.day.slice(-1),
    kg: session.kilogram,
    Kcal: session.calories,
  }));
  return formatedDailyActivityData;
}

export async function getAverageSessions(id) {
  let averageSessions;

  if (process.env.REACT_APP_IS_MOCKED_VERSION === "false") {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${id}/average-sessions`
      );
      const { data } = await response.json();
      if (!data) return null;
      averageSessions = data;
    } catch {
      return null;
    }
  } else {
    averageSessions = mockedAverageSessions;
  }

  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const formatedAverageSessions = averageSessions.sessions.map(
    (session, index) => ({ ...session, day: days[index] })
  );
  return formatedAverageSessions;
}

export async function getPerformance(id) {
  let performance;

  if (process.env.REACT_APP_IS_MOCKED_VERSION === "false") {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${id}/performance`
      );
      const { data } = await response.json();
      if (!data) return null;
      performance = data;
    } catch {
      return null;
    }
  } else {
    performance = mockedPerformance;
  }
  function translatePerformanceKind(kind) {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return;
    }
  }
  const formatedPerformanceData = performance.data.map((item, index) => ({
    ...item,
    kind: translatePerformanceKind(performance.kind[index + 1]),
  }));
  return formatedPerformanceData;
}
