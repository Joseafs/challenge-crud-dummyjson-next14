import * as Yup from 'yup';

const wordRequiredLogin = (value: string) => `Por favor, insira ${value}!`;

export const userLoginValidationShema = Yup.object().shape({
  password: Yup.string().required(wordRequiredLogin('sua senha')),
  username: Yup.string().required(wordRequiredLogin('seu usuário')),
});
