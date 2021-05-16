import React, { useEffect, useState} from 'react';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import ListOfMovies from 'components/ListOfMovies';

import getNowPlayingMovies from 'services/getNowPlaying';
import compareMovies from 'utils/sortMovies';

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

    return (
        <>
            <Helmet>
                <title>Now Playing || MoviesApp</title>
            </Helmet>
            <Layout>
            {
                    loading
                    ?
                    <div className="container">
                        <Spin size="large" />
                    </div>
                    :
                    <ListOfMovies movies={moviesNow} title="Movies Now Playing" />
            }
            </Layout>
        </>
    )
}