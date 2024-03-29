import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const handleClickLogin = (values) => console.log(values);

  return (
    <div className="conteiner">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="email"
              className="form=field"
              placeholder="Digite seu email..."
            />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="password"
              className="form=field"
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
