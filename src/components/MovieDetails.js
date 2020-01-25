import React from 'react'
import {connect} from 'react-redux'

import {getMoviebyId} from '../actions/movies'

import Loading from './Loading'


  const renderMovieDetails = (props) => {
        // const ext = props.thumbnail.extension
        // const path = props.thumbnail.path
        // const imagePath = path + "/standard_fantastic." + ext
        // const info = props.description
        // const actualDescription = (info == "" )? "I'm the most exciting hero in the world...where is my description!!" : props.description
        // const comics = props.comics.items;

        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
    )
}

export class MovieDetails extends React.Component {
    componentDidMount() {
        console.log('component mounted');
        const id = this.props.match.params.id; // nested object
        this.props.dispatch(getMoviebyId(id))
        // use this to help the function remember props
    }

    render () {
        const { movie} = this.props;
        console.log('test');
        return (
            <div>
              <p>testing</p>
                {renderMovieDetails(movie)}
            </div>
        )
    }
}
// export mapStateToProps outside of connect so that it can be tested more easily

// export const mapStateToProps = (state, ownProps) => {
//     const id = ownProps.match.params.id;
//     console.log(id);
//     const movie = state.movies.results.find(movie => {
//         return movie.id.toString() === id
//     }) || {}

//     return { movie }
// }

// export default connect(mapStateToProps)(MovieDetails)

export default MovieDetails
