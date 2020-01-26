import React from 'react'
import { Link, Router, BrowserRouter } from 'react-router-dom'

const Header = () => {
    return (
      <div className='page-header'>
        <form className="form" id="movieSearch">
          <input
            type="text"
            className="input"
            placeholder="Search"
          />
          <button className="submit-button">
          </button>
        </form>
      </div>
   )
}

export default Header
