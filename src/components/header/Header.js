import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const header = () => {
  return (
    <div className="header">
        <div className='headerLeft'>
            <Link  to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img></Link>

            <Link className='link' to="/movies/popular"><span>Popular</span></Link>
            <Link className='link' to="/movies/top_rated"><span>Top Rated</span></Link>
            <Link className='link' to="/movies/upcoming"><span>Upcoming</span></Link>

        </div>
    </div>
  )
}

export default header