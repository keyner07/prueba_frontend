import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

import getSimilarMovies from 'services/getMoviesSimilar';
import ListOfMovies from 'components/ListOfMovies';

export default function MoviesSimilar({ id }) {
    const [moreMovies, setMoreMovies] = useState(false);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleMoreMovies = () => {
        setMoreMovies(prevState => !prevState);
    }

    useEffect(() => {
        setLoading(true);

        getSimilarMovies({ id })
            .then(movies => {
                setMovies(movies);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [id])

    const label = moreMovies ? 'Less movies' : 'More movies';

    if(loading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <>
            {
                movies.length > 0
                ?
                <div >
                {
                    moreMovies
                    ?
                    <ListOfMovies movies={movies} button={<Button type="primary" onClick={handleMoreMovies} size="large" >{ label }</Button>} />
                    :
                    <ListOfMovies movies={movies.slice(0,8)} button={<Button type="primary" onClick={handleMoreMovies} size="large" >{ label }</Button>} />
                }
                </div>
                :
                null
            }
        </>
    )
}