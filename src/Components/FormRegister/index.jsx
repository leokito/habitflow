import { TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const FormRegister = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ username, password, email }) => {
    const user = { username, password, email };
    axios
      .post("https://kabit-api.herokuapp.com/users/", user)
      .then((res) => {
        toast.success("Sucesso ao criar a conta");
        <Redirect to="login" />;
      })
      .catch((err) => toast.error("Erro ao criar a conta"));
  };

  return (
    <S.ContainerPage>
      <S.ContainerPurple>
        <h1>Habitflow</h1>
      </S.ContainerPurple>
      <form onSubmit={handleSubmit(handleForm)}>
        <S.ContainerGradiente>
          <S.ContainerForm>
            <h1>Crie sua conta</h1>
            <TextField
              label="Nome do usuário"
              variant="outlined"
              size="small"
              margin="normal"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              label="Digite seu e-mail"
              variant="outlined"
              size="small"
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Digite sua senha"
              variant="outlined"
              size="small"
              type="password"
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label="Confirme sua senha"
              variant="outlined"
              size="small"
              color="primary"
              type="password"
              margin="normal"
              {...register("passwordConfirm")}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
            />

            <S.Button type="submit">Cadastre-se</S.Button>
            <p>
              Já possui uma conta? <Link to="/login">Click aqui</Link>.
            </p>
          </S.ContainerForm>
        </S.ContainerGradiente>
      </form>
    </S.ContainerPage>
  );
};

export default FormRegister;
