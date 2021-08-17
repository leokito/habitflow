import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const NewGroup = createContext();

export const NewGroupProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitflow: token") || "";

  const AddNewGroup = (data) => {
    if (!data) {
      return toast.error("Preencha o formulário");
    }
    api
      .post("/groups/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => toast.success("Grupo adicionado com sucesso"))
      .catch((err) => console.log(err));
  };

  return (
    <NewGroup.Provider value={{ AddNewGroup }}>{children}</NewGroup.Provider>
  );
};
export const useAddNewGroup = () => useContext(NewGroup);
