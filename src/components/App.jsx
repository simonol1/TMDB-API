import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='page-wrapper'>
        <Route exact path="/" component={Header} />
        <div className='page-content__container'>
          <Route exact path="/" component={MovieList} />
          <Route path='/details/:id' component={MovieDetails}/>
        </div>
      </div>
    </BrowserRouter>
    )
}

export default App
