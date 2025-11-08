import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import "./Register.css";
import Button from "../../components/button/Button";
import InputText from "../../components/inputText/InputText";

const Register: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
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
          <InputText type="text" label="Username" placeholder="Your username..." />
          <InputText type="email" label="Email" placeholder="Your email..." />
          <InputText type="password" label="Password" placeholder="Your password..." />
          <Button view="accent" onClick={() => {}}>
            Register
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Register;
