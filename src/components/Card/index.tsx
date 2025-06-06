import { useState } from "react";
import Button from "../Button";
import "./styles.css";

type Props = {
  title: string;
};

type FormData ={
  userName: string;
}

export default function Card({ title }: Props) {

  const [formData, setFormData] = useState<FormData>({
    userName: ''
  });
  
  function handleInputChange(event: any){
    const value = event.target.value
    const name = event.target.name
    setFormData({...formData, [name]: value})
  }

  return (
    <div className="card">
     <div className="mt30">
         <h2>{title}</h2> 
      </div>
        
      <form className="search-bar">
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
  );
}
