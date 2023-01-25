import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import Watchlist from './components/Watchlist'




function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  const addMovie = (movie) => {
    return setList([...list, movie])
  }
  // const addMovie = (movie) => {setWatchList([...watchList, movie])} 

  // const removeMovie = (movie) => {
  //   const newState = 
  // }


  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie
    });
    setList(newState)
  };
  // const removeMovie = (movie) => {
  //   const newState = watchList.filter(index => index !== movie)
  //   setWatchList(newState)
  // }

  const getData = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
  })};


  useEffect(() => {
    getData();
  }, [page]);

  
  return (
    <div className="App">
        <Header/>
        <main>
          <MovieScreen
          removeMovie = {removeMovie}
          addMovie = {addMovie}
          list = {list}
          page = {page}
          setPage = {setPage}
          movieList = {movieList}
          />
          <Watchlist 
          list = {list}
          removeMovie = {removeMovie}
          />  
        </main>

    </div>
)
}

export default App;
