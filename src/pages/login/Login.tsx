import type { FC, FormEvent } from "react";
import "./Login.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";

const Login: FC = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return (
    <main className="login">
      <section className="login-section">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-form__title">Log In</h2>
          <p className="login-form__subtitle">For buying drinks and beverages. Login first, please.</p>
          <InputText type="text" label="Email" placeholder="Your email..." />
          <InputText type="password" label="Password" placeholder="Your password..." />
          <Button view="accent" onClick={() => {}}>
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
