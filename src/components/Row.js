import React, { useEffect } from 'react'
import { getMovies } from '../Api';
import './row.css'

const imageHost = "https://image.tmdb.org/t/p/original/";
const Row = ( {title, path} ) => {

  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async(_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data);
      setMovies(data?.results)
    } catch(error) {
      console.log("fetchMovies error: ", error)
    }
  }

useEffect( () => {
  fetchMovies(path);
}, [path])

  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {
        movies?.map(movie => {
          return (
            <img key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name} className='movie-card' />
          )
        })
        }
      </div>
    </div>
  );
  
}

export default Row