
const initialState = {
  loading: true,
  results: []
}

function movies (state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'RECEIVE_MOVIES':
      return {
        ...state,
        loading: false,
        results: [...state.results, ...action.movies]
      }

    default:
      return state
  }
}

export default movies
