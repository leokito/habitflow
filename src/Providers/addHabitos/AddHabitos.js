import { useState, createContext, useContext } from "react";
import api from "../../Services/api";

const NewHabit = createContext()

export const HabitsProvider = () => {
    const [newHabit, setNewHabit] = useState("")
    
    const addNewHabit = () => {
        api
        .post('/habits/personal',)
    }

}
