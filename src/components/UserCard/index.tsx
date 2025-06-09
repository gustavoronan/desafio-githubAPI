import { UserDTO } from "../../models/user";
import "./styles.css";

type Props = {
  user: UserDTO;
};

export default function UserCard({ user }: Props) {
  return (
    <>
      <div className="card user-card">
        <img src={user.avatar_url} className="user-avatar"/>
        <div className="info">
          <h2>Informações</h2>
          <div className="user-info">
            <p>
              <strong>Perfil:</strong> <a href={user.url}>{user.url}</a>
            </p>
          </div>

          <div className="user-info">
            <p>
              <strong>Seguidores:</strong> {user.followers}
            </p>
          </div>

          <div className="user-info">
            <p>
              <strong>Localidade:</strong> {user.location}
            </p>
          </div>

          <div className="user-info">
            <p>
              <strong>Nome:</strong> {user.login}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
