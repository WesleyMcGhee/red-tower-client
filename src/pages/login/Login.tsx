import { AuthInput } from "../../componenets/authInput/AuthInput.component";
import { Header } from "../../componenets/header/Header.component";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <AuthInput type="login" />
    </div>
  );
}
