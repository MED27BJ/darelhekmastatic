// This component returns the search by title and rate by filter and display the movie card component with map method
// import of the movie card
import MovieCard from './MovieCard'


// the main function that use three parameters as props the data, search by title and search by rate
const MovieList = ({movies,searchTitle,searchRate}) => {
 
  
  return (
    <div>
    <div className='movieList'>

    {movies
      .filter((el)=>(el.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())) && (el.rating >= searchRate))
      .map((el)=>(
      <MovieCard key={el.title} movie={el}></MovieCard>
      
  ))}
    </div>
    </div>
)}
// export of the component
export default MovieList
