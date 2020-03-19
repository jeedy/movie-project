import React, { Component, useState, useEffect } from "react";
import "App.css";
import Header from "header/header";
import MoveList from "movie-list/movie-list";


import { data } from "data";

function Home(props) {

  const [headerMessage, setHeaderMessage] = useState('영화 소개 프로젝트');
  const [movieData, setMovieData] = useState(data);

  useEffect(() => {
    console.log('Home rendering done.(componentDidMount, componentDidUpdate)');
    return ()=>{
      console.log('Home redering unmount(componentWillUnmount)')
    }
  }, []);

  const chageHeaderMessage = text => {
    console.log(text);
    setHeaderMessage(text);
  }

  console.log("Home rendering..");
  return (
    <div className="App">
      <Header headerMessage={headerMessage} />
      <MoveList movieData={movieData} onChageHeaderMessage={chageHeaderMessage} />
    </div>
  )
}

// class Home extends Component {
//   state = {
//     headerMessage: "영화 소개 프로젝트",
//     movieData: data
//   };
//   componentDidMount(){
//     console.log('Home rendering done.(componentDidMount)');
//   }

//   componentDidUpdate(){
//     console.log('Home rendering done.( componentDidUpdate)');
//   }

//   componentWillUnmount(){
//     console.log('Home redering unmount(componentWillUnmount)')
//   }

//   chageHeaderMessage = text => {
//     console.log(text);
//     this.setState({headerMessage: text});
//   }

//   render() {
//     console.log("Home rendering..");
//     return (
//       <div className="App">
//         <Header headerMessage={this.state.headerMessage} />
//         <MoveList movieData={this.state.movieData} onChageHeaderMessage={this.chageHeaderMessage} />
//       </div>
//     );
//   }
// }

export default Home;