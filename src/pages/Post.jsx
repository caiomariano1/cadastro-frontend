import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useForm } from "react-hook-form";
import "./Post.css";

const Post = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addContact = (data) => console.log(data);

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
              </div>

              <div className="fields">
                <label>Telefone</label>
                <input type="text" name="telefone" {...register("telefone")} />
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
