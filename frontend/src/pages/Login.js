import React, { Component } from "react";

import twitterLogo from "../twitter.svg";
import "./Login.css";

export default class Login extends Component {
  state = {
    // sempre a variavel for alterada sera renderizada automaticamente
    username: ""
  };

  handleSubmit = e => {
    // para evitar que no submit ele tente redirecionar
    e.preventDefault();

    const { username } = this.state; //busca o username que tem dentro do state

    if (!username.length) return; // para de executar a funcao se nao tiver username dentro do state

    localStorage.setItem("@GoTwitter:username", username); //acessa o storage do navegador e salvando a informacao la dentro

    this.props.history.push("/timeline"); //endereço para onde enviar o usuário
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
