import React, {useState, useEffect} from 'react';
import {MoviesList} from '../components/MoviesList';
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'
import {MoviesType} from "../components/MoviesType";

const API_KEY = process.env.REACT_APP_KEY

function Main () {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [typeMovie, setTypeMovie] = useState('all');

    const handleTypeMovie = (typeMovie) => {
       setTypeMovie(typeMovie)
    }

    const searchMovie = (titleMovie, typeMovie='all') => {
        setIsPending(true);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titleMovie}${typeMovie !== 'all'? `&type=${typeMovie}`: ''}`)
            .then(response => response.json())
            .then(response => {
                if (response.Error) {
                    throw Error('Movie not found');
                }
                setMovies(response.Search);
                setIsPending(false);
            })
            .catch((err) => {
                setMovies([]);
                setError(err.message);
                setIsPending(false)
            })
    }
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setIsPending(false);
            })
    }, [])

        return <main className='container content'>
            <Search searchMovie={searchMovie} typeMovie={typeMovie}/>
            <MoviesType handleTypeMovie={handleTypeMovie}/>
            {error && <div>{error}</div>}
            {isPending && <Preloader /> }
            {<MoviesList movies={movies} /> }
        </main>

}

export {Main};
