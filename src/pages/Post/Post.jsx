import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./Post.css";

const validationPost = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  tel: yup.string().required("Telefone é obrigatório"),
});

const Post = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addContact = (data) =>
    axios
      .post("https://localhost:7086/api/Contato", data)
      .then(() => {
        console.log("Funcionou");
        navigate("/home");
      })
      .catch(() => {
        console.log("Não funcionou");
      });

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Criar contato</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addContact)}>
              <div className="fields">
                <label>Nome</label>
                <input type="text" name="nome" {...register("nome")} />
                <p className="error-message">{errors.nome?.message}</p>
              </div>

              <div className="fields">
                <label>Telefone</label>
                <input type="text" name="tel" {...register("tel")} />
                <p className="error-message">{errors.tel?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
