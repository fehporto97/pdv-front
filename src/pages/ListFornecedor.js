import React, { useState, useEffect } from "react";

import axios from "axios";

// import PropTypes from "prop-types";

import history from "../utils/history";

const ListFornecedor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3334/users");

      setData(response.data);
    };

    fetch();
  }, []);

  return (
    <div>
      <h1>Todos fornecedores</h1>
      <button type="button" onClick={() => history.push("/")}>
        {" "}
        voltar{" "}
      </button>

      <ul>
        {data.map(item => <li key={item.id}> {item.name} </li>)}
      </ul>
    </div>
  );
};

ListFornecedor.propTypes = {};

export default ListFornecedor;
