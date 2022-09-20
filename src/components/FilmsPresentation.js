import React, { Component } from "react";
import { FilmsList } from "../shared/ListOfFilms";

export default class FilmsPresentation extends Component {
  render() {
    return (
      <div className="container">
        {FilmsList.map((film) => (
          <div className="column">
            <div className="card">
              <div className="image">
                <img src={film.image} />
              </div>
              <div className="content">
                <h4>{film.title}</h4>
                <p className="infor">{film.nation}</p>
                <p className="infor">{film.year}</p>
                <div className="buttons">
                  <button class="button fa fa-play"></button>
                  <button class="button fa fa-plus "></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
