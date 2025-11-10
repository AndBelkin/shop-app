import { useState, type FC } from "react";
import "./Profile.css";
import { useUsersStore } from "../../stores/users.store";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/inputText/InputText";
import Button from "../../components/button/Button";
import { useAppStore } from "../../stores/app.store";

const Profile: FC = () => {
  const navigate = useNavigate();
  const userID = useParams().id;
  const user = useUsersStore((state) => state.users.find((user) => user.id === userID));
  const [firstName, setFirstName] = useState<string>(user?.firstName || "");
  const [lastName, setLastName] = useState<string>(user?.lastName || "");
  const [phone, setPhone] = useState<string>(user?.phone || "");
  if (!user) return false;
  const createdAt = new Date(user.createdAt).toLocaleDateString();
  const handleClickButton = () => {
    useUsersStore.getState().updateUser(user.id, { firstName, lastName, phone });
    const updatedUser = useUsersStore.getState().getUserById(user.id);
    if (updatedUser) useAppStore.getState().updateUser(updatedUser);
    navigate("/");
  };
  return (
    <main className="profile">
      <section className="profile-info">
        <nav>
          <Link to="..">&#8592;Go to menu</Link>
        </nav>
        <h2>Profile information</h2>
        <img src={user?.avatarUrl} />
        <InputText
          type="text"
          name="first-name"
          label="First name:"
          placeholder="Not specified. Enter it here..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputText
          type="text"
          name="last-name"
          label="Last name:"
          placeholder="Not specified. Enter it here..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>Email address:</p>
        <p>{user.email}</p>
        <InputText
          type="tel"
          name="phone"
          label="Phone number:"
          placeholder="Not specified. Enter it here..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Created date: {createdAt}</p>
        <Button view="accent" onClick={handleClickButton}>
          Save
        </Button>
      </section>
    </main>
  );
};

export default Profile;
