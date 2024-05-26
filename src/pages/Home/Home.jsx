import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import axiosInstance from "../../Services/AxiosConfig";
// import { useAuthvalue } from "../../context/AuthContext";
import backgroundHome from "../../assets/background-home.jpg";

const Home = () => {
  // const { user } = useAuthvalue();
  const [contato, setContato] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      console.log("Token encontrado");
    } else {
      console.log("Token não encontrado");
    }

    axiosInstance
      .get("/contato")
      .then((response) => {
        setData(response.data);
        setContato(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar dados protegidos:", error);
        setContato([]);
      });
  }, []);

  const deleteContact = (id) => {
    axiosInstance
      .delete(`/contato/${id}`)
      .then(() => {
        setContato(contato.filter((c) => c.id !== id));
      })
      .catch((error) => {
        console.log("Erro ao deletar contato:", error);
      });
  };

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
        {/* {user && ( */}
        <div className="btn-add">
          <Link to="/post">
            <button>Adicionar +</button>
          </Link>
        </div>
        {/* )} */}
        {/* {!user && ( */}
        {/* <>
          <img
            className="background-home"
            src={backgroundHome}
            alt="imagem de um telefone azul"
          />
          <h1 className="no-user">
            Crie uma conta para adicionar os seus contatos
          </h1>
        </> */}
        {/* )} */}
      </main>
    </div>
  );
};

export default Home;
