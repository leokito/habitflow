import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const NewGoal = createContext();

export const NewGoalProvider = ({ children }) => {
  // const [token] = useState(localStorage.getItem("token") || "");
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NTgzMzIyLCJqdGkiOiIzNTkxMzJmMmJlM2M0NWFiODRhYzI2MjMwZDVkNjQxYiIsInVzZXJfaWQiOjE5NjF9.x5_KZECg5bX3MA4iVB_0B4rUBQ85fLGAR6VWRP_Tk5s`,
          },
        }
      )
      .then((response) => toast.success("Meta adicionada com sucesso!"))
      .catch((err) => console.log(err));
  };

  return (
    <NewGoal.Provider value={{ AddNewGoal, setNewGoal, newGoal }}>
      {children}
    </NewGoal.Provider>
  );
};
export const useAddNewGoal = () => useContext(NewGoal);
