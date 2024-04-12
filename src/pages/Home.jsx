import "./Home.css";
import { useState, useEffect } from "react";

const url = "https://localhost:7086/api/Contato";

const Home = () => {
  const [contato, setContato] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setContato(data);
    }

    fetchData();
  }, []);

  return (
    <div className="divhome">
      <h1 className="h1home">Home</h1>
      <ul className="ulhome">
        {contato.map((contato) => (
          <li className="lihome" key={contato.id}>
            {contato.nome} - {contato.tel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
