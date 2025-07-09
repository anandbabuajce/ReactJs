import React from 'react'
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home() {
    const [searchQuery,setSearchQuery]= useState("")

    const movies = [
        {id: 1, title: "Inception", release_date: "2010-07-16"},
        {id: 2, title: "Interstellar", release_date: "2014-11-07"},
        {id: 3, title: "Dunkirk", release_date: "2017-07-21"}
    ];

    const handleSearch = (e) => {
        
    };
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='=search-form'>
            <input type='text' placeholder='Search formovies...' className='search-input' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie.id} />))}


        </div>
    </div>
  )
}

export default Home