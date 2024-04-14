import "./Home.css";
import { useState, useEffect } from "react";

const url = "https://localhost:7086/api/Contato";

const Home = () => {
  const [contato, setContato] = useState([]);
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setContato(data);
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contato = {
      nome,
      tel,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(contato),
    });

    const contatoAdicionado = await response.json();

    setContato((prevContato) => [...prevContato, contatoAdicionado]);

    setNome("");
    setTel("");
  };

  return (
    <div className="divhome">
      <h1 className="h1home">Contatos</h1>
      <table className="tablehome">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {contato.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.nome}</td>
              <td>{contato.tel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="addcontact">
        <form className="formadd" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              className="inputadd"
              type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Telefone:
            <input
              className="inputadd"
              type="text"
              value={tel}
              name="telefone"
              onChange={(e) => setTel(e.target.value)}
            />
          </label>
          <input className="inputbutton" type="submit" value="adicionar" />
        </form>
      </div>
    </div>
  );
};

export default Home;
