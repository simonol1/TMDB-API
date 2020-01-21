import request from 'superagent'

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
export const LOADING = 'LOADING'

export const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export const setErrorMessage = (message) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage: message
  }
}

export const changeLoadState = (newLoadState) => {
  return {
      type: LOADING
  }
}

export function getMovies () {
  return (dispatch) => {
   dispatch(changeLoadState(true))
     request
       .get(`https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`)
       .end((err, res) => {
        err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receiveMovies(res.body.results))
      })
     }
   }

   export function getMoviebyId (id) {
     return (dispatch) => {
       request
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`)
        .end((err, res) => {
          // console.log(res.body.results);
          err ? dispatch(setErrorMessage("ERROR:" + err.message)) : dispatch(receiveMovies(res.body.results))
        })
      }
    }

