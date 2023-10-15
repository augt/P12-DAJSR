const mockedUserPersonalData = {
  id: 12,
  userInfos: {
    firstName: "Thomas",
    lastName: "Dovineau",
    age: 31,
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};

const mockedDailyActivity = {
  userId: 12,
  sessions: [
    {
      day: "2020-07-01",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "2020-07-05",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 76,
      calories: 390,
    },
  ],
};

const mockedAverageSessions = {
  userId: 12,
  sessions: [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ],
};

const mockedPerformance = {
  userId: 12,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  },
  data: [
    {
      value: 80,
      kind: 1,
    },
    {
      value: 120,
      kind: 2,
    },
    {
      value: 140,
      kind: 3,
    },
    {
      value: 50,
      kind: 4,
    },
    {
      value: 200,
      kind: 5,
    },
    {
      value: 90,
      kind: 6,
    },
  ],
};

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
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const { data } = await response.json();
    userData = data;
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
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    const { data } = await response.json();
    activityData = data;
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
    const response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const { data } = await response.json();
    averageSessions = data;
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
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`
    );
    const { data } = await response.json();
    performance = data;
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
