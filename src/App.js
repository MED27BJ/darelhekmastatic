// the app import movieadd an movieList components and the data of the movies
import { useState } from 'react';
import './App.css';
import MovieAdd from './components/MovieAdd';
import MovieList from './components/MovieList';

import { movieData } from './MovieData';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import KnowMore from './components/KnowMore';

function App() {
  // the declaration of the useState for the movie data
  const [movies,setMovies]=useState(movieData)
  // this function add a new movie to the data movie
  const handleAdd =(newMovie)=>{
    setMovies([...movies,newMovie])
    }
    // state for search by title and rate
    const [searchTitle,setSearchTitle]=useState("");
    const [searchRate,setSearchRate]=useState(0);
    


  return (
    <div className="App">
      <NavBar/>
      
     <Routes>
     <Route path="/movie" element={
    <>
    <MovieAdd setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} funcAdd={handleAdd}/>
    <MovieList searchTitle={searchTitle} searchRate={searchRate} movies={movies}/>

    </> 
    }/>
     
    <Route path="/" element={<Home movies={movies}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/movie/:id" element={<KnowMore movies={movies}/>}/>
     </Routes> 
   
    </div>
  );
}
// export of data
export default App;
