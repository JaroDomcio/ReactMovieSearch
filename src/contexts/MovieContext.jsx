import { createContext, useState, useContext, useEffect, } from "react";

const MovieContext = createContext();


export const useMovieContext = () => useContext(MovieContext);


export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    },[])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]); //Działa tylko wtedy, gdy favourites się zmieni


    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(fav => fav.id !== movieId));
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }

    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}