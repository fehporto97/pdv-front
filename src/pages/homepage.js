import React from "react";

// import PropTypes from "prop-types";

import history from "../utils/history";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>

      <button type="button" onClick={() => history.push("/form-fornecedor")}>
        {" "}
        Ir para form fornecedor{" "}
      </button>
      <button type="button" onClick={() => history.push("/fornecedor")}>
        {" "}
        Ir para lista fornecedor{" "}
      </button>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
