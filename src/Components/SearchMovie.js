import React, { Component } from 'react';

class SearchMovie extends Component
{
constructor(props)
{
  super(props);
  this.state={
    search:''
  }
}
  searchmovie(event)
  {
    this.setState({search:event.target.value.substr(0,20)});
    this.props.filter(event.target.value);
  }

  render()  {
  return(
    <div className ="search">
    <h3 className="head"> </h3>
    <input type="text"
    palceholder="Search Movie.."
    value={this.state.search}
    onChange={this.searchmovie.bind(this)}
    className="input"
    />
    </div>
  );
}
}

 export default SearchMovie;
