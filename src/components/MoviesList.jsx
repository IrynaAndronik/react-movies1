import React from 'react';
import {Movie} from "./Movie";

function MoviesList(props) {
    const {movies} = props;
    return <div className="movies">
        {
            movies.map (movie => (
                <Movie key={movie.imdbID}
                       title={movie.Title}
                       poster={movie.Poster}
                       type={movie.Type}
                       year={movie.Year}
                />
            ))}
    </div>
}
export { MoviesList };
