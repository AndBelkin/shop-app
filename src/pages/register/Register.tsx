import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import "./Register.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";

const Register: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleButtonClick = () => console.log(selectedFile, previewUrl, username, email, password);
  return (
    <main className="register">
      <section className="register-section">
        <form className="register-form" onSubmit={handleFormSubmit}>
          <h2 className="register-form__title">Register</h2>
          <div className="register-form-select-profile-img">
            {!previewUrl && <p>Select your profile photo</p>}
            {previewUrl && <img src={previewUrl} alt="" className="register-form__profile" />}
            <input type="file" accept="image/*" src="profile-img" onChange={handleFileChange} />
          </div>
          <InputText
            type="text"
            name="username"
            label="Username"
            placeholder="Your username..."
            value={username}
            onChange={handleUsernameChange}
            onClear={() => setUsername("")}
            minLength={6}
            maxLength={20}
          />
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
          <Button view="accent" onClick={handleButtonClick}>
            Register
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Register;
