import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const NewGroup = createContext();

export const NewGroupProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("token") || "");

  const AddNewGroup = (data) => {
    if (!data) {
      return toast.error("Preencha o formulário");
    }
    api
      .post("/groups/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NTgzMzIyLCJqdGkiOiIzNTkxMzJmMmJlM2M0NWFiODRhYzI2MjMwZDVkNjQxYiIsInVzZXJfaWQiOjE5NjF9.x5_KZECg5bX3MA4iVB_0B4rUBQ85fLGAR6VWRP_Tk5s`,
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
