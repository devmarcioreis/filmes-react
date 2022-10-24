import React, { useEffect } from 'react'
import { getMovies } from '../Api';

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
      <h2 className='row-header'></h2>
    </div>
  );
  
}

export default Row