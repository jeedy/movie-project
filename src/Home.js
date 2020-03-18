import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import MoveList from "./movie-list/movie-list";


import { data } from "./data";

class Home extends Component {
  state = {
    headerMessage: "영화 소개 프로젝트",
    movieData: data
  };

  chageHeaderMessage = text => {
    console.log(text);
    this.setState({headerMessage: text});
  }

  render() {
    console.log("Home rendering..");
    return (
      <div className="App">
        <Header headerMessage={this.state.headerMessage} />
        <MoveList movieData={this.state.movieData} onChageHeaderMessage={this.chageHeaderMessage} />
      </div>
    );
  }
}

export default Home;