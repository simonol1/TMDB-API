import React from 'react'
import { Link } from "react-router-dom"

const Movies = (props) => {
    const m = props.movie;
    const id = m.id;
    const stub = 'https://image.tmdb.org/t/p/w185';
    const userScore = Math.round(m.vote_average * 10) + '%';
    const releaseDate = new Date(m.release_date);

    Date.prototype.getFullMonth = function () {
      return (["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])[this.getMonth()];
    }
    const monthAndYear = releaseDate.getFullMonth() + ' ' + releaseDate.getFullYear();


    return (
      <div>
        <Link to={`/details/${id}`}>
          <li className="movie-list__list-item" key={id}>
            <img className="movie-list__poster" src={stub + m.poster_path}/>
            <h5 className="movie-list__title">{m.title}</h5>
            <p className="movie-list__popularity">{userScore}</p>
            <p className="movie-list__release-date">{monthAndYear}</p>
          </li>
        </Link>
      </div>
    )
}

export default Movies

