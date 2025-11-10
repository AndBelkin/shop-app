import type { FC } from "react";
import { useAppStore } from "../../stores/app.store";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import "./UserBar.css";

const UserBar: FC = () => {
  const user = useAppStore((state) => state.app.user);
  if (!user) return false;

  const fullUserName = user.firstName ? `${user.firstName} ${user.lastName}` : "Uncknown";
  const handleClickButton = () => useAppStore.getState().logout();
  return (
    <div className="user-bar">
      <img src={user.avatarUrl} />
      <NavLink to={`/profile/${user.id}`}>{fullUserName}</NavLink>
      <Button onClick={handleClickButton}>Log out</Button>
    </div>
  );
};

export default UserBar;
