// Global Imports
import { useState } from "react";

// Styles
import "./AuthInput.css";

// Types
import { IAuthInputProps, ILoginState, ISignUpState } from "./AuthInput.types";

function AuthInput({ type }: IAuthInputProps) {
  return (
    <div className="auth-name">
      <h1>{type === "login" ? "Login" : "Sign Up"}</h1>
      {type === "login" ? <SignupInputs /> : <LoginInputs />}
    </div>
  );
}

function SignupInputs() {
  const [input, setInput] = useState<ISignUpState>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          className="input-full"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          className="input-full"
          placeholder="Username"
          name="username"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          className="input-full"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          className="input-full"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" className="input-btn" value="Sign Up!" />
      </form>
    </div>
  );
}

function LoginInputs() {
  const [input, setInput] = useState<ILoginState>({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input-full"
          placeholder="Username"
          name="username"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          className="input-full"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" className="input-btn" value="Login!" />
      </form>
    </div>
  );
}

export { AuthInput };
