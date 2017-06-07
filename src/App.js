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
  filtmovie:[]
}
}


componentwillmount(){
  this.setState({
    filtmovie: movie
  })
}
filter(title){
let filtmovie=movie.filt((movi)=>{
    return movi.title.toLowerCase().indexOf(title.toLowerCase())!==-1;
});
this.setState({
  filtmovie:filtmovie
});
}


  render() {
    return (
      <div className="Movie">
      <div className="App-header">
            <h1>Movies with React</h1>
              </div>
                <SearchMovie filter={this.filter.bind(this)}/>

                <p className="App-intro">List of movies</p>

               <FilmList filtmovie={this.state.filtmovie}/>
                            </div>
    );
  }
}




export default App;
