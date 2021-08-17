import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as S from "./styles";
import { useAuth } from "../../Providers/auth/Auth";
import { useState } from "react";

const FormLogin = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    // .matches(
    //   /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial."
    // ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();

  const handleForm = (data) => {
    // const user = { username, password };
    // api
    //   .post("/sessions/", user)
    //   .then((res) => {
    //     toast.success("Sucesso ao logar");
    //     console.log(res);
    // const { token } = res.data.access;
    // localStorage.setItem("token", token);
    // localStorage.setItem("token", res.data.access);
    // console.log(res.data.access);
    signIn(data, setError, history);
    // return <Redirect to="home" />;
  };
  // };
  return (
    <S.ContainerPage>
      <S.ContainerPurple>
        <h1>Habitflow</h1>
      </S.ContainerPurple>
      <form onSubmit={handleSubmit(handleForm)}>
        <S.ContainerGradiente>
          <S.ContainerForm>
            <h1>Acesse sua conta</h1>
            <TextField
              label="Digite seu nome"
              variant="outlined"
              size="small"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="Digite sua senha"
              variant="outlined"
              size="small"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <S.Button
              onClick={() => history.push("/home")}
              type="submit"
              variant="contained"
              color="primary"
            >
              Entrar
            </S.Button>
            <p>
              Não possui uma conta? <Link to="/cadastro">Click aqui</Link>.
            </p>
          </S.ContainerForm>
        </S.ContainerGradiente>
      </form>
    </S.ContainerPage>
  );
};
export default FormLogin;
