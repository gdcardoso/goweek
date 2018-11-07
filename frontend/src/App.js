import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //biblioteca de rotas

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";

class App extends Component {
  render() {
    return (
      // BrowserRouter mostra o caminho da url completo no browser
      // Switch garante que apenas uma rota seja chamada
      // Route indica cada rota da aplicação
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
