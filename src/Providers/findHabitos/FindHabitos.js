import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

//receber a criação dos hábitos
//receber a atualização dos habitos
//receber tolken do usuário

const findHabitsContext = createContext();
export const FindHabitsProvider = ({children}) => {
    const [findHabits, setFindHabits] = useState([]);
    
    useEffect(()=> {
        axios.get("https://kabit-api.herokuapp.com/habits/personal/")
        .then(response => setFindHabits(response.data))
        .catch(err => alert(err + "not found"))
    }, [])
    
    return (
        <findHabitsContext.Provider value={{findHabits}}>
            {children}
        </findHabitsContext.Provider>
    )
}


export const useFindHabits = () => useContext(findHabitsContext)