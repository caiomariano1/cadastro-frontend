import "./Register.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background-image.jpg";
import { useAuth } from "../../hooks/useAuth";
// import * as yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import Logo from "../../assets/contato-logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuth("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais");
      return;
    }
    // else if (password.length < 6)
    //   setError(
    //     <>
    //       A senha deve conter pelo menos <br /> 6 caracteres
    //     </>
    //   );

    const response = await createUser(user);

    console.log(response);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  // const handleClickRegister = async (values) => {
  //   console.log(values);
  //   const valid = await validationRegister.isValid(values);
  //   if (valid) {
  //     navigate("/");
  //   }
  // };
  // const validationRegister = yup.object().shape({
  //   email: yup
  //     .string()
  //     .email("Não é um email")
  //     .required("É necessário preencher este campo"),
  //   password: yup
  //     .string()
  //     .min(8, "A senha deve ter pelo menos 8 caracteres")
  //     .required("É necessário preencher este campo"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
  //     .required("É necessário preencher este campo"),
  // });

  // const initialValues = {
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // };

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
          {/* <img
            className="logo-login"
            src={Logo}
            alt=""
            style={{ width: "160px" }}
          /> */}
          {/* <h1 className="h1-header-login">Login</h1> */}
          <h2
            className="h2-header-login"
            style={{ fontWeight: "600", color: "#447ce2" }}
          >
            Preencha os campos abaixo <br /> para efetuar o Cadastro
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
            <label>
              <span className="span-label">Confirmação de senha</span>
              <input
                className="form-field"
                type="password"
                name="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            {!loading && (
              <button className="btn-login" type="submit">
                Entrar
              </button>
            )}
            {loading && (
              <button className="btn-login" disabled>
                Aguarde...
              </button>
            )}
            {error && <p className="error-auth">{error}</p>}
          </form>

          <p className="p-login">
            Já possui uma conta?
            <Link className="link-login" to="/">
              {" "}
              Entre
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <Formik
            initialValues={initialValues}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  className="form-field"
                  // placeholder="Digite seu email..."
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Senha</label>
                <Field
                  id="password"
                  name="password"
                  className="form-field"
                  // placeholder="Digite sua senha..."
                  autoComplete="off"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Confirmação de Senha</label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-field"
                  // placeholder="Digite sua senha ..."
                  autoComplete="off"
                />
                <ErrorMessage
                  component="span"
                  name="confirmPassword"
                  className="form-error"
                />
              </div>
              <button className="btn-login" type="submit">
                Entrar
              </button>
            </Form>
          </Formik> */
}
