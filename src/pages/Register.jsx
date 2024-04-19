import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const handleClickRegister = async (values) => {
    console.log(values);
    const valid = await validationRegister.isValid(values);
    if (valid) {
      // window.location.href = "http://localhost:5173/";
      navigate("/");
    }
  };
  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("É necessário preencher este campo"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("É necessário preencher este campo"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
      .required("É necessário preencher este campo"),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="conteiner">
      <h1>Cadastro</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              className="form-field"
              placeholder="Digite seu email..."
            />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="password">Senha:</label>
            <Field
              id="password"
              name="password"
              className="form-field"
              placeholder="Digite sua senha..."
              autoComplete="off"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="password">Confirmação de Senha:</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              className="form-field"
              placeholder="Digite sua senha ..."
              autoComplete="off"
            />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Avançar
          </button>
        </Form>
      </Formik>
      <p>
        Voltar para
        {/* <a href="#">Cadastre-se</a> */}
        <Link to="/"> página de Login</Link>
      </p>
    </div>
  );
};

export default Register;
