import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const FormLogin = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ username, password }) => {
    const user = { username, password };
    axios
      .post("https://kabit-api.herokuapp.com/sessions/", user)
      .then((res) => {
        toast.success("Sucesso ao logar");
        console.log(res);
        // const { token } = res.data.access;
        // localStorage.setItem("token", token);
        localStorage.setItem("token", res.data.access);
        console.log(res.data.access);

        return <Redirect to="home" />;
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
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

        <Button type="submit" variant="contained" color="primary">
          Entrar
        </Button>
        <p>
          Não possui uma conta? <Link to="/cadastro">Click aqui</Link>.
        </p>
      </S.ContainerForm>
    </form>
  );
};

export default FormLogin;
