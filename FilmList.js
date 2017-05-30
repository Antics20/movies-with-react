import React, { Component } from 'react';
  import './Mov.css';
  import Movie from './Movie'



  class FilmList extends Component
  {
    render(){

    return (
      <div>
          {
            this.props.movie.map((movi)=>{
              return <Movie movi={movi} id=  {movi.key}/>
            })
          }
      </div>

    );


  }


  }





  export default FilmList;
