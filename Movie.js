import React, { Component } from 'react';
  import './Mov.css';






class Movie extends Component
{
  render(){

  return (
    <div>
    <li className="title">

      Title: <span>
      {this.props.movi.title}
      </span><br />
  </li>
    <li className="year">
      Year: <span>
      {this.props.movi.year}
      </span><br />
      </li>
      </div>
  );


}


}


console.log("Titlul este: ");


export default Movie;
