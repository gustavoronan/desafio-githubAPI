import { useEffect, useState } from "react";
import Button from "../Button";
import "./styles.css";
import axios from "axios";
import { UserDTO } from "../../models/user";
import { BASE_URL } from "../../utils/system";
import { findUser } from "../../services/user-service";

type Props = {
  title: string;
};

type FormData = {
  userName: string;
};

export default function Card({ title }: Props) {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });

  const [user, setUser] = useState<UserDTO>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    findUser(formData.userName).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }

  return (
    <>
      <div className="card">
        <div className="mt30">
          <h2>{title}</h2>
        </div>

        <form onSubmit={handleFormSubmit} className="search-bar">
          <input
            name="userName"
            value={formData.userName}
            type="text"
            placeholder="Usuário GitHub"
            onChange={handleInputChange}
          />
          <div className="dflex mt30 mb54">
            <Button text="Encontrar" type="submit" />
          </div>
        </form>
      </div>

      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" />
          <p>Login: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Location: {user.location}</p>
          <a href={user.url}>
            Perfil: {user.url}
          </a>
        </div>
      )}
    </>
  );
}
