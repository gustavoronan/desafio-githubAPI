import { useState } from "react";
import Button from "../Button";
import "./styles.css";
import { UserDTO } from "../../models/user";
import { findUser } from "../../services/user-service";
import UserCard from "../UserCard";

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

  const [hasSearched, setHasSearched] = useState(false);
  const [user, setUser] = useState<UserDTO>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    findUser(formData.userName)
    .then((response) => {
      setUser(response.data);
      setHasSearched(true);
      })
      .catch((error) => {
        setUser(undefined);
        console.log(error.response.data);
      });
  }

  return (
    <>
      <div className="card mb54">
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

      {hasSearched ? (
        user ? (
          <UserCard user={user} />
        ) : (
          <h2>Erro ao buscar usuário</h2>
        )
      ) : (
        <></> 
      )}
    </>
  );
}
