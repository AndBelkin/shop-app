import "./Login.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";
import { handleFormSubmit } from "../../utils/forms.utils";
import { useUsersStore } from "../../stores/users.store";
import { Link, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type FC } from "react";
import { useAppStore } from "../../stores/app.store";

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const handleButtonClick = () => {
    if (email && password) {
      const user = useUsersStore.getState().users.find((user) => user.email === email);
      if (user) {
        if (user.password === password) {
          useAppStore.getState().login(user);
          navigate("/");
        } else {
          console.log("The password does not match the account.");
        }
      } else {
        console.log("The user with this email address is not registered!");
      }
    }
  };
  return (
    <main className="login">
      <section className="login-section">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-form__title">Sigh in to Coffee Shop</h2>
          <p className="login-form__subtitle">For buying drinks and beverages. Login first, please.</p>
          <InputText
            type="text"
            name="email"
            label="Email"
            placeholder="Your email..."
            value={email}
            onChange={handleEmailChange}
            onClear={() => setEmail("")}
          />
          <InputText
            type="password"
            name="password"
            label="Password"
            placeholder="Your password..."
            value={password}
            onChange={handlePasswordChange}
            onClear={() => setPassword("")}
            minLength={6}
            maxLength={30}
          />
          <Button view="accent" onClick={handleButtonClick}>
            Log In
          </Button>
          <Button view="none" onClick={() => {}}>
            Forgot password
          </Button>
          <p style={{ textAlign: "center", fontSize: ".75rem" }}>
            Don't have an account yet? <Link to="/register"> Register now</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
