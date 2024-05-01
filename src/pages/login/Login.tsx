import { AuthInput } from "../../componenets/authInput/AuthInput.component";
import { Header } from "../../componenets/header/Header.component";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="auth-con" style={{ marginTop: "30vh" }}>
        <AuthInput type="login" />
      </div>
    </div>
  );
}
