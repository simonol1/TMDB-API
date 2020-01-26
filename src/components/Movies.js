import React from 'react'
import { Link } from "react-router-dom"

const Movies = (props) => {
    const m = props.movie;
    const id = m.id;
    const stub = 'https://image.tmdb.org/t/p/w185';
    const userScore = Math.round(m.vote_average * 10) + '%';

    return (
      <div>
        <Link to={`/details/${id}`}>
          <li className="movie-list__list-item" key={id}>
            <img className="movie-list__poster" src={stub + m.poster_path}/>
            <h5 className="movie-list__title">{m.title}</h5>
            <p className="movie-list__popularity">{userScore}</p>
            <p className="movie-list__release-date">{m.release_date}</p>
          </li>
        </Link>
      </div>
    )
}

export default Movies

