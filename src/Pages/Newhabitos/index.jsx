import { useHistory } from "react-router"
import HabitForm from "../../Components/Addhabit"
import { Button } from "../land/style"

const NewHabit = () => {
    const history = useHistory()
return(
    <>
    <h1>Adicione seu hábito</h1>
    <Button onClick={()=> history.push('/home')}>Retornar</Button>
    <HabitForm/>
    </>
)
}

export default NewHabit