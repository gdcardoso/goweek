import React, { Component } from "react";
import api from "../services/api";
import socket from "socket.io-client";

import twitterLogo from "../twitter.svg";
import "./Timeline.css";

import Tweet from "../components/Tweet";

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ""
  };

  async componentDidMount() {
    this.subscribeToEvents(); // vai ser rederizada assim que for montado na tela
    const response = await api.get("tweets");

    this.setState({ tweets: response.data });
  }

  subscribeToEvents = () => {
    const io = socket("http://localhost:3000");

    io.on("tweet", data => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });

    io.on("like", data => {
      this.setState({
        tweets: this.state.tweets.map(
          tweet => (tweet._id === data._id ? data : tweet)
        )
      });
    });
  };

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return; // se nao for 13 (enter) para a função

    const content = this.state.newTweet; //conteudo do tweet
    const author = localStorage.getItem("@GoTwitter:username"); // pega do local storage criado no Login.js

    // console.log(content, author);

    await api.post("tweets", { content, author });

    this.setState({ newTweet: "" }); // zera o valor da textarea
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo"
          />
        </form>

        <ul className="tweet-list">
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    );
  }
}
