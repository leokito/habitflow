import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const FGroup = createContext();

export const FGProvider = ({ children }) => {
  const [findGroups, setFindGroups] = useState();

  useEffect(() => {
    api
      .get(`/groups/`)
      .then((response) => setFindGroups(response.data.results))
      .catch((err) => toast.error("Grupo não encontrado!"));
  }, []);

  return (
    <FGroup.Provider value={{ findGroups, setFindGroups }}>
      {children}
    </FGroup.Provider>
  );
};

export const useGroupList = () => {
  const context = useContext(FGroup);

  const { findGroups, setFindGroups } = context;

  return {
    findGroups,
    setFindGroups,
  };
};
