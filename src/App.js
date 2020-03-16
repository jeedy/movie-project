import React, { Component } from "react";
import "./App.css";
import Header from "./header/header";
import MoveList from "./movie-list/movie-list";

import { data } from "./data";

class App extends Component {
  state = {
    headerMessage: "영화 소개 프로젝트",
    movieData: data
  };

  render() {
    console.log("App: render");
    return (
      <div className="App">
        <Header headerMessage={this.state.headerMessage} />
        <MoveList movieData={this.state.movieData} />>
      </div>
    );
  }
}

export default App;
