import React, { Component } from 'react';
  import './Mov.css';
  import Movie from './Movie'



  class FilmList extends Component
  {
    render(){
let mov;
    mov=this.props.filtmovie.map((movi)=>{
      return (<Movie movi={movi} id={movi.key}/>)
    })

    return (
      <div>
        {mov}
      </div>
    );
  }
  }





  export default FilmList;
