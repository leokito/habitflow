import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const NewGroup = createContext();

export const NewGroupProvider = ({ children }) => {
  const [newGroup, setNewGroup] = useState([{ id: 5, name: "oi" }]);

  const AddNewGroup = (info) => {
    if (!info) {
      return toast.error("Adicione novo grupo!");
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5MjI5MjcyLCJqdGkiOiJkMWQ2NmU4OWVmYjc0Yjg2OWI5OWEwYjdjY2JiNjdkMSIsInVzZXJfaWQiOjE3OTl9.lfMJUgirtzShyWQFbtRemF5kuyV5Sw4zIQnZzVkaIeU`,
          },
        }
      )
      .then((response) => setNewGroup([...newGroup, response.data.results]))
      .catch((err) => toast.error("Grupo já existe!"));
  };

  return (
    <NewGroup.Provider value={{ newGroup, setNewGroup, AddNewGroup }}>
      {children}
    </NewGroup.Provider>
  );
};
export const useAddNewGroup = () => {
  const context = useContext(NewGroup);

  const { newGroup, setNewGroup, AddNewGroup } = context;

  return {
    newGroup,
    setNewGroup,
    AddNewGroup,
  };
};
