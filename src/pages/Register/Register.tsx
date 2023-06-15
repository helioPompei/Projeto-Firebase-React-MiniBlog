import * as S from "./Register.styles";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Register = () => {
  const { register, handleSubmit } = useForm();

  return (
    <S.RegisterContainer>
      <h1>Cadastre-se para postar</h1>
      <S.RegisterForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="Digite seu E-mail..."
            {...register("email")}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
        </label>

        <label>
          <span>Confirm Password:</span>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
        </label>

        <button type="submit" value="Enviar">
          Enviar
        </button>
      </S.RegisterForm>
    </S.RegisterContainer>
  );
};

export default Register;
