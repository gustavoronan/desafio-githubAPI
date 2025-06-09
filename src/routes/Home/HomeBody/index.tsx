import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";
export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30">
            <h2>Desafio GitHub - API</h2>
            <p>DevSuperior - Escola de programação</p>
          </div>
          <div className="dflex mt30">
            <Link to="/search">
              <Button text="Começar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
