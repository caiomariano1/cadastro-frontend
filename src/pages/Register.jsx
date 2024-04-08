import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Register = () => {
  const handleClickRegister = (values) => {
    console.log(values);
    validationRegister.isValid(values).then((valid) => {
      if (valid) {
        <Link to="/"> página de Login</Link>;
      }
    });
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
            <label htmlFor="email">Email</label>
            <Field
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
            <label htmlFor="password">Senha</label>
            <Field
              name="password"
              className="form-field"
              placeholder="Digite sua senha..."
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
              name="confirmPassword"
              className="form-field"
              placeholder="Digite sua senha ..."
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
