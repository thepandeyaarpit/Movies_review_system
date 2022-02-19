import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

// cc07b951e815e8f0a3d1ca0d853d5d6c
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc07b951e815e8f0a3d1ca0d853d5d6c&page=1";




const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=cc07b951e815e8f0a3d1ca0d853d5d6c&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('');
  }

  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
      <>
      <header>
          <form onSubmit={handleOnSubmit}>
            <input type="text" className="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
          </form>
        </header>
        <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
          <Movie key={movie.id} {...movie} />
        )}
      </div>;
      </>
  )
}

export default App;
