import React, { Component } from 'react'
import { FilmsList } from '../shared/ListOfFilms';
import FilmsPresentation from  './FilmsPresentation';

export default class Container extends Component {
    constructor(){
super();
this.state={
    films: FilmsList
};
    }

  render() {
    return (
        <FilmsPresentation films={this.state.films}></FilmsPresentation>

    )
  }
}
