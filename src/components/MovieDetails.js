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
                <h1>{props.movie.title}</h1>
                {/* <div><img src={imagePath} alt={props.name}/></div>
                <h3>{actualDescription}</h3>
                <hr></hr>
                <h3>Featuring in
                    {comics !== [] && " no comics at this stage"}
                </h3>
                <ul>
                    {comics.map((comic) =><span key={comic.resourceURI}><li>{comic.name} </li></span> )}
                </ul> */}
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
        const { movie} = this.props;
        const hasMovieData = Object.keys(character).length !== 0;
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
