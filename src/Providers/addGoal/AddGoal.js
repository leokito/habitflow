import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const NewGoal = createContext();

export const NewGoalProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitflow: token") || "";
  const [newGoal, setNewGoal] = useState([]);
  const AddNewGoal = (data) => {
    api
      .post(
        "/goals/",
        {
          title: data.title,
          difficulty: data.difficulty,
          how_much_achieved: data.how_much_achieved,
          group: newGoal,
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
    console.log(data);
  };

  return (
    <NewGoal.Provider value={{ AddNewGoal, setNewGoal, newGoal }}>
      {children}
    </NewGoal.Provider>
  );
};
export const useAddNewGoal = () => useContext(NewGoal);
