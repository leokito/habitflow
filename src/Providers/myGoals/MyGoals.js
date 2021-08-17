import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";

const MyGoals = createContext();

export const MyGoalsProvider = ({ children }) => {
  const { token } = useAuth();
  const [myGoals, setMyGoals] = useState([]);
  const [editGoal, setEditGoal] = useState("");

  const getGroupGoal = (id) => {
    api
      .get(`/goals/?group=${id}`)
      .then((response) => setMyGoals(response.data.results))
      .catch((err) => console.log(err));
  };

  const setGroupGoal = (data) => {
    let achivied = Number(data.how_much_achieved);

    console.log(data, achivied);
    api
      .post(
        `/goals/`,
        {
          title: data.title,
          difficulty: data.difficulty,
          how_much_achieved: achivied,
          group: editGoal,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Meta adicionada com sucesso!"))
      .catch((err) => console.log(err));
  };
  return (
    <MyGoals.Provider
      value={{ getGroupGoal, myGoals, setGroupGoal, setEditGoal }}
    >
      {children}
    </MyGoals.Provider>
  );
};
export const useMyGoals = () => useContext(MyGoals);
