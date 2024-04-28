import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const validationPost = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  tel: yup.string().required("Telefone é obrigatório"),
});

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  useEffect(() => {
    axios.get(`https://localhost:7086/api/Contato/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);

  const addContact = (data) =>
    axios
      .put(`https://localhost:7086/api/Contato/${id}`, data)
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

export default Edit;
