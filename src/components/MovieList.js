import React from 'react'
import {connect} from 'react-redux'

import {getMovies} from '../actions/movies'
import {getSearchedMovies} from '../actions/movies'

import Movies from './Movies'
import Loading from './Loading'

export class MovieList extends React.Component {

    componentWillMount() {
      if (this.props.movies.length === 0) {
        this.props.dispatch(getMovies())
      };
    }

    handleChange = event => {
      this.setState({
          searchTerm: event.target.value
      });
    };

    search = event => {
      event.preventDefault();
      const searchTerm = event.target.value;
      this.props.dispatch(getSearchedMovies(searchTerm))
      console.log(searchTerm);
    };

    render() {
      const { loading } = this.props;
      // console.log(this.props);
      return (
          <div>
            {loading &&
              <Loading />
            }
            <form className="form" id="movieSearch" onSubmit={this.search}>
              <input
                type="text"
                className="input"
                placeholder="Search"
                name="Search input"
                aria-label="Search"
                onChange={this.handleChange}
              />
              <button name="submit button" className="submit-button"></button>
            </form>
            <ul className="movie-list__list">
              {!loading &&
              this.props.movies.map((movie) => <Movies movie={movie} key={movie.id} />)}
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

  export default connect(mapStateToProps)(MovieList)
