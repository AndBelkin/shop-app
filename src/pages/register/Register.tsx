import { useState, type ChangeEvent, type FC } from "react";
import "./Register.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";
import { handleFormSubmit } from "../../utils/forms.utils";
import { useUsersStore } from "../../stores/users.store";
import { Link } from "react-router-dom";

const Register: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleButtonClick = () => {
    if (email && password) {
      if (!useUsersStore.getState().checkUserIsExist(email)) {
        useUsersStore.getState().addUser(email, password);
        console.log(`User [${email}, ${password}] created!`);
      } else {
        console.log("The user with this email address has already been registered!");
      }
    } else {
      console.log("Required fields are not filled in!");
    }
  };
  return (
    <main className="register">
      <section className="register-section">
        <form className="register-form" onSubmit={handleFormSubmit}>
          <h2 className="register-form__title">Get started with Coffee Shop</h2>
          <p>Thanks to registration, you will receive the following features and benefits:</p>
          <ul style={{ paddingLeft: "1rem", fontSize: ".85rem" }}>
            <li>make orders with door-to-door delivery;</li>
            <li>keep a history of your orders and preferences;</li>
            <li>get the opportunity to participate in all bonus programs.</li>
          </ul>
          <InputText
            type="email"
            name="email"
            label="Email"
            placeholder="Your email..."
            value={email}
            onChange={handleEmailChange}
            onClear={() => setEmail("")}
          />
          <InputText
            type="password"
            name="email"
            label="Password"
            placeholder="Your password..."
            value={password}
            onChange={handlePasswordChange}
            onClear={() => setPassword("")}
            minLength={6}
            maxLength={30}
          />
          <p style={{ fontSize: ".75rem", textAlign: "center" }}>
            By clicking Continue or registering through a third party you accept the Coffee Shop <br />
            <Link to="/terms">Terms of Use and acknowledge the Privacy Statement and Cookie Policy</Link>.
          </p>
          <Button view="accent" onClick={handleButtonClick}>
            Continue
          </Button>
          <p style={{ textAlign: "center", fontSize: ".75rem" }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;
