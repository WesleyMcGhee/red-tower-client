import { AuthInput } from "../../componenets/authInput/AuthInput.component";
import { Header } from "../../componenets/header/Header.component";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <Header />
      <div className="auth-con" style={{ marginTop: "23vh" }}>
        <AuthInput type="signup" />
      </div>
    </div>
  );
}
