// import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
// import { useState } from "react";
import { useAuth } from "../../Providers/auth/Auth";
import { useAddHabit } from '../../Providers/addHabitos/AddHabitos';

const HabitForm = () => {

const {setNewHabit, AddHabit } = useAddHabit()
const {userID} = useAuth()

    const schema = yup.object().shape({
        title: yup.string().required("Por favor, preencha este campo"),
        category:yup.string().required("Por favor, preencha este campo"),
        difficulty: yup.string().required("Por favor, preencha este campo"),
        frequency: yup.string().required("Por favor, preencha este campo"),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    
    const handleForm = (data) => {
        const newData = {...data, achieved: false, how_much_achieved: 0, user: userID}
           setNewHabit(newData)
           AddHabit(newData)
           console.log(userID)
           console.log(newData)
        }
    

    return (
        <div className="container">
        <form className="form" onSubmit={handleSubmit(handleForm)}>
        <div className="formDiv">
        <h2>Formulário de Teste</h2>
        <input className="formInput" type="text" placeholder="Titulo"  {...register("title")} />
        </div>
        <div className="formDiv">
        <input className="formInput" type="text" placeholder="Categoria"  {...register("category")} />
        </div>
        <div className="selectDiv">
        <label for="difficult">Dificuldade:</label>
        <select className="classe" name="difficult" {...register('difficulty') }> 
            <option value="Muito Fácil">Muito Fácil</option>
            <option value="Normal">Normal</option>
            <option value="Dificil">Difícil</option>
            <option value="Muito Difícil">Muito Difícil</option>
        </select>
        </div>
        <div className="formDiv">
        <input className="formInput"  type="string" placeholder="Frequência"  {...register("frequency")} />
        </div>
        <div>
        </div>
        <div className="btnDiv" >
            <button className="submitBtn" type="submit" >Adicionar</button>
        </div>
        </form>
        </div>
    )
}

export default HabitForm