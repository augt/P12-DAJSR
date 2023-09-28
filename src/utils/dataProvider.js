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

export const mockedDailyActivity = {
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

export function getUserPersonalData() {
  if (process.env.REACT_APP_IS_MOCKED_VERSION === "true") {
    return mockedUserPersonalData;
  }
}

export function getDailyActivityData() {
  if (process.env.REACT_APP_IS_MOCKED_VERSION === "true") {
    const formatedDailyActivityData = mockedDailyActivity.sessions.map(
      (session) => ({
        name: session.day.slice(-1),
        kg: session.kilogram,
        Kcal: session.calories,
      })
    );
    return formatedDailyActivityData;
  }
}
