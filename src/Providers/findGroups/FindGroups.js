import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const FindGroup = createContext();

export const FindGroupProvider = ({ children }) => {
  const [findGroups, setFindGroups] = useState();

  useEffect(() => {
    api
      .get(`/groups/`)
      .then((response) => setFindGroups(response.data.results))
      .catch((err) => toast.error("Grupo não encontrado!"));
  }, []);

  return (
    <FindGroup.Provider value={{ findGroups, setFindGroups }}>
      {children}
    </FindGroup.Provider>
  );
};

export const useGroupList = () => {
  const context = useContext(FindGroup);

  const { findGroups, setFindGroups } = context;

  return {
    findGroups,
    setFindGroups,
  };
};
