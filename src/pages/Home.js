import React, { useEffect, useState} from 'react';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getTopRatedMovies from 'services/getTopMovies';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [moviesNow, setMoviesNow] = useState([]);

    useEffect(() => {
        setLoading(true);

        getTopRatedMovies()
            .then(movies => {
                setMoviesNow(movies);
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
                    <ListOfMovies movies={moviesNow} title="Top Rated" />
                </div>
            </Layout>
        </>
    )
}