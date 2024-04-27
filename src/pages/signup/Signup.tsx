import { AuthInput } from "../../componenets/authInput/AuthInput.component";
import { Header } from "../../componenets/header/Header.component";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <Header />
      <h1>Signup</h1>
      <AuthInput type="signup" />
    </div>
  );
}
