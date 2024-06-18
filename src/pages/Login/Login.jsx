import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axiosInstance from "../../Services/AxiosConfig";
import backgroundImage from "../../assets/background-image.jpg";
import Logo from "../../assets/contato-logo.svg";
import backButton from "../../assets/back-button.svg";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axiosInstance.post("/usuario/login", {
        email,
        password,
      });

      const token = response.data.token;

      if (token) {
        login(token);
        navigate("/");
      } else {
        setError("Token não recebido.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError(error.message);
    }
  };

  return (
    <div className="main-conteiner">
      <div className="header-login"></div>
      <div className="conteiner">
        <div className="bg-img">
          <img
            src={backgroundImage}
            alt=""
            style={{
              width: "25vw",
              height: "calc(70vh + 4px)",
              paddingTop: "4px",
            }}
          />
        </div>
        <div className="login-right">
          <Link className="back-btn-login" to="/">
            <img
              src={backButton}
              alt="botão de voltar"
              style={{ width: "15px" }}
            />
          </Link>
          <img
            className="logo-login"
            src={Logo}
            alt=""
            style={{ width: "160px" }}
          />
          <h2 className="h2-header-login">
            Preencha os campos abaixo <br /> para efetuar o login
          </h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="label-none">
              <span className="span-label">Email</span>
              <input
                className="form-field"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span className="span-label">Senha</span>
              <input
                className="form-field"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="btn-login" type="submit">
              Entrar
            </button>
            {error && <p className="error-auth">{error}</p>}
          </form>
          <p className="p-login">
            Não possui uma conta?
            <Link className="link-login" to="/register">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
