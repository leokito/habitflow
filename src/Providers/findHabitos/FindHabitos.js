import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "../auth/Auth";
import { useAddHabit } from "../addHabitos/AddHabitos";

const findHabitsContext = createContext();

export const FindHabitsProvider = ({children}) => {

    const [findHabits, setFindHabits] = useState([]);
    const { userID } = useAuth();
    const { newHabbit } = useAddHabit();

    useEffect(()=> {
        axios
        .get("https://kabit-api.herokuapp.com/habits/personal/", {
            headers: {
                Authorization: `Bearer ${userID}`,
            },
        })
        .then(response => setFindHabits([...newHabbit, response.data.results]))
        .catch(err => alert(err + "not found"))

    }, [])
    
    return (
        <findHabitsContext.Provider value={{findHabits, newHabbit}}>
            {children}
        </findHabitsContext.Provider>
    )
}

export const useFindHabits = () => useContext(findHabitsContext)