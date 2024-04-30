import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import backgroundImage from "../assets/background-image.jpg";
import Logo from "../assets/contato-logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const handleClickLogin = async (values) => {
    console.log(values);
    const valid = await validationLogin.isValid(values);
    // if (valid) {
    //   window.location.href = "https://localhost:7086/swagger/index.html";
    // }
    if (valid) {
      navigate("home");
    }
  };
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("É necessário preencher este campo"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("É necessário preencher este campo"),
  });

  const initialValues = {
    email: "",
    password: "",
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
          <img
            className="logo-login"
            src={Logo}
            alt=""
            style={{ width: "160px" }}
          />
          {/* <h1 className="h1-header-login">Login</h1> */}
          <h2 className="h2-header-login">
            Preencha os campos abaixo <br /> para efetuar o login
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
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
              <button className="btn-login" type="submit">
                {/* <a href="https://localhost:7086/swagger/index.html">Entrar</a> */}
                Entrar
              </button>
            </Form>
          </Formik>
          <p className="p-login">
            Não possui uma conta?
            {/* <a href="#">Cadastre-se</a> */}
            <Link className="link-login" to="/register">
              {" "}
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>

    // <div className="conteiner">
    //   <h1>Login</h1>
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={handleClickLogin}
    //     validationSchema={validationLogin}
    //   >
    //     <Form className="login-form">
    //       <div className="login-form-group">
    //         <label htmlFor="email">Email:</label>
    //         <Field
    //           id="email"
    //           name="email"
    //           className="form-field"
    //           placeholder="Digite seu email..."
    //         />
    //         <ErrorMessage
    //           component="span"
    //           name="email"
    //           className="form-error"
    //         />
    //       </div>

    //       <div className="login-form-group">
    //         <label htmlFor="password">Senha:</label>
    //         <Field
    //           id="password"
    //           name="password"
    //           className="form-field"
    //           placeholder="Digite sua senha..."
    //           autoComplete="off"
    //         />
    //         <ErrorMessage
    //           component="span"
    //           name="password"
    //           className="form-error"
    //         />
    //       </div>

    //       <button className="button" type="submit">
    //         {/* <a href="https://localhost:7086/swagger/index.html">Entrar</a> */}
    //         Entrar
    //       </button>
    //     </Form>
    //   </Formik>
    //   <p>
    //     Não possui uma conta?
    //     {/* <a href="#">Cadastre-se</a> */}
    //     <Link to="/register"> Cadastre-se</Link>
    //   </p>
    // </div>
  );
};

export default Login;
