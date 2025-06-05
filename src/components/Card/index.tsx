import Button from "../Button";
import "./styles.css";

type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
        
      <form className="search-bar">
         <input type="text" placeholder="Usuário GitHub" />
      </form>
        <div className="dflex mt30">
            <Button text="Buscar" />
        </div>
    </div>
  );
}
