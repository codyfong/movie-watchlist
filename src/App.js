import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import Watchlist from './components/Watchlist'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)


  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
  })};

  const addMovie = (movie) => {
    setWatchList(prev => [...prev, movie])
  }
  // const addMovie = (movie) => {setWatchList([...watchList, movie])} 

  // const removeMovie = (movie) => {
  //   const newState = 
  // }

  useEffect(() => {
    getData();
  }, [page]);

  
  return (
    <div className="App">
        <Header/>
        <main>
        <MovieScreen
        addMovie = {addMovie}
        list = {watchList}
        page = {page}
        setPage = {setPage}
        movieList = {movieList}
        />
        <Watchlist list = {watchList}/>
        </main>

    </div>
)
}

export default App;
