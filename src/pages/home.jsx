import MovieCard from "../components/MovieCard";

function Home(){
    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "The Dark Knight", year: 2008 }
    ];
    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
            </div>
        </div>
    )
}

export default Home;