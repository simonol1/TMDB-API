import React from 'react'
import { Link } from "react-router-dom"

const MovieList = (props) => {
    const m = props.movie;

    const stub = 'https://image.tmdb.org/t/p/w185';
    return (
      <div>
        <Link to={`/details/${id}`}>
          <li className="movie-list__list-item" key={m.id}>
            <img className="movie-list__poster" src={stub + m.poster_path}/>
            <h5 className="movie-list__title">{m.title}</h5>
            <p className="movie-list__popularity">{m.popularity}</p>
            <p className="movie-list__release-date">{m.release_date}</p>
          </li>
        </Link>
      </div>
    )
}

export default MovieList

