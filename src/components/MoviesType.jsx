import React, {useState} from 'react'

function  MoviesType ({handleTypeMovie}) {
    const [type, setType] = useState('all')

    const handleChange = (event) => {
        console.log(event.target.value)
        setType(event.target.value);
        handleTypeMovie(event.target.value);
    }

        return <div className="type-movie">
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="all"
                           checked={type === "all"}
                           onChange={handleChange}
                    />
                    <span>All</span>
                </label>
            </p>
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="movie"
                           checked={type === "movie"}
                           onChange={handleChange}

                    />
                    <span>Movie only</span>
                </label>
            </p>
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="series"
                           checked={type === "series"}
                           onChange={handleChange}

                    />
                    <span>Series only</span>
                </label>
            </p>
        </div>
}

export {MoviesType}
