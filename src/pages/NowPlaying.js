import React, { useEffect, useState} from 'react';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getNowPlayingMovies from 'services/getNowPlaying';
import compareMovies from 'utils/compareMovies';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [moviesNow, setMoviesNow] = useState([]);

    useEffect(() => {
        setLoading(true);

        getNowPlayingMovies()
            .then(movies => {
                const moviesSort = movies.sort(compareMovies)
                setMoviesNow(moviesSort);
                setLoading(false);
            })
            .catch(() => alert('Ocurrio algo'));
    }, [])

    if(loading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <>
            <Layout>
                <div style={{ margin: "auto"}}>
                    <ListOfMovies movies={moviesNow} title="Movies Now Playing" />
                </div>
            </Layout>
        </>
    )
}