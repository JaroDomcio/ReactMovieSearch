import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import "../css/Home.css";
import { SearchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])
    

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`)
    };

    return(
        <div className="home">

            <form onSubmit = {handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie" className="search-input" value={searchQuery} onChange = {(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className = "search-btn">Search</button>
            </form>


            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>


        </div>
        )

}

export default Home;