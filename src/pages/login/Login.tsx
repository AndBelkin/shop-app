import { useState, type ChangeEvent, type FC } from "react";
import "./Login.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";
import { handleFormSubmit } from "../../utils/forms.utils";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const handleButtonClick = () => console.log({ email, password });
  return (
    <main className="login">
      <section className="login-section">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-form__title">Log In</h2>
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
        </form>
      </section>
    </main>
  );
};

export default Login;
