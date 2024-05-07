import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import axios from "axios";
import { useAuthvalue } from "../../context/AuthContext";
import backgroundHome from "../../assets/background-home.jpg";

const Home = () => {
  const { user } = useAuthvalue();
  const [contato, setContato] = useState([]);

  useEffect(() => {
    user
      ? axios
          .get("https://localhost:7086/api/Contato")
          .then((response) => {
            setContato(response.data);
          })
          .catch(() => {
            console.log("deu ruim");
          })
      : setContato([]);
  }, [user]);

  function deleteContact(id) {
    axios.delete(`https://localhost:7086/api/Contato/${id}`);
    setContato(contato.filter((contato) => contato.id !== id));
  }

  return (
    <div className="divhome">
      <HeaderHome />

      <main className="main-home">
        <div className="cards">
          {contato.map((contato, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{contato.nome}</h2>
                </header>
                <div className="line"></div>
                <p>{contato.tel}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${contato.id}` }}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deleteContact(contato.id)}>
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {user && (
          <div className="btn-add">
            <Link to="/post">
              <button>Adicionar +</button>
            </Link>
          </div>
        )}
        {!user && (
          <>
            <img
              className="background-home"
              src={backgroundHome}
              alt="imagem de um telefone azul"
            />
            <h1 className="no-user">
              Crie uma conta para adicionar os seus contatos
            </h1>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
