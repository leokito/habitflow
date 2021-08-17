import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";

const EditGroup = createContext();

export const EditionProvider = ({ children }) => {
  const { token } = useAuth();

  const [editGroup, setEditGroup] = useState([]);

  const HandleEditGroup = (info) => {
    api
      .patch(`/groups/${editGroup}/`, info, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => toast.success("Grupo editado com sucesso"))
      .catch((err) => console.log(err));
  };
  return (
    <EditGroup.Provider value={{ HandleEditGroup, editGroup, setEditGroup }}>
      {children}
    </EditGroup.Provider>
  );
};

export const useEditGroup = () => useContext(EditGroup);
