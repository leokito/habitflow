import { createContext, useContext, useState } from "react";
import api from "../../Services/api";

const MyGoals = createContext();

export const MyGoalsProvider = ({ children }) => {
  const [myGoals, setMyGoals] = useState([]);

  const getGroupGoal = (id) => {
    api
      .get(`/goals/?group=${id}`)
      .then((response) => setMyGoals(response.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <MyGoals.Provider value={{ getGroupGoal, myGoals }}>
      {children}
    </MyGoals.Provider>
  );
};
export const useMyGoals = () => useContext(MyGoals);
