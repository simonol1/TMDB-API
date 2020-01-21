import React from 'react'
import {connect} from 'react-redux'

import {getMovies} from '../actions/movies'
import MovieList from './MovieList'

import Loading from './Loading'

export class Movies extends React.Component {

    componentWillMount() {
      if (this.props.movies.length === 0) {
        this.props.dispatch(getMovies())
      };
    }

    render() {
      const { loading } = this.props;
      // console.log(this.props);
      return (
          <div>
            {loading &&
              <Loading />
            }
            <ul className="movie-list__list">
              {!loading &&
              this.props.movies.map((movie) => <MovieList movie={movie} key={movie.id} />)}
              }
            </ul>
          </div>
      )
    }
  }

  export const mapStateToProps = (state) => {
    return {
      movies: state.movies.results,
      loading: state.movies.loading
     }
  }

  export default connect(mapStateToProps)(Movies)
