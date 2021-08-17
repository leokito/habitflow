import { createContext, useState, useContext } from "react";
import { useAuth } from "../auth/Auth";
import api from "../../Services/api";

const NewHabitContext = createContext();

export const AddHabitProvider = ({ children }) => {
  const [newHabit, setNewHabit] = useState([]);

  const { token, userID } = useAuth();

  const AddHabit = (data) => {
    api
      .post(
        "/habits/",
        {
          title: data.title,
          category: data.category,
          difficulty: data.difficulty,
          frequency: data.frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setNewHabit([...newHabit, response.data.results]))
      .catch((err) => console.log("Deu ruim!"));
  };

  return (
    <NewHabitContext.Provider value={{ newHabit, setNewHabit, AddHabit }}>
      {children}
    </NewHabitContext.Provider>
  );
};
export const useAddHabit = () => useContext(NewHabitContext);
