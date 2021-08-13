import { createContext, useState, useContext } from "react";
import useAuth from "../auth/Auth";
import api from "../../Services/api";

const NewGroup = createContext();

export const NewGroupProvider = ({ children }) => {
  const [newGroup, setNewGroup] = useState([]);

  const { token: auth } = useAuth();

  const AddNewGroup = (info) => {
    if (!info) {
      return console.log("Adicione novo grupo!");
    }

    api
      .post(
        "/groups/",
        {
          name: info.name,
          description: info.description,
          category: info.category,
        },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      )
      .then((response) => setNewGroup([...newGroup, response.data.results]))
      .catch((err) => console.log("Grupo já existe!"));
  };

  return (
    <NewGroup.Provider value={{ newGroup, setNewGroup, AddNewGroup }}>
      {children}
    </NewGroup.Provider>
  );
};
export const useAddNewGroup = () => useContext(NewGroup);
