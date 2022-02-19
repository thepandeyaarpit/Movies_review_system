import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote>=8){
        return 'green';
    } else if(vote>=6){
        return 'orange';
    } else{
        return 'red';
    }
}


function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <>
        <div className="movie">
        <img src={poster_path ? (IMG_API+ poster_path) : 'https://media.istockphoto.com/photos/35mm-film-strip-gradient-background-picture-id1299279536?b=1&k=20&m=1299279536&s=170667a&w=0&h=3tPJhXp2XlR9bxsQLTPmSpjYcz7aptypx-WMoivgZnQ='} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    </>
  )
}

export default Movie;