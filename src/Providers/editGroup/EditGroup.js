import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const EditGroup = createContext();

export const EditionProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("token") || "");

  const HandleEditGroup = (data) => {
    api
      .post(
        `/groups/${data.id}`,
        {
          name: data.name,
          description: data.description,
          category: data.category,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Grupo editado com sucesso"))
      .catch((err) => console.log(err));
  };
  return (
    <EditGroup.Provider value={{ HandleEditGroup }}>
      {children}
    </EditGroup.Provider>
  );
};

const useEditGroup = () => useContext(EditGroup);
