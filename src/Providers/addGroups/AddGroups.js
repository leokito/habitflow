import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";

const NewGroup = createContext();

export const NewGroupProvider = ({ children }) => {
  const { token } = useAuth();

  const AddNewGroup = (data) => {
    console.log(data);
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
