// import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react";
import { useAuth } from "../../Providers/auth/Auth";
import { useAddHabit } from '../../Providers/addHabitos/AddHabitos';

const HabitForm = () => {

const {userID} = useAuth()
const {newHabit, setNewhabit, AddHabit } = useAddHabit()

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        category:yup.string().required("Campo obrigatório"),
        difficulty: yup.string().required("Campo Obrigatorio"),
        frequency: yup.string().required(),
    });
    // const [userData, setUserData] = useState({})

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    
    const handleForm = (data) => {
       setNewhabit(data)
       console.log(newHabit)
    }

    return (
        <div className="container">
        <form className="form" onSubmit={AddHabit(handleForm)}>
        <div className="formDiv">
        <h2>Formulário de Teste</h2>
        <input className="formInput" type="text" placeholder="Titulo"  {...register("title")} />
        <div className="errorDiv" style={{color: "red"}}>{errors.nickname?.message}</div>
        </div>
        <div className="formDiv">
        <input className="formInput" type="text" placeholder="Categoria"  {...register("category")} />
        <div className="errorDiv" style={{color: "red"}}>{errors.name?.message}</div>
        </div>
        <div className="formDiv">
        <input className="formInput"  type="string" placeholder="Frequência"  {...register("frequency")} />
        <div className="errorDiv" style={{color: "red"}}>{errors.email?.message}</div>
        </div>
        <div className="errorDiv" style={{color: "red"}}>{errors.password?.message}</div>
        <div className="errorDiv" style={{color: "red"}}>{errors.passwordConfirm?.message}</div> 
        <div>
        <div className="selectDiv">
        <label for="difficult">Qual a dificuldade:</label>
        <select className="classe" name="difficult" {...register('difficulty') }> 
            <option value="Muito Fácil">Muito Fácil</option>
            <option value="Normal">Normal</option>
            <option value="Dificil">Difícil</option>
            <option value="Muito Difícil">Muito Difícil</option>
        </select>
        </div>
        </div>
        <div className="btnDiv" >
            <button className="submitBtn" type="submit" >Registrar</button>
        </div>
        </form>
        </div>
    )
}

export default HabitForm