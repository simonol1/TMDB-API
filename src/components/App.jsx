import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Movies from './Movies'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='page-wrapper'>
        <div className='page-header'>
        <Header />
        </div>
        <div className='page-content__container'>
          <Route exact path="/" component={Movies} />
          <Route path='/details/:id' component={MovieDetails}/>
        </div>
      </div>
    </BrowserRouter>
    )
}

export default App
