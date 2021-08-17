import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const EditGroup = createContext();

export const EditionProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("token") || "");

  const [editGroup, setEditGroup] = useState([]);
  console.log(editGroup);

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
