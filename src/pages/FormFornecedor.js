import React, { useState } from "react";

// import PropTypes from "prop-types";

import axios from "axios";
import { Card, CardContent, TextField, Button } from "@material-ui/core";

import history from "../utils/history";

const CardFor = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    cpf: "",
    address: "",
    state: "",
    city: "",
  });

  const handleChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3334/users", state);

    console.log(response);
  };

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#00ccff" }}>
      <h1>Form fornecedores</h1>
      <button type="button" onClick={() => history.push("/")}>
        {" "}
        voltar{" "}
      </button>

      <div style={{ height: "15%", textAlign: "center" }}>
        Cadastro Fornecedor
      </div>
      <Card style={{ backgroundColor: "#F2F2F2" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              onChange={(e) => handleChange("name", e.target.value)}
              style={{ margin: "5px" }}
              label="Nome"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ margin: "5px" }}
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("phone", e.target.value)}
              style={{ margin: "5px" }}
              label="Telefone"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("cnpj", e.target.value)}
              style={{ margin: "5px" }}
              label="CPNJ"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("cpf", e.target.value)}
              style={{ margin: "5px" }}
              label="Cep"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("address", e.target.value)}
              style={{ margin: "5px" }}
              label="Endereço"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("city", e.target.value)}
              style={{ margin: "5px" }}
              label="Cidade"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => handleChange("state", e.target.value)}
              style={{ margin: "5px" }}
              label="Estado"
              variant="outlined"
            />
            <div style={{ textAlign: "center" }}>
              <Button
                style={{ marginTop: "20px" }}
                variant="outlined"
                color="primary"
                type="submit"
              >
                Salvar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

CardFor.propTypes = {};

export default CardFor;
