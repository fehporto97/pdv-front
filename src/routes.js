import React from "react";

import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";

// import PropTypes from "prop-types";

import history from "./utils/history";

import HomePage from "./pages/homepage";
import ListFornecedor from "./pages/ListFornecedor";
import FormFornecedor from "./pages/FormFornecedor";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fornecedor" component={ListFornecedor} />
        <Route exact path="/form-fornecedor" component={FormFornecedor} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
