import React from 'react'
import {connect} from 'react-redux'

import {getMoviebyId} from '../actions/movies'

import Loading from './Loading'


const renderMovieDetails = (movie) => {
  const m = movie;
  const userScore = Math.round(m.vote_average * 10) + '%';
  const stub = 'https://image.tmdb.org/t/p/';
  const background = stub + 'w780' + m.backdrop_path;
  const releaseDate = new Date(m.release_date);
  const getYear = releaseDate.getFullYear();

  return (
    <div>
      <div className='movie__background--image' style={{ backgroundImage: `url(${background})` }}>
          <a className="home-link" href="/"><span></span></a>
          <img className="movie__poster" src={stub + 'w185' + m.poster_path}/>
      </div>
      <div className='movie__details'>
        <h1 className="movie__title">{m.title}</h1>
        <p>{getYear} - {userScore} User score</p>
        <p>{m.runtime}</p>
      </div>
      <div className="movie__overview">
        <h3>Overview</h3>
        <p>{m.overview}</p>
      </div>
    </div>
  )
}

export class MovieDetails extends React.Component {
componentDidMount() {
  const id = this.props.match.params.id; // nested object
  this.props.dispatch(getMoviebyId(id))
  // use this to help the function remember props
}

render () {
  const { movie } = this.props;
  const hasMovieData = Object.keys(movie).length !== 0;
  return (
      <div>
          {!hasMovieData && <Loading />}
          {hasMovieData && renderMovieDetails(movie)}
      </div>
  )
}
}
// export mapStateToProps outside of connect so that it can be tested more easily

export const mapStateToProps = (state, ownProps) => {
const id = ownProps.match.params.id;

const movie = state.movies.results.find(movie => {
  return movie.id.toString() === id
}) || {}

return { movie }
}

export default connect(mapStateToProps)(MovieDetails)
