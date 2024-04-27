export interface IAuthInputProps {
  type: "login" | "signup";
}

export interface ISignUpState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginState {
  username: string;
  password: string;
}
