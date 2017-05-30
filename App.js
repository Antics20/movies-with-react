import React, { Component } from 'react';
import SearchMovie from './Components/SearchMovie';
import Movie from './Components/Movie';
import './App.css';
import FilmList from './Components/FilmList';
import {movie} from './Constant/Mov';


class App extends Component {

constructor(props){
super(props);
this.state={
  movie:[]
}
}


  render() {
    return (
      <div className="Movie">
      <div className="App-header">
            <h1>Movies with React</h1>
              </div>


                <p className="App-intro">List of movies</p>

               <FilmList movie={movie}/>
                            </div>
    );
  }
}




export default App;
