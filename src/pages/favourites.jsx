import '../css/Favourites.css'
import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from "../components/MovieCard"

function Favourites() {
  const {favourites} = useMovieContext();

  if (favourites) {
    return (<div className = "favourites">
      <h2 className="favourites-title">Your Favourite Movies</h2>
        <div className="movies-grid">
          {favourites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  )};

  return (
    <div className="favourites-empty">
        <h2>No favourtie movies yet</h2>
        <p>Start adding some movies to your favourites list!</p>
    </div>
  );
}

export default Favourites;