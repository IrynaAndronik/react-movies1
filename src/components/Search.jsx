import React, {useState} from 'react'

const Search = ({searchMovie, typeMovie}) => {

    const [search, setSearch] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (search ) {
                searchMovie(search, typeMovie);
            } else
                alert('Enter title movie');
        }
    }

        return <div className="row">
            <div className="input-field">
                <input
                    placeholder='search'
                    type="search"
                    className="validate"
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="btn search-btn" onClick={() => searchMovie(search, typeMovie)}
                >Search</button>
            </div>
        </div>
}
export {Search}
