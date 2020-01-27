import React from 'react'
import { Link, Router, BrowserRouter } from 'react-router-dom'

const Header = () => {
    return (
      <div className='page-header'>
        <span aria-hidden="true" className="double-line"></span>
        <span aria-hidden="true" className="double-line"></span>
        <span aria-hidden="true" className="single-line"></span>
        <span aria-hidden="true" className="single-line"></span>
      </div>
   )
}

export default Header
