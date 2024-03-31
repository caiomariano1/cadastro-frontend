import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const handleClickLogin = (values) => console.log(values);
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

  return (
    <div className="conteiner">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
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

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
